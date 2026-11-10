# Portfolio

React frontend in `client/`, with an existing Express SMTP server in `server/`.

## Vercel deployment

Import `emilhallberg/portfolio` into the intended Vercel account/team:

| Setting | Value |
| --- | --- |
| Root directory | `client` |
| Framework | Create React App |
| Install command | `yarn install --frozen-lockfile` |
| Build command | `yarn build` |
| Output directory | `build` |
| Node.js | 22.x (pinned in `client/package.json`) |
| Production branch | `main` |

`client/vercel.json` configures the build and direct navigation to `/contact`
and `/portfolio/...`. Static files and `/api/email` retain their own routes.
`client/api/email.js` runs as a Node function; Docker and the Express server
are not needed for Vercel.

### Contact email

Add these **server-only** environment variables in Vercel for Preview and
Production before deploying. See `client/.env.example` for placeholders:

- `EMAIL_HOST`: externally reachable SMTP hostname.
- `EMAIL_PORT`: normally 587 (STARTTLS) or 465 (implicit TLS).
- `EMAIL_USERNAME`: SMTP username, also used as the sender address.
- `EMAIL_PASSWORD`: SMTP password.
- `EMAIL_FROM`: optional sender address; defaults to `EMAIL_USERNAME`.
- `EMAIL_TO`: destination inbox.

Never prefix credentials with `REACT_APP_` or commit real values. SMTP must
accept connections from Vercel, without depending on a private Hetzner network
or an allowlist limited to the old server. The function requires TLS and uses
the visitor's email as Reply-To. The sender defaults to the authenticated
address, or uses `EMAIL_FROM` when the provider permits that sender.
A successful response means SMTP accepted the recipient, not confirmed inbox
delivery. Verify receipt and replies in the destination inbox.

The form preserves input on failure and prevents duplicate submissions while
sending. The endpoint validates required fields and lengths. It has no durable
application rate limiter or CAPTCHA; use Vercel firewall rate limiting or add
bot protection if spam becomes an issue.

### iCloud Mail with the custom domain

For `emil@hallbergemil.com` hosted on iCloud Mail, set these variables for
Preview and Production in Vercel:

| Variable | Value |
| --- | --- |
| `EMAIL_HOST` | `smtp.mail.me.com` |
| `EMAIL_PORT` | `587` (STARTTLS) |
| `EMAIL_USERNAME` | The full iCloud Mail address of the account owning the custom address |
| `EMAIL_PASSWORD` | An Apple app-specific password, stored as Sensitive |
| `EMAIL_FROM` | `emil@hallbergemil.com` |
| `EMAIL_TO` | `emil@hallbergemil.com` |

Verify that you can send from the custom address in iCloud Mail first.
At [account.apple.com](https://account.apple.com/), open Sign-In and Security
then App-Specific Passwords, and generate one named `Portfolio Vercel`.
This requires two-factor authentication on your Apple Account. Paste the
generated password directly into Vercel, then redeploy and test the form.
The full iCloud Mail address used for SMTP login can differ from your
custom-domain sender and from the email used to sign in to your Apple Account.

Keep the existing iCloud MX, SPF, DKIM and other mail DNS records when later
moving the website's DNS to Vercel.

Apple references: [SMTP settings](https://support.apple.com/en-us/102525),
[app-specific passwords](https://support.apple.com/en-us/102654),
[custom domains](https://support.apple.com/en-us/102540).

### Local development and checks

From `client/`:

```sh
yarn install --frozen-lockfile
yarn test:api
yarn lint
yarn build
```

For the existing setup, `yarn start` calls `http://localhost:4000/email`;
run the Express server separately with its SMTP environment variables set.
For Vercel's function locally, copy `.env.example` to `.env.local`, fill in
SMTP settings, uncomment `REACT_APP_CONTACT_API_URL=/api`, and run
`npx vercel dev` from `client/`. Link to the same Vercel project when prompted.
The API tests mock SMTP and never send real emails.

### Verify before switching DNS

1. Deploy to a Vercel URL while the existing domain still points to Hetzner.
2. Check the homepage, `/contact`, a real `/portfolio/<slug>` URL opened
   directly and refreshed, images, both languages, and mobile layout.
3. Send a real contact message, verify inbox receipt and Reply-To. Check that
   an SMTP failure shows an error and preserves the entered message. Restore
   valid settings and redeploy after any deliberate failure test.
4. Add the existing domain and `www` to Vercel, choose the preferred hostname,
   then update only the website DNS records to the values Vercel provides.
   Preserve mail records (MX, SPF, DKIM, DMARC) and unrelated services.
5. Verify HTTPS, hostname redirects, direct routes, and contact email on the
   custom domain. Keep Hetzner available during DNS propagation and rollback.
6. Only after verification, retire the portfolio's old Docker deployment and
   GitHub Actions workflow. Check for other sites or mail services before
   cancelling any Hetzner server.

The existing `.github/workflows/workflows.yml`, Dockerfiles, and Express
service remain active. Pushing to `main` still triggers the Hetzner deployment.
No DNS or hosting changes are made by this repository preparation.

References: [Vercel CRA](https://vercel.com/docs/frameworks/frontend/create-react-app),
[Node functions](https://vercel.com/docs/functions/runtimes/node-js),
[custom domains](https://vercel.com/docs/domains/working-with-domains/add-a-domain).
