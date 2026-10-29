'use client';

import Image from 'next/image';
import { useState } from 'react';

const views = [
  { label: 'Frame', title: 'Make the idea clear', detail: 'A focused starting point for the right message, audience, and visual direction.' },
  { label: 'Shape', title: 'Design with intention', detail: 'Bring a point of view to the interface through thoughtful hierarchy and detail.' },
  { label: 'Signal', title: 'Turn insight visible', detail: 'Make information easier to understand, use, and act on.' },
];

export function PortfolioPreview() {
  const [active, setActive] = useState(0);
  const view = views[active];
  const focus = active === 0 ? 'Strategy + story' : active === 1 ? 'Experience + expression' : 'Data + meaning';

  return <section className="portfolio-preview" aria-label="Portfolio approach preview">
    <div className="preview-tabs" role="tablist" aria-label="Portfolio approach">
      {views.map((item, index) => <button key={item.label} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>{item.label}</button>)}
    </div>
    <div className="preview-stage">
      <p className="preview-label">Portfolio workspace / 0{active + 1}</p>
      <h2>{view.title}</h2>
      <p>{view.detail}</p>
      <div className="preview-profile">
        <Image src="/images/alfred-profile.jpg" alt="Alfred Tackie-Quaye" width={66} height={66} />
        <div><span>Alfred Tackie-Quaye</span><strong>Creative Designer<br />&amp; Data Analyst</strong><small>{focus}</small></div>
      </div>
      <div className="preview-footer"><span>Alfred TQ</span><b>Explore <em>↗</em></b></div>
    </div>
  </section>;
}
