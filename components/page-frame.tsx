import { ReactNode } from 'react';
import { Logo } from './logo';
import { SiteHeader } from './site-header';
import { ContactDetails } from './contact-details';

export function PageFrame({ children }: { children: ReactNode }) {
  return <><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main" className="inner-main">{children}</main><footer className="footer"><div className="shell"><Logo /><ContactDetails className="footer-contact-details" /><p>© {new Date().getFullYear()} Alfred Tackie-Quaye</p><div className="footer-social"><a href="https://www.linkedin.com/in/alfred-tackie-quaye-93b28314b" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/AlfredTQ" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></footer></>;
}
