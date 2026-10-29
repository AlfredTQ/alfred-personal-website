import Image from 'next/image';
import Link from 'next/link';
import { PageFrame } from '@/components/page-frame';
import { Reveal } from '@/components/live-experience';

export default function AboutPage() {
  return <PageFrame><section className="page-hero about-hero"><div className="shell page-grid"><Reveal><p className="section-label">01 / About Alfred</p><h1>Creative thinking.<br /><em>Useful outcomes.</em></h1><p className="page-lede">I’m Alfred Tackie-Quaye, a multidisciplinary digital professional working across graphic design, user experience, digital communication, and data analytics.</p><Link className="button button-blue" href="/contact">Start a conversation <span>↗</span></Link></Reveal><Reveal className="profile-portrait"><Image src="/images/alfred-profile.jpg" alt="Alfred Tackie-Quaye" fill sizes="(max-width: 800px) 80vw, 36vw" priority /><p>Design · Experience · Insight</p></Reveal></div></section><section className="page-panel"><div className="shell page-copy-grid"><Reveal><p className="section-label">A point of view</p><h2>Clear communication is a form of care.</h2></Reveal><Reveal><p>I care about clear communication, intuitive experiences, and making information easier to understand. My work connects visual thinking with practical, evidence-informed problem solving.</p><p>Whether the challenge is a brand touchpoint, an interface, a campaign, or a report, the aim stays the same: help the right thing stand out.</p></Reveal></div></section></PageFrame>;
}
