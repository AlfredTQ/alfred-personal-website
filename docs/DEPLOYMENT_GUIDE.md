# Deployment guide
1. Review page copy and links with Alfred. Verify credentials with official share URLs.
2. Choose a static hosting provider. Import a GitHub repository or upload these static files. No build command required; output root is the repository root.
3. Connect a domain later if desired; enable HTTPS (most modern hosts automate this).
4. Current contact form is `mailto:` only. To receive submissions without requiring a visitor's email client, configure a reputable form backend, server-side validation, anti-spam controls and privacy notice. Test delivery, failure and abuse cases. Do not place private API keys in browser code.
5. Test keyboard navigation, contrast, mobile layout, external links, metadata, form validation, browser compatibility and performance.
6. Keep secrets in host environment variables if a backend is added. Commit only `.env.example`, not `.env`.
7. Do not publish until owner explicitly approves the live deployment and content.
