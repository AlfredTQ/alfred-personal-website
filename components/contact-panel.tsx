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
  return <form className="contact-form" aria-label="Project inquiry" onSubmit={submit} noValidate><div className="form-title"><span>Project inquiry</span><b>Tell me what you’re building.</b></div>
    <label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
    <label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
    <label>Area of interest<select name="service" required defaultValue=""><option value="" disabled>Select an area</option><option>Graphic design</option><option>UI/UX design</option><option>Digital strategy</option><option>Data storytelling</option><option>Other collaboration</option></select></label>
    <label>Project note<textarea name="message" required minLength={10} rows={4} placeholder="A few words about the opportunity" /></label>
    <button className="button button-dark" type="submit">Prepare my email <span>↗</span></button><p className="form-notice" role="status">{notice || 'This opens your email app; nothing is sent through this website.'}</p>
  </form>;
}
