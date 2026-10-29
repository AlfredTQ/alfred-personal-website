import Link from 'next/link';
import { PageFrame } from '@/components/page-frame';
import { Reveal } from '@/components/live-experience';
import { services } from '@/lib/content';

export default function ServicesPage() {
  return <PageFrame><section className="page-hero"><div className="shell"><Reveal><p className="section-label">02 / Capabilities</p><h1>Different skills.<br /><em>One clear purpose.</em></h1><p className="page-lede">Creative execution and analytical thinking, brought together for real communication and digital challenges.</p></Reveal></div></section><section className="page-panel services-panel"><div className="shell service-route-grid">{services.map((service, index) => <Reveal key={service.number} className="route-service"><span>0{index + 1}</span><h2>{service.title}</h2><p>{service.description}</p><small>{service.tag}</small></Reveal>)}</div><div className="shell route-cta"><p>Not sure which capability fits?</p><Link className="button button-blue" href="/contact">Tell me about the challenge <span>↗</span></Link></div></section></PageFrame>;
}
