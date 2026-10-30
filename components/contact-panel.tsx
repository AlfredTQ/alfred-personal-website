'use client';

import { FormEvent, useState } from 'react';
import { contactEmail } from '@/lib/content';

export function ContactPanel() {
  const [notice, setNotice] = useState('');
  const [sending, setSending] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const fields = { name: data.get('name'), email: data.get('email'), service: data.get('service'), message: data.get('message'), website: data.get('website') };
    setSending(true);
    setNotice('');
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(fields) });
      if (response.ok) {
        form.reset();
        setNotice('Thank you — your message has been sent. I’ll reply by email.');
        return;
      }
      if (response.status !== 503) {
        const result = await response.json().catch(() => ({}));
        setNotice(result.error || 'Something went wrong. Please try again or email me directly.');
        return;
      }
    } catch {
      // Network failure: fall through to the email-app fallback.
    } finally {
      setSending(false);
    }
    const subject = encodeURIComponent(`Portfolio inquiry: ${fields.service}`);
    const body = encodeURIComponent(`Name: ${fields.name}\nEmail: ${fields.email}\nService: ${fields.service}\n\nProject:\n${fields.message}`);
    setNotice('Your email app should now open with the inquiry prepared. Send it there to complete the message.');
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }
  return <form className="contact-form" aria-label="Project inquiry" onSubmit={submit} noValidate><div className="form-title"><div><span>Project inquiry</span><b>Tell me what needs<br />to become clearer.</b></div><p><i aria-hidden="true" />Available for selected collaborations</p></div>
    <input className="sr-only" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" /><div className="form-field-row"><label className="form-field"><span>Name</span><input name="name" autoComplete="name" required placeholder="Your name" /></label><label className="form-field"><span>Email</span><input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label></div>
    <label className="form-field"><span>Area of interest</span><select name="service" required defaultValue=""><option value="" disabled>Select an area</option><option>Brand &amp; visual systems</option><option>UI/UX design</option><option>Digital strategy</option><option>Data storytelling</option><option>Other collaboration</option></select></label>
    <label className="form-field"><span>Project note</span><textarea name="message" required minLength={10} rows={5} placeholder="What are you trying to make clearer, easier, or more useful?" /></label>
    <div className="form-bottom"><p>Your details are only used to reply to this inquiry.</p><button className="button button-dark" type="submit" disabled={sending}><span>{sending ? 'Sending…' : 'Send message'}</span><i aria-hidden="true">↗</i></button></div><p className="form-notice" role="status">{notice}</p>
  </form>;
}
