import Link from 'next/link';
import { PageFrame } from '@/components/page-frame';
import { Reveal } from '@/components/live-experience';

export default function WorkPage() {
  return <PageFrame><section className="page-hero work-route-hero"><div className="shell"><Reveal><p className="section-label">03 / Portfolio</p><h1>Work with<br /><em>context.</em></h1><p className="page-lede">A considered case-study library is in preparation. It will feature approved examples only—never invented project outcomes or client claims.</p><Link className="button button-blue" href="/contact">Discuss your project <span>↗</span></Link></Reveal></div></section><section className="page-panel work-route-panel"><div className="shell work-route-grid"><Reveal><span>01</span><h2>Case studies<br />in progress.</h2></Reveal><Reveal><p>In the meantime, the best way to explore fit is a conversation about the challenge, the audience, and the outcome you need.</p><p className="route-status">Approved project stories will appear here.</p></Reveal></div></section></PageFrame>;
}
