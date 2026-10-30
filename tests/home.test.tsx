import { fireEvent, render, screen } from '@testing-library/react';
import Home from '@/app/page';
import AboutPage from '@/app/about/page';
import ContactPage from '@/app/contact/page';
import CredentialsPage from '@/app/credentials/page';
import ServicesPage from '@/app/services/page';
import WorkPage from '@/app/work/page';
import { RevealImage } from '@/components/reveal-image';
import { SiteHeader } from '@/components/site-header';

describe('Home page', () => {
  it('renders the primary message and an inquiry path', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /design clarity.*moves work forward/i })).toBeInTheDocument();
    const conversationLinks = screen.getAllByRole('link', { name: /start a conversation/i });
    expect(conversationLinks).toHaveLength(2);
    expect(conversationLinks.find((link) => link.classList.contains('hero-contact-disc'))).toHaveAttribute('href', '/#contact');
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('uses the complete editorial portfolio flow across capabilities, work, process, and credentials', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /clarity builder/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /what i can do for your work/i })).toBeInTheDocument();
    const serviceLinks = screen.getAllByRole('link', { name: /discuss this service/i });
    expect(serviceLinks).toHaveLength(4);
    expect(serviceLinks.every((link) => link.getAttribute('href') === '#contact')).toBe(true);
    const areaOfInterest = screen.getByLabelText('Area of interest') as HTMLSelectElement;
    for (const [index, title] of ['Brand & visual systems', 'UI/UX design', 'Digital strategy', 'Data storytelling'].entries()) {
      fireEvent.click(serviceLinks[index]);
      expect(areaOfInterest.value).toBe(title);
    }
    expect(document.querySelectorAll('.home-service-icon svg')).toHaveLength(4);
    expect([...document.querySelectorAll('.home-service-icon svg')].every((icon) => icon.getAttribute('aria-hidden') === 'true')).toBe(true);
    expect(screen.getByRole('heading', { name: /a few things made with intent/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /my approach/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /credentials overview/i })).toHaveAttribute('href', '/#credentials');
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('labels concept studies honestly while real case studies are in development', () => {
    render(<Home />);
    expect(screen.getAllByText(/selected work/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/concept studies.*real case studies coming next/i)).toBeInTheDocument();
  });

  it('provides single-page navigation links to all primary sections', () => {
    render(<Home />);
    expect([...document.querySelectorAll('#primary-nav > a')].map((link) => link.textContent?.trim())).toEqual([
      'Home',
      'About',
      'What I help clarify',
      'Capabilities',
      'Selected work',
      'Process',
      'Credentials',
      'Contact',
      'Start a conversation ↗',
    ]);
    expect(document.querySelector('#primary-nav a[href="/#main"]')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^About$/ })).toHaveAttribute('href', '/#about');
    expect(screen.getByRole('link', { name: 'What I help clarify' })).toHaveAttribute('href', '/#clarify');
    expect(screen.getByRole('link', { name: 'Selected work' })).toHaveAttribute('href', '/#work');
    expect(screen.getByRole('link', { name: 'Capabilities' })).toHaveAttribute('href', '/#services');
    expect(screen.getByRole('link', { name: 'Process' })).toHaveAttribute('href', '/#process');
    expect(screen.getByRole('link', { name: 'Credentials' })).toHaveAttribute('href', '/#credentials');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/#contact');
    expect(document.querySelector('#primary-nav .nav-cta')).toHaveAttribute('href', '/#contact');
    expect(document.getElementById('clarify')).toBeInTheDocument();
    expect(document.getElementById('about')).toBeInTheDocument();
    expect(document.getElementById('work')).toBeInTheDocument();
    expect(document.getElementById('services')).toBeInTheDocument();
    expect(document.getElementById('process')).toBeInTheDocument();
    expect(document.getElementById('credentials')).toBeInTheDocument();
    expect(document.getElementById('contact')).toBeInTheDocument();
  });
});

describe('RevealImage', () => {
  it('shows an accessible fallback when an image source is unavailable', () => {
    render(<RevealImage alt="Future work" />);
    expect(screen.getByRole('img', { name: /future work/i })).toBeInTheDocument();
  });
});

describe('Contact details', () => {
  it('shows the provided location and clickable email and phone on the single page', () => {
    render(<Home />);
    expect(screen.getAllByText('Accra, Ghana').length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /alfredtackiequaye@gmail\.com/i }).every((link) => link.getAttribute('href') === 'mailto:alfredtackiequaye@gmail.com')).toBe(true);
    expect(screen.getAllByRole('link', { name: /\+233 240 791 866/i }).every((link) => link.getAttribute('href') === 'tel:+233240791866')).toBe(true);
  });
});

describe('Legacy page URLs', () => {
  it.each([
    ['About', AboutPage, '/#about'],
    ['Capabilities', ServicesPage, '/#services'],
    ['Selected work', WorkPage, '/#work'],
    ['Credentials', CredentialsPage, '/#credentials'],
    ['Contact', ContactPage, '/#contact'],
  ])('%s redirects to its single-page section', (_label, Page, destination) => {
    let redirectError: unknown;
    try {
      Page();
    } catch (error) {
      redirectError = error;
    }
    expect(redirectError).toHaveProperty('digest', expect.stringContaining(destination));
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
