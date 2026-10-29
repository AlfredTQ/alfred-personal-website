'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Logo } from './logo';

const links = [['About', '/about'], ['Services', '/services'], ['Work', '/work'], ['Credentials', '/credentials']];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);
  return <header className="site-header"><div className="shell nav-wrap">
    <Logo />
    <button className="menu-button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}><span className="sr-only">Toggle menu</span><i /><i /></button>
    <nav id="primary-nav" data-open={open} aria-label="Primary navigation">
      {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Start a conversation <span>↗</span></Link>
    </nav>
  </div></header>;
}
