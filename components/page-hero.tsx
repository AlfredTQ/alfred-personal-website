import { ReactNode } from 'react';
import { Reveal } from './live-experience';

type PageHeroProps = {
  /** Legacy route class that carries the page's colour theme. */
  theme: string;
  label: string;
  title: ReactNode;
  lede: ReactNode;
  /** Buttons or links shown under the lede. */
  actions?: ReactNode;
  /** Optional right-hand column (form, visual…). */
  aside?: ReactNode;
};

/** Shared hero used by inner pages so type scale, width and spacing stay in sync. */
export function PageHero({ theme, label, title, lede, actions, aside }: PageHeroProps) {
  return (
    <section className={`page-hero route-hero ${theme}`}>
      <div className={`shell route-hero-grid${aside ? ' has-aside' : ''}`}>
        <Reveal className="route-hero-copy">
          <p className="section-label">{label}</p>
          <h1>{title}</h1>
          <p className="page-lede">{lede}</p>
          {actions}
        </Reveal>
        {aside ? <Reveal className="route-hero-aside">{aside}</Reveal> : null}
      </div>
    </section>
  );
}

