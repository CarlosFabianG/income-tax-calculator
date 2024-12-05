import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App Component', () => {
  test('renders the header', () => {
    render(<App />);
    const headerElement = screen.getByText(/Income Tax Calculator/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the footer', () => {
    render(<App />);
    const footerElement = screen.getByText(/Made with ❤️ in Mexico/i);
    expect(footerElement).toBeInTheDocument();
  });

  test('renders the form', () => {
    render(<App />);
    const formElement = screen.getByTestId('form');
    expect(formElement).toBeInTheDocument();
  });

  test('displays instructions message', () => {
    render(<App />);
    const instructionsMessage = 'Enter an income and a year to see tax calculation details 😊';
    const instructionsMessageElement = screen.getByText(instructionsMessage);
    expect(instructionsMessageElement).toBeInTheDocument();
  });
});
