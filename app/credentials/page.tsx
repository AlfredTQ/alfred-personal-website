import type { Metadata } from 'next';
import { PageFrame } from '@/components/page-frame';
import { Reveal } from '@/components/live-experience';
import { credentials } from '@/lib/content';

export const metadata: Metadata = { title: 'Credentials', description: 'Microsoft credentials in analytics and security that support design and data work.', alternates: { canonical: '/credentials' } };

export default function CredentialsPage() {
  return <PageFrame><section className="credentials-route-hero"><div className="shell credentials-layout"><Reveal><p className="section-label">04 / Credentials</p><h1>Credentials that<br /><em>support the work.</em></h1><p className="credentials-copy">Microsoft credential details have been supplied by Alfred. Official verification links can be added when available.</p></Reveal><div className="credentials-list">{credentials.map(([code, title, date]) => <Reveal key={code}><article><div className="microsoft" aria-hidden="true"><i /><i /><i /><i /></div><div><span>{code}</span><h2>{title}</h2><p>Date provided: {date}</p></div><small>Verification pending</small></article></Reveal>)}</div></div></section><section className="learning-panel"><div className="shell page-copy-grid"><Reveal><p className="section-label">Why it matters</p><h2>Good design needs<br /><em>good evidence.</em></h2></Reveal><Reveal><div><p>Analytics and security awareness make it easier to ask better questions, recognise constraints, and design experiences that work in the real world.</p><p>Credentials are not a substitute for thoughtful delivery. They are one part of a practice that keeps learning connected to useful work.</p></div></Reveal></div></section></PageFrame>;
}
