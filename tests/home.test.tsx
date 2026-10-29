import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { RevealImage } from '@/components/reveal-image';

describe('Home page', () => {
  it('renders the primary message and an inquiry path', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /ideas with direction/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /let’s work together/i })).toHaveAttribute('href', '#contact');
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('identifies placeholder work as coming soon', () => {
    render(<Home />);
    expect(screen.getAllByText(/case study placeholder/i)).toHaveLength(2);
  });
});

describe('RevealImage', () => {
  it('shows an accessible fallback when an image source is unavailable', () => {
    render(<RevealImage alt="Future work" />);
    expect(screen.getByRole('img', { name: /future work/i })).toBeInTheDocument();
  });
});
