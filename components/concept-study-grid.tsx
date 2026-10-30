import Image from 'next/image';
import { Reveal } from '@/components/live-experience';
import { conceptStudies } from '@/lib/concept-studies';

export function ConceptStudyGrid() {
  return <div className="shell concept-work-grid">{conceptStudies.map((study, index) => <Reveal className="concept-work-reveal" key={study.title}><article className="concept-work-card"><div className="concept-work-image"><Image src={study.image} alt={study.alt} fill sizes={index === 2 ? '(max-width: 800px) 100vw, 92vw' : '(max-width: 800px) 100vw, 56vw'} /><span>Concept study</span></div><div className="concept-work-copy"><p>{`0${index + 1} / ${study.category}`}</p><h3>{study.title}</h3><span>{study.description}</span></div></article></Reveal>)}</div>;
}
