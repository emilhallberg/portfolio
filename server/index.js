const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;
const {
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_TO,
  EMAIL_USERNAME,
  EMAIL_PASSWORD,
  NODE_ENV,
} = process.env;

if (NODE_ENV !== 'production') {
  app.use(cors());
}

if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USERNAME || !EMAIL_PASSWORD || !EMAIL_TO) {
  throw new Error('All email environment variables must be set');
}

const transport = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: parseInt(EMAIL_PORT, 10),
  secure: Number(EMAIL_PORT) === 465,
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 20000,
  auth: { user: EMAIL_USERNAME, pass: EMAIL_PASSWORD },
});

app.use(bodyParser.json());

app.post('/email', async (req, res) => {
  if (!req.body.from || !req.body.name || !req.body.subject || !req.body.text) {
    res.status(400).send(JSON.stringify({ status: false }));
    return;
  }

  try {
    const result = await transport.sendMail({
      from: EMAIL_USERNAME,
      to: EMAIL_TO,
      replyTo: req.body.from,
      subject: `[hallbergemil.com] ${req.body.name} (${req.body.from}): ${req.body.subject}`,
      text: req.body.text,
    });
    if (!result.accepted || result.accepted.length === 0) {
      throw new Error('Recipient was not accepted');
    }
    res.status(200).json({ status: true });
  } catch {
    console.error('Contact email delivery failed');
    res.status(502).json({ status: false });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
