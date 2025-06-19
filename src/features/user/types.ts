export interface User {
  id: string
  name: string
  email: string
  avatarUrl: string
  totalBalance: number
  amountSent: number
  amountReceived: number
}

export type UserInfoProps = {
  name: string
  email: string
  avatarUrl: string
}

export type BalanceOverviewProps = {
  totalBalance: number
  amountSent: number
  amountReceived: number
}

