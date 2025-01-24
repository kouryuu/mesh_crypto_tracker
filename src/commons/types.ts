export interface Currency {
  code: string;
  full_name: string;
  color: string;
  precision: number;
  type: 'crypto' | 'fiat';
}

export interface LastPrice {
  price: string;
  currency: Currency;
}

export interface DataPoint {
  date: number;
  number: string;
}

export interface BitsoGraphResponse {
  success: boolean;
  payload: {
    currency: Currency;
    last_price: LastPrice;
    graph_data: {
      percentage_change: string;
      period: string;
      period_description: string;
      period_last_update: string;
      period_date_format: string;
      points: DataPoint[];
    };
  };
}
