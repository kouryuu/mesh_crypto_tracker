import { atom } from 'jotai'
import { atomWithCache } from 'jotai-cache'
import { fetchCurrencyGraph, PreferredCurrency, Period } from '../services/bitsoApi'


export const selectedCryptoAtom = atom('ETH')
export const cryptoLabelsAtom = atom<string[]>([])
export const loadingAtom = atom(false)
export const currencyAtom = atom<PreferredCurrency>('mxn')
export const periodAtom = atom<Period>('1M')
export const errorAtom = atom<string | null>(null)


export const cryptoRawDataAtomCached = atomWithCache(async (get) => {
  const crypto = get(selectedCryptoAtom)
  const currency = get(currencyAtom)
  const period = get(periodAtom)
  
  return await fetchCurrencyGraph(crypto.toLowerCase(), period, currency)
})
