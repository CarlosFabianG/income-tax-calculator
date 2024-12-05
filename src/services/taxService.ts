import { API_URL } from '../config';
import { TaxBracket } from '../types';

export async function fetchTaxBrackets(
  year: string, 
): Promise<TaxBracket[]> {
  const url = `${API_URL}/tax-calculator/tax-year/${year}`;

  try {
    const response = await fetch(url, { 
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.tax_brackets as TaxBracket[];
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('Request was cancelled');
    }
    
    console.error('Failed to fetch tax brackets:', error);
    throw error;
  }
};
