import { fireEvent, render, screen } from '@testing-library/react';
import Home from '@/app/page';
import AboutPage from '@/app/about/page';
import ContactPage from '@/app/contact/page';
import WorkPage from '@/app/work/page';
import { RevealImage } from '@/components/reveal-image';
import { SiteHeader } from '@/components/site-header';

describe('Home page', () => {
  it('renders the primary message and an inquiry path', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /design clarity.*moves work forward/i })).toBeInTheDocument();
    const conversationLinks = screen.getAllByRole('link', { name: /start a conversation/i });
    expect(conversationLinks).toHaveLength(2);
    expect(conversationLinks.find((link) => link.classList.contains('hero-contact-disc'))).toHaveAttribute('href', '/contact');
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('labels concept studies honestly while real case studies are in development', () => {
    render(<Home />);
    expect(screen.getAllByText(/selected work/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/concept studies.*real case studies coming next/i)).toBeInTheDocument();
  });

  it('provides menu links to the homepage clarity and about sections', () => {
    render(<Home />);
    expect(screen.getByRole('link', { name: 'What I help clarify' })).toHaveAttribute('href', '/#clarify');
    expect(screen.getByRole('link', { name: /^About$/ })).toHaveAttribute('href', '/#about');
    expect(screen.getByRole('link', { name: 'Selected work' })).toHaveAttribute('href', '/#work');
    expect(document.getElementById('clarify')).toBeInTheDocument();
    expect(document.getElementById('about')).toBeInTheDocument();
    expect(document.getElementById('work')).toBeInTheDocument();
  });
});

describe('RevealImage', () => {
  it('shows an accessible fallback when an image source is unavailable', () => {
    render(<RevealImage alt="Future work" />);
    expect(screen.getByRole('img', { name: /future work/i })).toBeInTheDocument();
  });
});

describe('Work page', () => {
  it('uses the existing concept studies to fill the route hero', () => {
    render(<WorkPage />);
    expect(screen.getByLabelText('Three concept study previews').querySelectorAll('figure')).toHaveLength(3);
  });
});

describe('About page', () => {
  it('uses the approved Ghana-based professional summary and focus areas', () => {
    render(<AboutPage />);
    expect(screen.getByText(/Ghana-based creative and data professional/i)).toBeInTheDocument();
    expect(screen.getByText('Social media management')).toBeInTheDocument();
    expect(screen.getByText('Power BI analytics')).toBeInTheDocument();
  });
});

describe('Contact details', () => {
  it('shows the provided location and clickable email and phone on the contact page', () => {
    render(<ContactPage />);
    expect(screen.getAllByText('Accra, Ghana').length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /alfredtackiequaye@gmail\.com/i }).every((link) => link.getAttribute('href') === 'mailto:alfredtackiequaye@gmail.com')).toBe(true);
    expect(screen.getAllByRole('link', { name: /\+233 240 791 866/i }).every((link) => link.getAttribute('href') === 'tel:+233240791866')).toBe(true);
  });
});

describe('SiteHeader', () => {
  it('closes its menu when Escape is pressed', () => {
    render(<SiteHeader />);
    const toggle = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});
