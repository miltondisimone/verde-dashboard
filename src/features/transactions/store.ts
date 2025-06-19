import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type FilterState = {
  type: 'all' | 'send' | 'receive'
  category: string | 'all'
  setType: (type: FilterState['type']) => void
  setCategory: (category: string) => void
}

export const useTransactionFilterStore = create<FilterState>()(
  devtools((set) => ({
    type: 'all',
    category: 'all',
    setType: (type) => set({ type }, false, 'setType'),
    setCategory: (category) => set({ category }, false, 'setCategory'),
  }), { name: 'TransactionFilterStore' })
)