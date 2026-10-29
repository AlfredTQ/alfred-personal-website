import type { Metadata } from 'next';
import { siteUrl } from '@/lib/site';
import './globals.css';
import './fonts.css';
import './premium.css';
import './interim.css';
import './live.css';

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
  return <html lang="en"><body>{children}</body></html>;
}
