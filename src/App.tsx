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

export default function App() {
  return (
    <>
      <Controls />
      <Suspense fallback={<Loader />}>
        <ChartContent />
      </Suspense>
    </>
  )
}
