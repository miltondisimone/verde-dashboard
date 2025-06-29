'use client'

import { useUser } from '../../hooks/useUser'
import { useTransactions } from '@/features/transactions/hooks/useTransactions'
import { UserInfo } from './UserInfo'
import { useTransactionsStats } from '../../hooks/useTransactionsStats'
import { BalanceOverview } from './BalanceOverview'

export const UserPanel = () => {
  const { user, isLoading: loadingUser } = useUser()
  const { transactions } = useTransactions()
  const { sent: amountSent, received: amountReceived, total: totalBalance } = useTransactionsStats(transactions);

  if (loadingUser || !user) {
    return (
      <div className="h-56 bg-white rounded-xl p-6 shadow-md animate-pulse" />
    )
  }

  return (
    <div className="flex items-center flex-col w-full gap-6 md:min-h-196">
      <UserInfo
        avatarUrl={user.avatarUrl}
        name={user.name}
        email={user.email}
      />
      <BalanceOverview
        amountReceived={amountReceived}
        totalBalance={totalBalance}
        amountSent={amountSent}
      />
    </div>
  )
}

