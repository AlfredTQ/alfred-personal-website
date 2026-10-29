import { PageFrame } from '@/components/page-frame';
import { Reveal } from '@/components/live-experience';
import { credentials } from '@/lib/content';

export default function CredentialsPage() {
  return <PageFrame><section className="page-hero"><div className="shell"><Reveal><p className="section-label">04 / Continuous learning</p><h1>Credentials that<br /><em>support the work.</em></h1><p className="page-lede">Professional learning across analytics, data engineering, and security fundamentals.</p></Reveal></div></section><section className="page-panel credentials-route-panel"><div className="shell"><Reveal><p className="route-note">Dates are supplied by Alfred. Official verification links will be added when provided.</p></Reveal><div className="route-credentials">{credentials.map(([code, title, date]) => <Reveal key={code} className="route-credential"><span>{code}</span><h2>{title}</h2><p>Date provided: {date}</p><small>Verification pending</small></Reveal>)}</div></div></section></PageFrame>;
}
