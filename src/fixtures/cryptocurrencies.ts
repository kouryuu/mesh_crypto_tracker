export interface CryptoOption {
  value: string;
  label: string;
  imageUrl: string;
  ethereumContract?: string;
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
    ethereumContract: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942'
  },
  {
    value: 'LINK',
    label: 'Chainlink Token',
    imageUrl: 'https://cryptologos.cc/logos/chainlink-link-logo.png',
    ethereumContract: '0x514910771AF9Ca656af840dff83E8264EcF986CA'
  },
  {
    value: 'BAT',
    label: 'Basic Attention Token',
    imageUrl: 'https://cryptologos.cc/logos/basic-attention-token-bat-logo.png',
    ethereumContract: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF'
  },
  {
    value: 'USDT',
    label: 'Tether USD',
    imageUrl: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    ethereumContract: '0xdAC17F958D2ee523a2206206994597C13D831ec7'
  }
];
