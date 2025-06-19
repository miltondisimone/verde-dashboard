'use client'

import Image from 'next/image'

import { useUser } from '../../hooks/useUser'
import { useTransactions } from '@/features/transactions/hooks/useTransactions'
import { UserInfo } from './UserInfo'
import { useTransactionsStats } from '../../hooks/useTransactionsStats'
import { BalanceOverview } from './BalanceOverview'

export const UserPanel = () => {
  const { user, isLoading: loadingUser } = useUser()
  const { transactions, isLoading: loadingTxs } = useTransactions()
  const { sent: amountSent, received: amountReceived, total: totalBalance } = useTransactionsStats(transactions);

  if (loadingUser || !user) {
    return (
      <div className="h-56 bg-white rounded-xl p-6 shadow-md animate-pulse" />
    )
  }

  return (
    <div className="flex items-center flex-col gap-6 bg-white rounded-xl p-6 shadow-md min-h-196 min-h-[0px]">
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

