import Link from 'next/link';
export default function NotFound() { return <main className="error-page"><p className="section-label">404 / Not found</p><h1>This page took<br /><em>a wrong turn.</em></h1><p>The page you’re looking for isn’t here, but the work is.</p><Link className="button button-blue" href="/">Back to home <span>↗</span></Link></main>; }
