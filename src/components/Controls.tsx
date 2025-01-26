// src/components/Controls.tsx
import { useAtom } from 'jotai'
import Dropdown from './Dropdown'
import { CRYPTO_OPTIONS } from '../fixtures/cryptocurrencies'
import { 
  selectedCryptoAtom, 
  currencyAtom, 
  periodAtom
} from '../store/atoms'
import type { Period, PreferredCurrency } from '../services/bitsoApi'
import styled from 'styled-components'


const PERIOD_OPTIONS = [
  { value: '1W', label: '1 Week' },
  { value: '1M', label: '1 Month' },
  { value: '1Y', label: '1 Year' }
]

const CURRENCY_OPTIONS = [
  { 
    value: 'mxn',
    label: 'Mexican Peso',
    imageUrl: 'https://flagsapi.com/MX/flat/64.png' },
    { 
        value: 'usd',
        label: 'US Dollar',
        imageUrl: 'https://flagsapi.com/US/flat/64.png' }

]

const CryptoSelector = styled(Dropdown)`
    min-width: 30vw;
`;
const ControlsContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 3fr 2fr 1fr;
    gap: 1em;
    
`
export default function Controls() {
  const [selectedCrypto, setSelectedCrypto] = useAtom(selectedCryptoAtom)
  const [selectedCurrency, setSelectedCurrency] = useAtom(currencyAtom)
  const [selectedPeriod, setSelectedPeriod] = useAtom(periodAtom)

  const handleCryptoChange = async (value: string) => {
    setSelectedCrypto(value)
  }

  const handleCurrencyChange = async (value: string) => {
    setSelectedCurrency(value as PreferredCurrency)
  }

  const handlePeriodChange = async (value: string) => {
    setSelectedPeriod(value as Period)
  }

  return (
    <ControlsContainer>
      <CryptoSelector
        options={CRYPTO_OPTIONS}
        value={selectedCrypto}
        onChange={handleCryptoChange}
        placeholder="Select a cryptocurrency"
      />
      <Dropdown
        options={CURRENCY_OPTIONS}
        value={selectedCurrency}
        onChange={handleCurrencyChange}
        placeholder="Select a currency"
      />
      <Dropdown
        options={PERIOD_OPTIONS}
        value={selectedPeriod}
        onChange={handlePeriodChange}
        placeholder="Select a period"
      />
    </ControlsContainer>
  )
}