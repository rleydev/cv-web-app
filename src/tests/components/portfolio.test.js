import { render, screen, fireEvent } from '@testing-library/react';
import Portfolio from '../../components/Portfolio/Portfolio';

describe('Portfolio', () => {
  test('renders portfolio with correct title and options', () => {
    const title = 'My Portfolio';

    render(<Portfolio title={title} />);

    const portfolioTitle = screen.getByText(title);
    const allButton = screen.getByText('All');
    const codeButton = screen.getByText('Code');
    const uiButton = screen.getByText('UI');

    expect(portfolioTitle).toBeInTheDocument();
    expect(allButton).toBeInTheDocument();
    expect(codeButton).toBeInTheDocument();
    expect(uiButton).toBeInTheDocument();
  });

  test('filters portfolio items when options are clicked', () => {
    render(<Portfolio title="My Portfolio" />);

    // Click the 'Code' button to filter items
    fireEvent.click(screen.getByText('Code'));

    expect(screen.getByTestId('portfolio-item-0')).toHaveClass('code');
    expect(screen.getByTestId('portfolio-item-2')).toHaveClass('code');

    // Click the 'UI' button to filter items
    fireEvent.click(screen.getByText('UI'));

    expect(screen.getByTestId('portfolio-item-1')).toHaveClass('ui');
    expect(screen.getByTestId('portfolio-item-3')).toHaveClass('ui');

  });
});