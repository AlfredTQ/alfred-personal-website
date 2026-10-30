'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Logo } from './logo';
import { contactWhatsappHref, navigation } from '@/lib/content';

export function SiteHeader({ variant = '' }: { variant?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => {
    setOpen(false);
  };
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [pathname]);
  return <header className={`site-header ${variant}`}><div className="shell nav-wrap">
    <Logo />
    <button className="menu-button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}><span className="sr-only">Toggle menu</span><i /><i /></button>
    <nav id="primary-nav" data-open={open} aria-label="Primary navigation">
      {navigation.map(([label, href]) => <Link key={href} href={href} scroll aria-current={pathname === href ? 'page' : undefined} onClick={closeMenu}>{label}</Link>)}
      <Link className="nav-cta" href="/#contact" scroll onClick={closeMenu}>Start a conversation <span>↗</span></Link>
      <a className="nav-whatsapp" href={contactWhatsappHref} target="_blank" rel="noreferrer">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2a9.9 9.9 0 0 0-8.48 15.01L2.2 21.8l4.94-1.3A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-2.93.77.78-2.86-.2-.3a8.17 8.17 0 1 1 6.82 3.71Zm4.49-6.12c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.57.12-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-.1-.74-.67-1.24-1.5-1.39-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.3.37-.44.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.44-.06-.12-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.52.6.19 1.15.16 1.59.1.49-.07 1.47-.6 1.68-1.19.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29Z" /></svg>
        Chat on WhatsApp
      </a>
    </nav>
  </div></header>;
}
