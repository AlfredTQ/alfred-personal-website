import { ContactPanel } from '@/components/contact-panel';
import { PageFrame } from '@/components/page-frame';
import { Reveal } from '@/components/live-experience';

export default function ContactPage() {
  return <PageFrame><section className="page-hero contact-route-hero"><div className="shell page-copy-grid"><Reveal><p className="section-label">06 / Let’s connect</p><h1>Have a challenge<br /><em>worth clarifying?</em></h1><p className="page-lede">Tell me where you want to go. We can begin with the brand, the digital experience, the data, or simply the part that feels unclear.</p><a className="route-email" href="mailto:alfredtackiequaye@gmail.com">alfredtackiequaye@gmail.com ↗</a></Reveal><Reveal><ContactPanel /></Reveal></div></section><section className="contact-expectations"><div className="shell"><p className="section-label">What happens next</p><div className="expectation-grid"><p>01 <span>You share the context</span></p><p>02 <span>We identify the clearest first move</span></p><p>03 <span>We decide whether there is a good fit</span></p></div></div></section></PageFrame>;
}
