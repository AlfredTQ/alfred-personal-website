'use client';

import { useState } from 'react';
import { contactEmail, contactLocation, contactPhone, contactPhoneHref } from '@/lib/content';

const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(contactLocation)}`;

function ContactIcon({ type }: { type: 'location' | 'email' | 'phone' | 'copy' }) {
  const paths = {
    location: <><path d="M20 10.2c0 6.1-8 12.3-8 12.3S4 16.3 4 10.2a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    phone: <path d="M7.2 3.8 4.7 5.2c-.9.5-1.3 1.6-.9 2.6 2.3 5.8 6.8 10.3 12.6 12.6 1 .4 2.1 0 2.6-.9l1.4-2.5-4.1-2.3-1.8 2a15 15 0 0 1-7.3-7.3l2-1.8-2.3-4.1Z" />,
    copy: <><rect x="8" y="8" width="12" height="13" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h2" /></>,
  };

  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg>;
}

export function ContactDetails({ className = '', copyable = false }: { className?: string; copyable?: boolean }) {
  const [copyNotice, setCopyNotice] = useState('');

  async function copyContact(value: string, label: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopyNotice(`${label} copied.`);
    } catch {
      setCopyNotice(`Could not copy ${label.toLowerCase()}. Select and copy the details instead.`);
    }
  }

  return (
    <>
      <address className={`contact-details ${className}`}>
        <div className="contact-detail">
          <span className="contact-detail-icon"><ContactIcon type="location" /></span>
          <div className="contact-detail-content">
            <span className="contact-detail-label">Location</span>
            <a className="contact-detail-value" href={mapUrl} target="_blank" rel="noreferrer">
              <strong>{contactLocation}</strong><small>View location on map <span aria-hidden="true">↗</span></small>
            </a>
          </div>
          {copyable && <button className="contact-copy-button" type="button" aria-label="Copy location" onClick={() => copyContact(contactLocation, 'Location')}><ContactIcon type="copy" /><span>Copy</span></button>}
        </div>
        <div className="contact-detail">
          <span className="contact-detail-icon"><ContactIcon type="email" /></span>
          <div className="contact-detail-content">
            <span className="contact-detail-label">Email me</span>
            <a className="contact-detail-value" href={`mailto:${contactEmail}`}>
              <strong>{contactEmail}</strong><small>Open your email app <span aria-hidden="true">↗</span></small>
            </a>
          </div>
          {copyable && <button className="contact-copy-button" type="button" aria-label="Copy email" onClick={() => copyContact(contactEmail, 'Email')}><ContactIcon type="copy" /><span>Copy</span></button>}
        </div>
        <div className="contact-detail">
          <span className="contact-detail-icon"><ContactIcon type="phone" /></span>
          <div className="contact-detail-content">
            <span className="contact-detail-label">Phone</span>
            <a className="contact-detail-value" href={`tel:${contactPhoneHref}`}>
              <strong>{contactPhone}</strong><small>Call directly <span aria-hidden="true">↗</span></small>
            </a>
          </div>
          {copyable && <button className="contact-copy-button" type="button" aria-label="Copy phone" onClick={() => copyContact(contactPhone, 'Phone')}><ContactIcon type="copy" /><span>Copy</span></button>}
        </div>
      </address>
      {copyable && <p className="contact-copy-notice" role="status">{copyNotice}</p>}
    </>
  );
}
