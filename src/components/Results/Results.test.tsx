import { render, screen } from '@testing-library/react';
import Results from './index';

describe('Results Component', () => {
  const mockCalculationResults = {
    marginalRate: 0.2,
    totalTax: 5000,
    effectiveTaxRate: 0.15,
    bracketDetails: [],
  };

  test('renders spinner when loading', () => {
    render(<Results isLoading={true} calculationResults={null} error={false} />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  test('renders error message when there is an error or no results', () => {
    render(<Results isLoading={false} calculationResults={null} error={true} />);
    expect(screen.getByText(/Enter an income and a year to see tax calculation details/i)).toBeInTheDocument();
  });
}); 