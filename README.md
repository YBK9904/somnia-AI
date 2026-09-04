# Somnia legal pages (GitHub Pages)

These files are the Privacy Policy, Terms of Use and Contact pages for App Store Connect.

## Publish

1. Push this repo to GitHub.
2. Repo **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main`, folder: `/docs`.
5. After a minute the pages are live:

- `https://YOUR-USERNAME.github.io/Somnia/privacy.html`
- `https://YOUR-USERNAME.github.io/Somnia/terms.html`
- `https://YOUR-USERNAME.github.io/Somnia/contact.html`

English and Turkish live on the same page. The capsule switcher follows the device language, or `#tr` / `#en` in the URL. The old `-tr.html` files redirect there.

## Point the app at the links

Edit `Config.xcconfig` (do not commit secrets):

```
SOMNIA_PRIVACY_URL = https:/$()/YOUR-USERNAME.github.io/Somnia/privacy.html
SOMNIA_TERMS_URL = https:/$()/YOUR-USERNAME.github.io/Somnia/terms.html
SOMNIA_CONTACT_URL = https:/$()/YOUR-USERNAME.github.io/Somnia/contact.html
```

App Store Connect → App Privacy and the subscription group also need the Privacy Policy URL.
