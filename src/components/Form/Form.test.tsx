import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './index';

describe('Form Component', () => {
  const mockSubmit = jest.fn();
  const mockSetError = jest.fn();

  beforeEach(() => {
    mockSubmit.mockClear();
    mockSetError.mockClear();
  });

  test('renders the form with inputs and button', () => {
    render(<Form submit={mockSubmit} error={false} setError={mockSetError} />);
    expect(screen.getByLabelText(/Annual Income/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  test('displays validation message when fields are empty and submit is clicked', () => {
    render(<Form submit={mockSubmit} error={false} setError={mockSetError} />);
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    expect(screen.getByText(/Please fill in all fields to calculate your taxes/i)).toBeInTheDocument();
  });

  test('displays validation message when income is less than or equal to 0', () => {
    render(<Form submit={mockSubmit} error={false} setError={mockSetError} />);
    const incomeInput = screen.getByLabelText(/Annual Income/i);
    const yearSelect = screen.getByRole('combobox');
    
    fireEvent.change(incomeInput, { target: { value: '0' } });
    fireEvent.change(yearSelect, { target: { value: '2020' } });
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    
    expect(screen.getByText(/Please enter your annual income \(must be greater than \$0\)/i)).toBeInTheDocument();
  });

  test('calls submit function with correct values when form is valid', () => {
    render(<Form submit={mockSubmit} error={false} setError={mockSetError} />);
    const incomeInput = screen.getByLabelText(/Annual Income/i);
    const yearSelect = screen.getByRole('combobox');
    
    fireEvent.change(incomeInput, { target: { value: '50000' } });
    fireEvent.change(yearSelect, { target: { value: '2020' } });
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    
    expect(mockSubmit).toHaveBeenCalledWith('50000', '2020');
  });

  test('displays error alert when error prop is true', () => {
    render(<Form submit={mockSubmit} error={true} setError={mockSetError} />);
    expect(screen.getByTestId('alert')).toBeInTheDocument();
  });
}); 
