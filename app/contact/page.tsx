import { ContactPanel } from '@/components/contact-panel';
import { PageHero } from '@/components/page-hero';
import { PageFrame } from '@/components/page-frame';
import { Reveal } from '@/components/live-experience';

export default function ContactPage() {
  return <PageFrame><PageHero theme="contact-route-hero" label="05 / Let’s connect" title={<>Have a challenge<br /><em>worth clarifying?</em></>} lede="Tell me where you want to go. We can begin with the brand, the digital experience, the data, or simply the part that feels unclear." actions={<a className="route-email" href="mailto:alfredtackiequaye@gmail.com">alfredtackiequaye@gmail.com ↗</a>} aside={<ContactPanel />} /><section className="contact-expectations"><div className="shell"><p className="section-label">What happens next</p><div className="expectation-grid"><p>01 <span>You share the context</span></p><p>02 <span>We identify the clearest first move</span></p><p>03 <span>We decide whether there is a good fit</span></p></div></div></section></PageFrame>;
}
