import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
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
    expect(conversationLinks).toHaveLength(1);
    expect(conversationLinks[0]).toHaveAttribute('href', '/#contact');
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('uses the complete editorial portfolio flow across capabilities, work, process, and credentials', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /clarity builder/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
    expect(screen.getByRole('complementary', { name: /areas of practice/i })).toBeInTheDocument();
    const aboutPractice = screen.getByRole('complementary', { name: /areas of practice/i });
    expect(aboutPractice).toHaveTextContent('Brand & visual systems');
    expect(aboutPractice).toHaveTextContent('Digital strategy');
    expect(aboutPractice).toHaveTextContent('Data storytelling');
    expect(screen.getByRole('link', { name: /explore my capabilities/i })).toHaveAttribute('href', '/#services');
    const aboutTools = screen.getByRole('group', { name: /tools i use/i });
    expect(aboutTools).toHaveTextContent('Photoshop');
    expect(aboutTools).toHaveTextContent('Illustrator');
    expect(aboutTools).toHaveTextContent('Figma');
    expect(aboutTools).toHaveTextContent('Power BI');
    expect(aboutTools).toHaveTextContent('Fabric');
    expect(aboutTools).toHaveTextContent('Security');
    expect(screen.getByRole('heading', { name: /what i can do for your work/i })).toBeInTheDocument();
    expect(document.querySelector('.proof-intro .section-label')).toHaveTextContent('How I help');
    expect(screen.getByText('Services', { selector: '.home-section-heading .section-label' })).toBeInTheDocument();
    expect(screen.getByText(/social content.*channel planning/i)).toBeInTheDocument();
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
    expect(document.querySelectorAll('.concept-work-grid > .concept-work-reveal')).toHaveLength(3);
    expect(screen.getByRole('heading', { name: /my approach/i })).toBeInTheDocument();
    expect(document.querySelectorAll('.process-step-reveal li')).toHaveLength(5);
    expect(document.querySelector('.contact-form-reveal form')).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: /microsoft logo/i })).toHaveLength(3);
    expect(screen.getByRole('img', { name: /itil certification/i })).toBeInTheDocument();
    expect(screen.getByText('ITIL Certification')).toBeInTheDocument();
    expect([...document.querySelectorAll('.home-credential-code')].map((code) => code.textContent)).toEqual(['PL-300', 'DP-700', 'SC-900', 'ITIL']);
    expect(document.querySelectorAll('.home-credential-date')).toHaveLength(0);
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
      'How I help',
      'Services',
      'Selected work',
      'Certifications',
      'Contact',
      'Start a conversation ↗',
      'Chat on WhatsApp',
    ]);
    expect(document.querySelector('#primary-nav a[href="/#main"]')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^About$/ })).toHaveAttribute('href', '/#about');
    expect(screen.getByRole('link', { name: 'How I help' })).toHaveAttribute('href', '/#clarify');
    expect(screen.getByRole('link', { name: 'Selected work' })).toHaveAttribute('href', '/#work');
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/#services');
    expect(screen.queryByRole('link', { name: 'Process' })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Certifications' })).toHaveAttribute('href', '/#credentials');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/#contact');
    expect(document.querySelector('#primary-nav .nav-cta')).toHaveAttribute('href', '/#contact');
    expect(screen.getByRole('link', { name: 'Chat on WhatsApp' })).toHaveAttribute(
      'href',
      expect.stringMatching(/^https:\/\/wa\.me\/233240791866\?text=/),
    );
    expect(screen.getByRole('link', { name: 'Chat on WhatsApp' })).toHaveAttribute('target', '_blank');
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
    expect(document.querySelector('footer .contact-details')).not.toBeInTheDocument();
    expect(document.querySelector('footer .footer-social a[href*="linkedin.com"]')).toBeInTheDocument();
  });

  it('lets clients copy contact details and provides a map link', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
    render(<Home />);

    expect(
      screen.getAllByRole('link', { name: /Accra, Ghana View location on map/i }).some(
        (link) => link.getAttribute('href') === 'https://maps.google.com/?q=Accra%2C%20Ghana',
      ),
    ).toBe(true);
    expect(screen.getAllByRole('button', { name: /^copy /i })).toHaveLength(3);

    fireEvent.click(screen.getByRole('button', { name: 'Copy email' }));

    expect(writeText).toHaveBeenCalledWith('alfredtackiequaye@gmail.com');
    expect(await screen.findByText('Email copied.')).toHaveAttribute('role', 'status');
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
