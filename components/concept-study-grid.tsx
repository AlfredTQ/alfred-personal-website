import Image from 'next/image';
import { conceptStudies } from '@/lib/concept-studies';

export function ConceptStudyGrid() {
  return <div className="shell concept-work-grid">{conceptStudies.map((study, index) => <article className="concept-work-card" key={study.title}><div className="concept-work-image"><Image src={study.image} alt={study.alt} fill sizes={index === 2 ? '(max-width: 800px) 100vw, 92vw' : '(max-width: 800px) 100vw, 56vw'} /><span>Concept study</span></div><div className="concept-work-copy"><p>{`0${index + 1} / ${study.category}`}</p><h3>{study.title}</h3><span>{study.description}</span></div></article>)}</div>;
}
