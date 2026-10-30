import Link from 'next/link';
import Image from 'next/image';
import { ContactPanel } from '@/components/contact-panel';
import { CapabilityInquiryLink } from '@/components/capability-inquiry-link';
import { ContactDetails } from '@/components/contact-details';
import { ConceptStudyGrid } from '@/components/concept-study-grid';
import { Logo } from '@/components/logo';
import { SiteHeader } from '@/components/site-header';
import { HeroMotion, Reveal, ScrollProgress } from '@/components/live-experience';
import { credentials, services } from '@/lib/content';

function CapabilityIcon({ index }: { index: number }) {
  const commonProps = {
    'aria-hidden': true as const,
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  if (index === 0) {
    return <svg {...commonProps}><path d="M24 5 42 23 24 41 6 23 24 5Z" /><path d="m17 28 11-11 5 5-11 11-7 2 2-7Z" /><path d="m25 20 5 5" /></svg>;
  }
  if (index === 1) {
    return <svg {...commonProps}><rect x="6" y="8" width="36" height="32" rx="1" /><path d="M6 16h36M13 24h9M13 30h15" /><circle cx="34" cy="27" r="4" /><path d="M30 35h8" /></svg>;
  }
  if (index === 2) {
    return <svg {...commonProps}><circle cx="24" cy="24" r="17" /><path d="m31 16-4 11-11 5 5-11 10-5Z" /><circle cx="24" cy="24" r="2" /><path d="M24 4v4M44 24h-4M24 44v-4M4 24h4" /></svg>;
  }
  return <svg {...commonProps}><path d="M7 41h35" /><rect className="capability-icon-bar capability-icon-bar-one" x="11" y="26" width="6" height="15" /><rect className="capability-icon-bar capability-icon-bar-two" x="22" y="18" width="6" height="23" /><rect className="capability-icon-bar capability-icon-bar-three" x="33" y="9" width="6" height="32" /><path d="m10 20 10-7 8 2 11-9" /></svg>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <ScrollProgress />
    <SiteHeader variant="hero-site-header" />
    <main id="main" className="home-main">
      <div className="reference-stage">
        <HeroMotion>
          <div className="hero-copy">
            <p className="eyebrow"><span />Graphic design · UI/UX · Social media · Power BI</p>
            <h1>Design clarity<br />that moves<br /><em>work forward.</em></h1>
            <p className="lede">I help ambitious organisations turn complex ideas into clear brands, useful digital experiences, engaging social content, and decision-ready data stories.</p>
            <div className="hero-actions"><Link href="/#work" className="text-action">View selected work <span>↗</span></Link><Link href="/#about" className="text-action">About me <span>↗</span></Link></div>
          </div>
          <Link href="/#contact" className="hero-contact-disc">Start a<br />conversation <span>↗</span></Link>
          <figure className="reference-hero-media">
            <Image className="hero-ambient" src="/images/hero-editorial-studio.png" alt="" fill priority sizes="100vw" />
            <span className="hero-name-layer" aria-hidden="true">ALFRED</span>
            <Image className="hero-person" src="/images/alfred-hero-shoulders.png" alt="Alfred Tackie-Quaye, Creative Designer and Data Analyst" fill priority sizes="(max-width: 800px) 100vw, 58vw" />
            <div className="hero-people" aria-label="Available for selected collaborations"><span>Available for projects</span><b>Open</b></div>
            <div className="hero-card hero-card-design"><span>Brand &amp; visual systems</span><strong>Make the right idea recognisable</strong><i>↗</i></div>
            <div className="hero-card hero-card-experience"><span>Digital experience</span><strong>Make the next step easier</strong><i>↗</i></div>
            <div className="hero-card hero-card-insight"><b>03</b><span>Make the signal in your data easier to act on.</span></div>
            <figcaption><span>Alfred Tackie-Quaye</span><span>Based in Ghana · Available worldwide</span></figcaption>
          </figure>
        </HeroMotion>
      </div>

      <section className="home-about section" id="about" aria-labelledby="about-title">
        <div className="shell home-about-grid">
          <Reveal className="home-about-portrait">
            <Image src="/images/alfred-hero-shoulders.png" alt="Alfred Tackie-Quaye" fill sizes="(max-width: 800px) 100vw, 38vw" />
            <span>Based in Ghana · Available worldwide</span>
          </Reveal>
          <div className="home-about-copy">
            <Reveal><p className="section-label">About</p><h2 id="about-title">Designer. Analyst.<br /><em>Clarity builder.</em></h2></Reveal>
            <Reveal><p>I’m Alfred Tackie-Quaye, a Ghana-based creative and data professional working across graphic design, UI/UX, social media management, and Power BI analytics.</p><p>I bring visual thinking and evidence-informed problem solving together to make ideas easier to understand, experiences easier to use, and information easier to act on.</p><p>Whether the work is a brand touchpoint, interface, campaign, or report, the aim is consistent: help the right thing stand out and make the next step easier.</p></Reveal>
          </div>
          <div className="home-about-principles">
            <p>Visual thinking</p><p>Useful experiences</p><p>Decision-ready data</p>
          </div>
        </div>
      </section>

      <section className="client-proof" id="clarify" aria-labelledby="proof-title">
        <div className="shell">
          <div className="proof-intro"><p className="section-label">What I help clarify</p><h2 id="proof-title">Make it easier to<br /><em>recognise, use, and act on.</em></h2><p>Good work should do more than look polished. It should help the right people understand the message, move through the experience, and make the next decision with confidence.</p></div>
          <div className="proof-grid"><article><span>01</span><i className="proof-art" aria-hidden="true" /><h3>Make it recognisable.</h3><p>Brand and visual systems that give an organisation a clear, consistent presence.</p></article><article><span>02</span><i className="proof-art" aria-hidden="true" /><h3>Make it easier to use.</h3><p>Digital experiences shaped around the tasks people are actually trying to complete.</p></article><article><span>03</span><i className="proof-art" aria-hidden="true" /><h3>Make it easier to act on.</h3><p>Data stories that help information become a useful next move.</p></article></div>
          <div className="proof-footer"><p className="proof-note">Informed by ongoing Microsoft learning in Power BI, Fabric, and security fundamentals.</p><Link href="/#services" className="proof-action">Explore capabilities <span>↗</span></Link></div>
        </div>
      </section>

      <section className="home-services section" id="services" aria-labelledby="services-title">
        <div className="shell">
          <div className="home-section-heading"><p className="section-label">Capabilities</p><h2 id="services-title">What I can do<br /><em>for your work.</em></h2><p>Choose one discipline or bring them together. The aim is to make the message, journey, or decision easier to move on.</p></div>
          <div className="home-service-grid">{services.map((service, index) => <Reveal key={service.number} className="home-service-card"><article><div className="home-service-card-top"><span>{service.number}</span><span className="home-service-icon"><CapabilityIcon index={index} /></span></div><h3>{service.title}</h3><p>{service.description}</p><CapabilityInquiryLink service={service.title} /></article></Reveal>)}</div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="shell work-intro"><p className="section-label">Selected projects</p><p className="work-index">01 — 02 — 03</p><h2>A few things<br /><em>made with intent.</em></h2><div><p>These concept studies show how I approach a brief—from a clearer identity, to a more useful journey, to information people can act on.</p><p className="work-status">Concept studies · Real case studies coming next</p></div></div>
        <ConceptStudyGrid />
      </section>

      <section className="home-practice">
        <div className="home-practice-process" id="process">
          <div className="home-practice-inner">
            <p className="section-label">Process</p><h2>My approach</h2>
            <ol>
              <li><span>01</span><div><strong>Clarify</strong><p>Understand your goals, audience, and vision.</p></div></li>
              <li><span>02</span><div><strong>Plan</strong><p>Shape the strategy, structure, and user flow.</p></div></li>
              <li><span>03</span><div><strong>Design</strong><p>Craft visual systems and interactions with intention.</p></div></li>
              <li><span>04</span><div><strong>Develop</strong><p>Build and refine the work into a useful outcome.</p></div></li>
              <li><span>05</span><div><strong>Launch</strong><p>Test, refine, and launch with confidence.</p></div></li>
            </ol>
          </div>
        </div>
        <div className="home-practice-credentials" id="credentials">
          <div className="home-practice-inner">
            <p className="section-label">Skills &amp; learning</p><h2>Tools, knowledge<br />&amp; credentials</h2>
            <p className="home-practice-summary">Ongoing learning in analytics, cloud, security, and data engineering supports informed, practical design decisions.</p>
            <div className="home-credential-list">{credentials.map(([code, title]) => <div key={code}><span>{code}</span><strong>{title}</strong></div>)}</div>
            <Link href="/#credentials" className="text-action">Credentials overview <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-layout">
          <div className="contact-copy"><p className="section-label">Let’s make it useful</p><h2>Have a challenge<br /><em>worth clarifying?</em></h2><p>Whether you need a clearer identity, a more useful digital experience, or a better way to see the data, I’d be glad to hear what is next.</p><a href="mailto:alfredtackiequaye@gmail.com">alfredtackiequaye@gmail.com <span>↗</span></a><ContactDetails className="home-contact-details" /></div>
          <ContactPanel />
        </div>
      </section>
    </main>
    <footer className="footer"><div className="shell"><Logo /><ContactDetails className="footer-contact-details" /><p>© {new Date().getFullYear()} Alfred Tackie-Quaye</p><div className="footer-social"><a href="https://www.linkedin.com/in/alfred-tackie-quaye-93b28314b" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/AlfredTQ" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></footer>
  </>;
}
