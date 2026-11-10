# Portfolio

React frontend and contact API in `client/`, deployed on Vercel at
[hallbergemil.com](https://hallbergemil.com).

## Vercel deployment

Vercel is connected to `emilhallberg/portfolio`. Pushes to `main` automatically
build and deploy the production site; pull requests get preview deployments.
The GitHub Actions workflow runs API tests, lint, and a production build.

Project settings:

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
`client/api/email.js` runs as a Node function. `www.hallbergemil.com` redirects
to the root domain, and Vercel manages HTTPS for both hostnames.

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
accept connections from Vercel. The function requires TLS and uses
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

Website DNS is managed in GoDaddy and points to Vercel. Keep the existing
iCloud MX, SPF, DKIM, and Apple verification records intact when updating DNS.

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

For the full app including `/api/email`, copy `.env.example` to `.env.local`,
fill in your iCloud SMTP settings, and run `npx vercel dev` from `client/`.
Link to the `portfolio` project in the `emilhallbergs-projects` team when prompted.
Both the frontend and function use the same local origin; no separate Express
server is needed. `yarn start` runs only the frontend.
The API tests mock SMTP and never send real emails.

The former Docker/GHCR/Hetzner deployment workflow, Dockerfiles, and Express
server have been retired. Deployments are handled by Vercel's GitHub integration.

References: [Vercel CRA](https://vercel.com/docs/frameworks/frontend/create-react-app),
[Node functions](https://vercel.com/docs/functions/runtimes/node-js),
[custom domains](https://vercel.com/docs/domains/working-with-domains/add-a-domain).
