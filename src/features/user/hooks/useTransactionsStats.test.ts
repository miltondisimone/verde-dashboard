import { renderHook } from '@testing-library/react'
import { useTransactionsStats } from './useTransactionsStats'
import { Transaction } from '@/features/transactions/types'

const mockTransactions: Transaction[] = [
  { id: '1', type: 'send', amount: '50.00', description: '', category: '', createdAt: '' },
  { id: '2', type: 'receive', amount: '120.00', description: '', category: '', createdAt: '' },
  { id: '3', type: 'send', amount: '30.00', description: '', category: '', createdAt: '' },
  { id: '4', type: 'receive', amount: '80.00', description: '', category: '', createdAt: '' },
]

describe('useTransactionsStats', () => {
  it('calculates sent, received, and total correctly', () => {
    const { result } = renderHook(() => useTransactionsStats(mockTransactions))

    expect(result.current.sent).toBe(80.00)
    expect(result.current.received).toBe(200.00)
    expect(result.current.total).toBe(120.00)
  })

  it('returns 0s when no transactions are provided', () => {
    const { result } = renderHook(() => useTransactionsStats([]))

    expect(result.current.sent).toBe(0)
    expect(result.current.received).toBe(0)
    expect(result.current.total).toBe(0)
  })
})