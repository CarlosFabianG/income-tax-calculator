import { TaxBracket } from "../types";

export const calculateTaxDetails = async (income: number, taxBracketsData: TaxBracket[]) => {
    try {
        const annualIncome = income;
        if (annualIncome < 0) {
            throw new Error('Please enter a valid income amount');
        }

        if (annualIncome === 0) {
            return {
                totalTax: '0.00',
                marginalRate: 0,
                effectiveTaxRate: '0.00',
                bracketDetails: []
            };
        }

        let totalTax = 0;
        let marginalRate = 0;
        let bracketDetails = [];

        // Calculate tax for each bracket
        for (const bracket of taxBracketsData) {
            const bracketsMin = bracket.min;
            const bracketsMax = bracket.max || Infinity;
            const bracketRate = bracket.rate;

            if (annualIncome > bracketsMin) {
                marginalRate = bracketRate * 100;

                const taxableAmount = Math.min(annualIncome, bracketsMax) - bracketsMin;
                const bracketTax = taxableAmount * bracketRate;

                totalTax += bracketTax;

                bracketDetails.push({
                    min: bracketsMin,
                    max: bracketsMax,
                    rate: bracketRate * 100,
                    taxableAmount,
                    bracketTax
                });
            }
        }

        const effectiveTaxRate = (totalTax / annualIncome) * 100;

        return {
            totalTax: totalTax.toFixed(2),
            marginalRate: marginalRate,
            effectiveTaxRate: effectiveTaxRate.toFixed(2),
            bracketDetails
        };
        
    } catch (error) {
        console.error('Error in tax calculation:', error);
        return null;
    }
};
