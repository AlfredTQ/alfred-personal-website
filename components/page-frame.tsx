import { ReactNode } from 'react';
import { Logo } from './logo';
import { SiteHeader } from './site-header';

export function PageFrame({ children }: { children: ReactNode }) {
  return <><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main">{children}</main><footer className="footer"><div className="shell"><Logo /><p>© {new Date().getFullYear()} Alfred Tackie-Quaye · Based in Ghana, available worldwide</p><div><a href="https://www.linkedin.com/in/alfred-tackie-quaye-93b28314b" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/AlfredTQ" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></footer></>;
}
