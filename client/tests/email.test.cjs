const { test, afterEach } = require("node:test");
const assert = require("node:assert/strict");
const nodemailer = require("nodemailer");
const email = require("../api/email");

const originalTransport = nodemailer.createTransport;
const originalEnv = { ...process.env };
afterEach(() => {
  nodemailer.createTransport = originalTransport;
  process.env = { ...originalEnv };
});

const body = {
  from: "visitor@example.com",
  name: "Visitor",
  subject: "Hello",
  text: "A message",
};
function response() {
  return {
    headers: {},
    statusCode: 200,
    setHeader(name, value) {
      this.headers[name] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(value) {
      this.body = value;
      return this;
    },
  };
}
function configure() {
  Object.assign(process.env, {
    EMAIL_HOST: "smtp.example.com",
    EMAIL_PORT: "587",
    EMAIL_USERNAME: "sender@example.com",
    EMAIL_PASSWORD: "test-only",
    EMAIL_TO: "owner@example.com",
  });
}

test("rejects unsupported methods and invalid payloads without contacting SMTP", async () => {
  nodemailer.createTransport = () => {
    throw new Error("Must not contact SMTP");
  };
  const res = response();
  await email({ method: "GET" }, res);
  assert.equal(res.statusCode, 405);
  assert.equal(res.headers.Allow, "POST");
  for (const payload of [
    null,
    "invalid",
    {},
    { ...body, text: " " },
    { ...body, from: "invalid" },
    { ...body, from: "attacker@example.com\r\nBcc: other@example.com" },
    { ...body, subject: "Hello\r\nBcc: other@example.com" },
    { ...body, name: 42 },
    { ...body, text: "a".repeat(5001) },
  ]) {
    const res = response();
    await email({ method: "POST", body: payload }, res);
    assert.equal(res.statusCode, 400);
    assert.deepEqual(res.body, { status: false });
  }
});

test("missing or invalid SMTP configuration fails without exposing secrets", async () => {
  configure();
  delete process.env.EMAIL_TO;
  nodemailer.createTransport = () => {
    throw new Error("Must not contact SMTP");
  };
  const missing = response();
  await email({ method: "POST", body }, missing);
  assert.equal(missing.statusCode, 500);
  configure();
  for (const port of ["invalid", "0", "65536"]) {
    process.env.EMAIL_PORT = port;
    const res = response();
    await email({ method: "POST", body }, res);
    assert.equal(res.statusCode, 500);
    assert.deepEqual(res.body, { status: false });
  }
});

test("waits for SMTP acceptance, uses a fixed sender and visitor reply-to, then closes", async () => {
  configure();
  let finish;
  let options;
  let message;
  let closed = false;
  nodemailer.createTransport = (value) => {
    options = value;
    return {
      sendMail(value) {
        message = value;
        return new Promise((resolve) => {
          finish = resolve;
        });
      },
      close() {
        closed = true;
      },
    };
  };
  const res = response();
  const pending = email({ method: "POST", body }, res);
  assert.equal(res.body, undefined);
  assert.equal(closed, false);
  assert.equal(message.from, process.env.EMAIL_USERNAME);
  assert.equal(message.to, process.env.EMAIL_TO);
  assert.equal(message.replyTo, body.from);
  assert.equal(message.text, body.text);
  assert.equal(options.requireTLS, true);
  assert.equal(options.secure, false);
  finish({ accepted: ["owner@example.com"] });
  await pending;
  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { status: true });
  assert.equal(res.headers["Cache-Control"], "no-store");
  assert.equal(closed, true);
});

test("SMTP failures and rejected recipients return failure and close the transport", async () => {
  configure();
  process.env.EMAIL_PORT = "465";
  for (const failure of [true, false]) {
    let closed = false;
    nodemailer.createTransport = (options) => {
      assert.equal(options.secure, true);
      return {
        async sendMail() {
          if (failure) throw new Error("Private SMTP response");
          return { accepted: [] };
        },
        close() {
          closed = true;
        },
      };
    };
    const res = response();
    await email({ method: "POST", body }, res);
    assert.equal(res.statusCode, 502);
    assert.deepEqual(res.body, { status: false });
    assert.equal(closed, true);
  }
});
