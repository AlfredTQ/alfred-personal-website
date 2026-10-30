import type { Metadata } from 'next';
import { ContactDetails } from '@/components/contact-details';
import { ContactPanel } from '@/components/contact-panel';
import { PageHero } from '@/components/page-hero';
import { PageFrame } from '@/components/page-frame';
import { Reveal } from '@/components/live-experience';

export const metadata: Metadata = { title: 'Contact', description: 'Tell Alfred what needs to become clearer — brand, digital experience or data — and get a reply by email.', alternates: { canonical: '/contact' } };

export default function ContactPage() {
  return <PageFrame><PageHero theme="contact-route-hero" label="Let’s make it useful" title={<>Have a challenge<br /><em>worth clarifying?</em></>} lede="Whether you need a clearer identity, a more useful digital experience, or a better way to see the data, I’d be glad to hear what is next." actions={<ContactDetails className="route-contact-details" />} aside={<ContactPanel />} /><section className="contact-expectations"><div className="shell"><p className="section-label">What happens next</p><div className="expectation-grid"><p>01 <span>You share the context</span></p><p>02 <span>We identify the clearest first move</span></p><p>03 <span>We decide whether there is a good fit</span></p></div></div></section></PageFrame>;
}
