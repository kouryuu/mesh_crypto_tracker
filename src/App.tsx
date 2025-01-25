import { Suspense } from 'react'
import { useAtom, useAtomValue} from 'jotai'
import './App.css'
import Controls from './components/Controls'
import LineChart from './components/LineChart'
import { 
  selectedCryptoAtom, 
  cryptoRawDataAtomCached,
  errorAtom,
  
} from './store/atoms'
import Loader from './components/Loader'
import { formatGraphData, formatLabels } from './services/bitsoApi'
import styled from 'styled-components'

function ChartContent() {
  const [selectedCrypto] = useAtom(selectedCryptoAtom)
  const data = useAtomValue(cryptoRawDataAtomCached)
  const error = useAtomValue(errorAtom)

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <LineChart 
      dataLabels={formatLabels(data)} 
      mainLabel={selectedCrypto} 
      data={formatGraphData(data)} 
    />
  )
}
const StyledChartContainer = styled.div`
  width: 100%;
  height: 50vh;
  max-height: 500px;
  position: relative;
  margin: 20px 0;
`;
export default function App() {
  return (
    <>
      <Controls />
      <StyledChartContainer>
      <Suspense fallback={<Loader />}>
        <ChartContent />
      </Suspense>
      </StyledChartContainer>
      <small>Price data taken from <a href="https://bitso.com/">Bitso </a> </small>
    </>
  )
}
