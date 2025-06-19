import { Transaction } from "@/features/transactions/types"

export const useTransactionsStats = (transactions: Transaction[] = []) => {
  const sent = transactions
    .filter((t) => t.type === 'send')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0)

  const received = transactions
    .filter((t) => t.type === 'receive')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0)

  return {
    sent,
    received,
    total: received - sent,
  }
}