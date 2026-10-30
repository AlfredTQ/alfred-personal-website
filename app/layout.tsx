import type { Metadata } from 'next';
import { siteUrl } from '@/lib/site';
import './globals.css';
import './fonts.css';
import './premium.css';
import './interim.css';
import './live.css';
import './reference-style.css';
import './profile.css';
import './full-hero.css';
import './routes.css';
import './readability.css';
import './glass-hero.css';
import './portrait-motion.css';
import './portrait-crop.css';
import './premium-finish.css';
import './bird-reference-hero.css';
import './combined-home.css';
import './portfolio-pages.css';
import './contact-form-modern.css';
import './navigation-responsive.css';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: 'Alfred Tackie-Quaye | Design & Data', template: '%s | Alfred Tackie-Quaye' },
  description: 'Portfolio for Alfred Tackie-Quaye — design, digital strategy, and data storytelling.',
  keywords: ['graphic design', 'UI/UX design', 'digital strategy', 'Power BI', 'data analytics'],
  authors: [{ name: 'Alfred Tackie-Quaye' }],
  category: 'portfolio',
  robots: { index: true, follow: true },
  openGraph: { type: 'website', locale: 'en_GB', title: 'Alfred Tackie-Quaye | Design & Data', description: 'Design, digital strategy, and data storytelling.' },
  twitter: { card: 'summary_large_image', title: 'Alfred Tackie-Quaye | Design & Data', description: 'Design, digital strategy, and data storytelling.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
