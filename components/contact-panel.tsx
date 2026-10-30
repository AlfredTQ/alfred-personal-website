'use client';

import { FormEvent, useState } from 'react';
import { contactEmail } from '@/lib/content';

export function ContactPanel() {
  const [notice, setNotice] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry: ${data.get('service')}`);
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\nProject:\n${data.get('message')}`);
    setNotice('Your email app should now open with the inquiry prepared. Send it there to complete the message.');
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }
  return <form className="contact-form" aria-label="Project inquiry" onSubmit={submit} noValidate><div className="form-title"><div><span>Project inquiry</span><b>Tell me what needs<br />to become clearer.</b></div><p><i aria-hidden="true" />Available for selected collaborations</p></div>
    <div className="form-field-row"><label className="form-field"><span>Name</span><input name="name" autoComplete="name" required placeholder="Your name" /></label><label className="form-field"><span>Email</span><input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label></div>
    <label className="form-field"><span>Area of interest</span><select name="service" required defaultValue=""><option value="" disabled>Select an area</option><option>Brand &amp; visual systems</option><option>UI/UX design</option><option>Digital strategy</option><option>Data storytelling</option><option>Other collaboration</option></select></label>
    <label className="form-field"><span>Project note</span><textarea name="message" required minLength={10} rows={5} placeholder="What are you trying to make clearer, easier, or more useful?" /></label>
    <div className="form-bottom"><p>This prepares an email in your own email app. Nothing is sent from this website.</p><button className="button button-dark" type="submit"><span>Prepare email</span><i aria-hidden="true">↗</i></button></div><p className="form-notice" role="status">{notice}</p>
  </form>;
}
