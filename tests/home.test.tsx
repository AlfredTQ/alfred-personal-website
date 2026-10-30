import { fireEvent, render, screen } from '@testing-library/react';
import Home from '@/app/page';
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
    expect(screen.getByText(/selected work/i)).toBeInTheDocument();
    expect(screen.getByText(/concept studies.*real case studies coming next/i)).toBeInTheDocument();
  });
});

describe('RevealImage', () => {
  it('shows an accessible fallback when an image source is unavailable', () => {
    render(<RevealImage alt="Future work" />);
    expect(screen.getByRole('img', { name: /future work/i })).toBeInTheDocument();
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
