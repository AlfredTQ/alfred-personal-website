import { ContactPanel } from '@/components/contact-panel';
import { PageFrame } from '@/components/page-frame';
import { Reveal } from '@/components/live-experience';

export default function ContactPage() {
  return <PageFrame><section className="page-hero contact-route-hero"><div className="shell page-copy-grid"><Reveal><p className="section-label">05 / Let’s connect</p><h1>Have something<br /><em>in mind?</em></h1><p className="page-lede">Whether it’s a design project, a data challenge, or a collaboration, I’d be glad to hear where you’re headed.</p><a className="route-email" href="mailto:alfredtackiequaye@gmail.com">alfredtackiequaye@gmail.com ↗</a></Reveal><Reveal><ContactPanel /></Reveal></div></section></PageFrame>;
}
