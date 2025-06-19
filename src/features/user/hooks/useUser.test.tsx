import { renderHook } from '@testing-library/react'
import { useTransactionsStats } from './useTransactionsStats'
import { Transaction } from '@/features/transactions/types'

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'send',
    amount: '100.00',
    description: 'Groceries',
    category: 'Food',
    createdAt: '2024-06-01T00:00:00Z',
    recipient: 'Alice'
  },
  {
    id: '2',
    type: 'receive',
    amount: '200.00',
    description: 'Salary',
    category: 'Income',
    createdAt: '2024-06-05T00:00:00Z',
    recipient: 'Bob'
  },
]

describe('useTransactionsStats', () => {
  it('calculates sent, received, and total amounts correctly', () => {
    const { result } = renderHook(() => useTransactionsStats(mockTransactions))

    expect(result.current.sent).toBe(100)
    expect(result.current.received).toBe(200)
    expect(result.current.total).toBe(100)
  })

  it('returns zeros with no transactions', () => {
    const { result } = renderHook(() => useTransactionsStats([]))

    expect(result.current.sent).toBe(0)
    expect(result.current.received).toBe(0)
    expect(result.current.total).toBe(0)
  })
})