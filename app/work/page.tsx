import Link from 'next/link';
import { ConceptStudyGrid } from '@/components/concept-study-grid';
import { PageHero } from '@/components/page-hero';
import { PageFrame } from '@/components/page-frame';
import { Reveal } from '@/components/live-experience';

export default function WorkPage() {
  return <PageFrame><PageHero theme="work-route-hero" label="04 / Selected work" title={<>Work with<br /><em>a reason to exist.</em></>} lede="A growing library of concept studies and approved case studies. Every piece is framed around the problem, the thinking, and the useful change it was designed to make." actions={<Link className="button button-blue" href="/contact">Discuss your project <span>↗</span></Link>} /><section className="page-panel work-route-panel"><div className="shell work-route-grid"><Reveal><span>Selected work / 01—03</span><h2>Ideas made<br />visible with intent.</h2></Reveal><Reveal><p>The studies below are exploratory—not client claims. They show the kind of clarity I bring to brand systems, digital journeys, and data stories.</p><p className="route-status">Real case studies will be added with permission and context.</p></Reveal><ConceptStudyGrid /></div></section></PageFrame>;
}
