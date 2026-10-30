import { contactEmail, contactLocation, contactPhone, contactPhoneHref } from '@/lib/content';

export function ContactDetails({ className = '' }: { className?: string }) {
  return (
    <address className={`contact-details ${className}`}>
      <span className="contact-detail"><span>Location</span><strong>{contactLocation}</strong></span>
      <a className="contact-detail" href={`mailto:${contactEmail}`}><span>Email</span><strong>{contactEmail}</strong></a>
      <a className="contact-detail" href={`tel:${contactPhoneHref}`}><span>Phone</span><strong>{contactPhone}</strong></a>
    </address>
  );
}
