export interface Transaction {
  id: string
  createdAt: string
  type: 'send' | 'receive'
  category: string
  amount: string
  recipient?: string
  description: string
}

export type PaginationProps = {
  totalItems: number
  itemsPerPage?: number
  onPageChange: (page: number) => void
}

export type Option = {
  label: string
  value: string
}

export type FilterSelectProps = {
  label: string
  id: string
  value: string
  onChange: (value: string) => void
  options: Option[]
}