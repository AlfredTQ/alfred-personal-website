import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';

export const metadata: Metadata = {
  title: 'Alfred Tackie-Quaye | Design & Data',
  description: 'Portfolio for Alfred Tackie-Quaye — design, digital strategy, and data storytelling.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
