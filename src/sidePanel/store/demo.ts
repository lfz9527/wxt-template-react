import useWxtStorage from '@/hooks/useWxtStorage'
import { storage } from '@wxt-dev/storage'

const counterState = storage.defineItem('local:counter', {
  fallback: 0
})
export default function useStoreDemo() {
  return useWxtStorage(counterState)
}