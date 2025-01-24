export interface CryptoOption {
  value: string;
  label: string;
  imageUrl: string;
}

export const CRYPTO_OPTIONS: CryptoOption[] = [
  { 
    value: 'ETH',
    label: 'Ethereum',
    imageUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  },
  {
    value: 'MANA',
    label: 'Decentraland',
    imageUrl: 'https://cryptologos.cc/logos/decentraland-mana-logo.png',
  },
  {
    value: 'LINK',
    label: 'Chainlink Token',
    imageUrl: 'https://cryptologos.cc/logos/chainlink-link-logo.png',
  },
  {
    value: 'BAT',
    label: 'Basic Attention Token',
    imageUrl: 'https://cryptologos.cc/logos/basic-attention-token-bat-logo.png',
  }
];
