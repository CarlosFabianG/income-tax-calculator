export interface TaxBracket {
    min: number;
    max: number;
    rate: number;
  }

  export interface BracketDetail {
    min: number;
    max: number;
    rate: number;
    taxableAmount: number;
    bracketTax: number;
  }

  export interface TaxDetails {
    totalTax: string;
    marginalRate: number;
    effectiveTaxRate: string;
    bracketDetails: BracketDetail[];
  }

  export interface FormProps {
    error: boolean;
    setError: (error: boolean) => void;
    submit: (year: string, income: string) => void;
  }
  
  export interface BracketBreakdownProps {
    bracketDetails: BracketDetail[];
  }

  export interface ResultsCardProps {
    marginalRate: number;
    totalTax: number;
    effectiveTaxRate: number;
  }
