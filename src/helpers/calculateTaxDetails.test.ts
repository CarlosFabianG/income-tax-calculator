import { calculateTaxDetails } from './calculateTaxDetails';

describe('calculateTaxDetails', () => {
  const mockTaxBrackets = [
    { min: 0, max: 50000, rate: 0.15 },
    { min: 50000, max: 100000, rate: 0.25 },
    { min: 100000, max: Infinity, rate: 0.35 }
  ];

  it('should calculate taxes correctly for income in first bracket', async () => {
    const result = await calculateTaxDetails(30000, mockTaxBrackets);
    
    expect(result).toEqual({
      totalTax: '4500.00',
      marginalRate: 15,
      effectiveTaxRate: '15.00',
      bracketDetails: [{
        min: 0,
        max: 50000,
        rate: 15,
        taxableAmount: 30000,
        bracketTax: 4500
      }]
    });
  });

  it('should calculate taxes correctly for income spanning multiple brackets', async () => {
    const result = await calculateTaxDetails(75000, mockTaxBrackets);
    
    expect(result).toEqual({
      totalTax: '13750.00',
      marginalRate: 25,
      effectiveTaxRate: '18.33',
      bracketDetails: [
        {
          min: 0,
          max: 50000,
          rate: 15,
          taxableAmount: 50000,
          bracketTax: 7500
        },
        {
          min: 50000,
          max: 100000,
          rate: 25,
          taxableAmount: 25000,
          bracketTax: 6250
        }
      ]
    });
  });

  it('should handle income in highest bracket correctly', async () => {
    const result = await calculateTaxDetails(150000, mockTaxBrackets);
    
    expect(result?.marginalRate).toBe(35);
    expect(result?.bracketDetails.length).toBe(3);
  });

  it('should return null for negative income', async () => {
    const result = await calculateTaxDetails(-1000, mockTaxBrackets);
    expect(result).toBeNull();
  });

  it('should return null for invalid income input', async () => {
    const result = await calculateTaxDetails('not a number', mockTaxBrackets);
    expect(result).toBeNull();
  });

  it('should handle zero income correctly', async () => {
    const result = await calculateTaxDetails(0, mockTaxBrackets);
    
    expect(result).toEqual({
      totalTax: '0.00',
      marginalRate: 0,
      effectiveTaxRate: '0.00',
      bracketDetails: []
    });
  });

  it('should handle empty tax brackets array', async () => {
    const result = await calculateTaxDetails(50000, []);
    
    expect(result).toEqual({
      totalTax: '0.00',
      marginalRate: 0,
      effectiveTaxRate: '0.00',
      bracketDetails: []
    });
  });

  it('should handle non-array tax brackets input', async () => {
    const result = await calculateTaxDetails(50000, null as any);
    expect(result).toBeNull();
  });
}); 