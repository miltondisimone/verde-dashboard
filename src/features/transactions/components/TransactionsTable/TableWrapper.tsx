'use client'

import { useTransactions } from '../../hooks/useTransactions'
import { useTransactionFilterStore } from '../../store'
import { FilterBar } from '../FilterBar/FilterBar'
import { Transaction } from '../../types'
import { useState, useEffect, useMemo } from 'react'
import { Pagination } from '../Pagination/Pagination'
import { TableHeader } from './TableHeader'
import { TableRow } from './TableRow'

const ITEMS_PER_PAGE = 10

export const TableWrapper = () => {
  const { transactions } = useTransactions()
  const { type, category } = useTransactionFilterStore()

  const filtered: Transaction[] = useMemo(() => {
    return transactions.filter((tx) => {
      const matchType = type === 'all' || tx.type === type
      const matchCategory = category === 'all' || tx.category === category
      return matchType && matchCategory
    })
  }, [transactions, type, category])

  const [page, setPage] = useState(1)
  const start = (page - 1) * ITEMS_PER_PAGE
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE)

  useEffect(() => {
    setPage(1)
  }, [type, category])

  const uniqueCategories = Array.from(new Set(transactions.map((t) => t.category)))

  return (
    <div className="flex flex-col bg-white rounded-xl p-6 shadow-md min-h-196">
      <h1 className="text-xl font-semibold mb-4 text-gray-800">Transaction history</h1>
      <FilterBar categories={uniqueCategories} />

      <div className="overflow-x-auto mt-4 shadow-md rounded-xl min-h-124">
        <table className="min-w-full border-collapse text-sm bg-white rounded-xl overflow-hidden">
          <caption className="sr-only">List of recent transactions</caption>
          <TableHeader />
          <tbody className="text-gray-800">
            {paginated.map((tx) => (
              <TableRow key={tx.id} tx={tx} />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        totalItems={filtered.length}
        itemsPerPage={10}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  )
}
