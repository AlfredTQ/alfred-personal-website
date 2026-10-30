'use client';

import { ReactNode, useEffect, useRef } from 'react';

export function ScrollProgress() {
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const limit = document.documentElement.scrollHeight - window.innerHeight;
      const value = limit > 0 ? window.scrollY / limit : 0;
      progress.current?.style.setProperty('--progress', String(value));
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (frame) window.cancelAnimationFrame(frame); };
  }, []);
  return <div className="scroll-progress" ref={progress} aria-hidden="true" />;
}

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = element.current;
    const reducedMotion = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!node || reducedMotion || typeof IntersectionObserver === 'undefined') { node?.classList.add('is-visible'); return; }
    node.classList.add('reveal-pending');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.classList.add('is-visible'); observer.unobserve(node); }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={element} className={`reveal ${className}`}>{children}</div>;
}

export function HeroMotion({ children }: { children: ReactNode }) {
  const element = useRef<HTMLElement>(null);
  function move(event: React.PointerEvent<HTMLElement>) {
    if (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    element.current?.style.setProperty('--pointer-x', `${x * 10}px`);
    element.current?.style.setProperty('--pointer-y', `${y * 10}px`);
  }
  function reset() { element.current?.style.setProperty('--pointer-x', '0px'); element.current?.style.setProperty('--pointer-y', '0px'); }
  return <section ref={element} onPointerMove={move} onPointerLeave={reset} className="hero shell hero-motion">{children}</section>;
}
