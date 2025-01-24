import { atom } from 'jotai'
import { fetchCurrencyGraph, formatGraphData, formatLabels, PreferredCurrency, Period } from '../services/bitsoApi'

// Base atoms
export const selectedCryptoAtom = atom('ETH')
export const cryptoDataAtom = atom<number[]>([])
export const cryptoLabelsAtom = atom<string[]>([])
export const loadingAtom = atom(false)
export const currencyAtom = atom<PreferredCurrency>('mxn')
export const periodAtom = atom<Period>('1M')
export const errorAtom = atom<string | null>(null)

// Derived atom for fetching data
export const fetchCryptoDataAtom = atom(
  null, // read value (null means write-only)
  async (get, set, crypto: string) => {
    set(loadingAtom, true)
    set(errorAtom, null)
    try {
      const currency = get(currencyAtom)
      const period = get(periodAtom)
      const rawData = await fetchCurrencyGraph(crypto.toLowerCase(), period, currency)
      set(cryptoDataAtom, formatGraphData(rawData))
      set(cryptoLabelsAtom, formatLabels(rawData))
    } catch (error) {
      set(errorAtom, 'Failed to fetch crypto data')
    } finally {
      set(loadingAtom, false)
    }
  }
)
