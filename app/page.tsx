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

function ToolIcon({ tool }: { tool: 'photoshop' | 'illustrator' | 'figma' | 'power-bi' | 'fabric' | 'security' }) {
  if (tool === 'photoshop') {
    return <svg aria-hidden="true" viewBox="0 0 36 36"><rect x="2" y="2" width="32" height="32" rx="7" fill="#001E36" /><path d="M8 27V9h6.2c4.2 0 6.7 2.1 6.7 5.7s-2.5 5.8-6.7 5.8h-2.5V27H8Zm3.7-9.7h2.4c2.1 0 3.1-.9 3.1-2.6s-1-2.5-3.1-2.5h-2.4v5.1Zm11.5 10c-1.6 0-3.3-.5-4.4-1.3l1.2-2.7c.9.6 2.1 1 3.2 1 1 0 1.4-.3 1.4-.8 0-1.6-5.5-.2-5.5-4.2 0-2.1 1.8-3.5 4.7-3.5 1.4 0 2.9.3 3.9.9l-1.2 2.7c-1-.6-1.9-.8-2.7-.8-.9 0-1.4.3-1.4.8 0 1.6 5.5.2 5.5 4.2 0 2.1-1.8 3.5-4.7 3.5Z" fill="#31A8FF" /></svg>;
  }
  if (tool === 'illustrator') {
    return <svg aria-hidden="true" viewBox="0 0 36 36"><rect x="2" y="2" width="32" height="32" rx="7" fill="#330000" /><path d="m8 26 5.5-16h4.2l5.5 16h-4l-1-3.2h-5.4L11.8 26H8Zm5.7-6.3h3.5l-1.7-5.8-1.8 5.8ZM25.2 13.1a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM23.4 26V15h3.7v11h-3.7Z" fill="#FF9A00" /></svg>;
  }
  if (tool === 'figma') {
    return <svg aria-hidden="true" viewBox="0 0 36 36"><path d="M12 3h6v10h-6a5 5 0 1 1 0-10Z" fill="#F24E1E" /><path d="M18 3h6a5 5 0 1 1 0 10h-6V3Z" fill="#FF7262" /><path d="M18 13h6a5 5 0 1 1-5 5v-5h-1Z" fill="#A259FF" /><path d="M12 13h6v10h-6a5 5 0 1 1 0-10Z" fill="#1ABCFE" /><circle cx="15" cy="28" r="5" fill="#0ACF83" /></svg>;
  }
  if (tool === 'power-bi') {
    return <svg aria-hidden="true" viewBox="0 0 36 36" fill="none"><path d="M6 28V18h6v10H6Zm8 0V11h6v17h-6Zm8 0V6h6v22h-6Z" fill="#F2C811" /><path d="M4 30h27" stroke="#D7A900" strokeLinecap="round" strokeWidth="2" /></svg>;
  }
  if (tool === 'fabric') {
    return <svg aria-hidden="true" viewBox="0 0 36 36" fill="none"><path d="M7 23.8 18 7l11 16.8-11 5.3L7 23.8Z" fill="#A259FF" /><path d="m12 23.7 6-9.2 6 9.2-6 2.9-6-2.9Z" fill="#111B29" /><path d="m18 7 11 16.8-5.8 2.8-6-9.2-5.8 9.1L7 23.8 18 7Z" fill="#36BFFA" opacity=".92" /><path d="m7 23.8 5-7.7 5.8 9.1-5.8 2.8L7 23.8Z" fill="#F05A9D" /></svg>;
  }
  return <svg aria-hidden="true" viewBox="0 0 36 36" fill="none"><path d="M18 4 29 8.7v8.1c0 7.1-4.5 12.1-11 15.2C11.5 28.9 7 23.9 7 16.8V8.7L18 4Z" fill="#2176D2" /><path d="M18 7 26 10.4v6.2c0 5.5-3.1 9.5-8 12.2-4.9-2.7-8-6.7-8-12.2v-6.2L18 7Z" fill="#54C8F5" /><path d="m13 18 3.3 3.3 6.8-7.1" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /></svg>;
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
            <p className="eyebrow"><span />Brand &amp; visual systems · UI/UX design · Digital strategy · Data storytelling</p>
            <h1>Design clarity<br />that moves<br /><em>work forward.</em></h1>
            <p className="lede">I help ambitious organisations build clear brands, useful digital experiences, thoughtful digital strategies—including social content—and decision-ready data stories.</p>
            <div className="hero-actions"><Link href="/#work" className="text-action">View selected work <span>↗</span></Link><Link href="/#about" className="text-action">About me <span>↗</span></Link></div>
          </div>
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
        <div className="shell home-about-shell">
          <div className="home-about-heading">
            <p className="section-label">The person behind the work</p>
            <h2 id="about-title">About <em>me.</em></h2>
            <p>Creative thinking, analytical perspective, and a focus on making the next step clearer.</p>
          </div>
          <div className="home-about-grid">
            <Reveal className="home-about-portrait">
              <Image src="/images/alfred-hero-shoulders.png" alt="Alfred Tackie-Quaye" fill sizes="(max-width: 800px) 100vw, 26vw" />
              <div className="about-tools-marquee" role="group" aria-label="Tools I use">
                <div className="about-tools-track">
                  {[0, 1].map((copy) => (
                    <div className="about-tools-group" key={copy} aria-hidden={copy === 1}>
                      {[0, 1].map((repeat) => (
                        <div className="about-tools-set" key={repeat} aria-hidden={repeat > 0}>
                          {([
                            ['photoshop', 'Photoshop'],
                            ['illustrator', 'Illustrator'],
                            ['figma', 'Figma'],
                            ['power-bi', 'Power BI'],
                            ['fabric', 'Microsoft Fabric'],
                            ['security', 'Microsoft Security'],
                          ] as const).map(([tool, label], index) => (
                            <span
                              className={`about-tool about-tool-${tool}`}
                              key={tool}
                              style={{ animationDelay: `${((11 - (repeat * 6 + index)) * 48) / 12 - 1.2}s` }}
                            >
                              <i><ToolIcon tool={tool} /></i><b>{label}</b>
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <span><b>Alfred Tackie-Quaye</b><small>Designer · Analyst</small></span>
            </Reveal>
            <Reveal className="home-about-copy">
              <Reveal><p className="section-label">Designer. Analyst.</p><h3>Clarity builder.</h3></Reveal>
              <Reveal className="home-about-story">
                <p>I’m Alfred Tackie-Quaye, a Ghana-based creative and data professional working across brand and visual systems, UI/UX design, digital strategy, and data storytelling.</p>
                <p>I bring visual thinking and evidence-informed problem solving together to make ideas easier to understand, experiences easier to use, and information easier to act on.</p>
                <Link href="/#services" className="text-action">Explore my capabilities <span>↗</span></Link>
              </Reveal>
              <div className="home-about-metrics" aria-label="About my work">
                <div><strong>04</strong><span>Connected disciplines</span></div>
                <div><strong>01</strong><span>Clear goal: move work forward</span></div>
              </div>
            </Reveal>
            <aside className="home-about-snapshot" aria-label="Areas of practice">
              <p className="section-label">Areas of practice</p>
              <ul>
                <li><span>01</span><div><strong>Brand &amp; visual systems</strong><small>Identity, campaigns &amp; communication</small></div></li>
                <li><span>02</span><div><strong>UI/UX design</strong><small>Digital experiences shaped around real tasks</small></div></li>
                <li><span>03</span><div><strong>Digital strategy</strong><small>Channel planning &amp; social content direction</small></div></li>
                <li><span>04</span><div><strong>Data storytelling</strong><small>Power BI &amp; decision-ready insights</small></div></li>
              </ul>
              <p className="home-about-location"><span aria-hidden="true" />Based in Ghana · Available worldwide</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="client-proof" id="clarify" aria-labelledby="proof-title">
        <div className="shell">
          <div className="proof-intro"><p className="section-label">How I help</p><h2 id="proof-title">Make it easier to<br /><em>recognise, use, and act on.</em></h2><p>Good work should do more than look polished. It should help the right people understand the message, move through the experience, and make the next decision with confidence.</p></div>
          <div className="proof-grid">
            <Reveal className="proof-tile"><article><span>01</span><i className="proof-art" aria-hidden="true" /><h3>Make it recognisable.</h3><p>Brand and visual systems that give an organisation a clear, consistent presence.</p></article></Reveal>
            <Reveal className="proof-tile"><article><span>02</span><i className="proof-art" aria-hidden="true" /><h3>Make it easier to use.</h3><p>Digital experiences shaped around the tasks people are actually trying to complete.</p></article></Reveal>
            <Reveal className="proof-tile"><article><span>03</span><i className="proof-art" aria-hidden="true" /><h3>Make it easier to act on.</h3><p>Data stories that help information become a useful next move.</p></article></Reveal>
          </div>
          <div className="proof-footer"><p className="proof-note">Informed by ongoing Microsoft learning in Power BI, Fabric, and security fundamentals.</p><Link href="/#services" className="proof-action">Explore capabilities <span>↗</span></Link></div>
        </div>
      </section>

      <section className="home-services section" id="services" aria-labelledby="services-title">
        <div className="shell">
          <div className="home-section-heading"><p className="section-label">Services</p><h2 id="services-title">What I can do<br /><em>for your work.</em></h2><p>Choose one discipline or bring them together. The aim is to make the message, journey, or decision easier to move on.</p></div>
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
            <div className="home-credential-list">{credentials.map(([code, title]) => <Reveal className="home-credential-reveal" key={code}><article className="home-credential-card"><div className="home-credential-card-top">{code === 'ITIL' ? <span className="itil-mark" role="img" aria-label="ITIL certification">ITIL</span> : <span className="microsoft-mark" role="img" aria-label="Microsoft logo"><i /><i /><i /><i /></span>}<span className="home-credential-code">{code}</span></div><strong>{title}</strong></article></Reveal>)}</div>
            <Link href="/#credentials" className="text-action">Credentials overview <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-layout">
          <div className="contact-copy"><p className="section-label">Let’s make it useful</p><h2>Have a challenge<br /><em>worth clarifying?</em></h2><p>Whether you need a clearer identity, a more useful digital experience, or a better way to see the data, I’d be glad to hear what is next.</p><ContactDetails className="home-contact-details" copyable /></div>
          <ContactPanel />
        </div>
      </section>
    </main>
    <footer className="footer"><div className="shell"><Logo /><p>© {new Date().getFullYear()} Alfred Tackie-Quaye</p><div className="footer-social"><a href="https://www.linkedin.com/in/alfred-tackie-quaye-93b28314b" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/AlfredTQ" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></footer>
  </>;
}
