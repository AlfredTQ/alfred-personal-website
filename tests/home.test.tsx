import { fireEvent, render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { RevealImage } from '@/components/reveal-image';
import { SiteHeader } from '@/components/site-header';

describe('Home page', () => {
  it('renders the primary message and an inquiry path', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /ideas with direction/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /let’s work together/i })).toHaveAttribute('href', '#contact');
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('sets honest expectations while case studies are in preparation', () => {
    render(<Home />);
    expect(screen.getByText(/portfolio in preparation/i)).toBeInTheDocument();
    expect(screen.getByText(/case studies in progress/i)).toBeInTheDocument();
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
