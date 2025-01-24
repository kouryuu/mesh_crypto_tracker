import { BitsoGraphResponse } from '../commons/types';

// this needs to be on an env file, hardcoding for now.
const BITSO_API_BASE_URL = '/api/api/v3';


export type Period = '1D' | '1W' | '1M' | '3M' | '6M' | '1Y';
export type PreferredCurrency = 'mxn' | 'usd';

export const fetchCurrencyGraph = async (
  currencyCode: string,
  period: Period = '1D',
  preferredCurrency: PreferredCurrency = 'mxn'
): Promise<BitsoGraphResponse> => {
  try {
    const url = `${BITSO_API_BASE_URL}/currency_graph_public?currencyCode=${currencyCode}&period=${period}&preferredCurrency=${preferredCurrency}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: BitsoGraphResponse = await response.json();
    
    if (!data.success) {
      throw new Error('API returned unsuccessful response');
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching currency graph:', error);
    throw error;
  }
};

// Helper functions that format data.
export const formatGraphData = (data: BitsoGraphResponse) => {
  return data?.payload?.graph_data?.points?.map(point => {
        return parseFloat(point.number)
    });
};
export const formatLabels = (data: BitsoGraphResponse) => {
    return data?.payload?.graph_data?.points?.map(point => {
          return new Date(point.date).toISOString();
      });
  };