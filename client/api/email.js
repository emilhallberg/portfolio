const nodemailer = require("nodemailer");

module.exports = async function email(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ status: false });
  }

  const body = req.body;
  const limits = { from: 254, name: 255, subject: 255, text: 5000 };
  if (
    !body ||
    typeof body !== "object" ||
    Object.entries(limits).some(
      ([key, limit]) =>
        typeof body[key] !== "string" ||
        !body[key].trim() ||
        body[key].length > limit,
    )
  ) {
    return res.status(400).json({ status: false });
  }

  const from = body.from.trim();
  if (
    !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(from) ||
    [body.name, body.subject].some((value) => /[\r\n]/.test(value))
  ) {
    return res.status(400).json({ status: false });
  }

  const {
    EMAIL_HOST,
    EMAIL_PORT,
    EMAIL_USERNAME,
    EMAIL_PASSWORD,
    EMAIL_FROM,
    EMAIL_TO,
  } = process.env;
  const port = Number(EMAIL_PORT);
  if (
    !EMAIL_HOST ||
    !EMAIL_USERNAME ||
    !EMAIL_PASSWORD ||
    !EMAIL_TO ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535
  ) {
    console.error("Contact email configuration is missing or invalid");
    return res.status(500).json({ status: false });
  }

  const transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: EMAIL_USERNAME, pass: EMAIL_PASSWORD },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });

  try {
    const result = await transport.sendMail({
      from: EMAIL_FROM || EMAIL_USERNAME,
      to: EMAIL_TO,
      replyTo: from,
      subject: `[hallbergemil.com] ${body.name.trim()} (${from}): ${body.subject.trim()}`,
      text: body.text.trim(),
    });
    if (!result.accepted || result.accepted.length === 0) {
      throw new Error("Recipient was not accepted");
    }
    return res.status(200).json({ status: true });
  } catch (error) {
    // Do not log message contents, addresses, credentials, or SMTP responses.
    console.error("Contact email delivery failed", {
      code:
        typeof error?.code === "string" && /^[A-Z0-9_]{1,32}$/.test(error.code)
          ? error.code
          : "UNKNOWN",
      responseCode: Number.isInteger(error?.responseCode)
        ? error.responseCode
        : undefined,
    });
    return res.status(502).json({ status: false });
  } finally {
    transport.close();
  }
};
