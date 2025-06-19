'use client'
import { useEffect, useState } from 'react'
import { Transaction } from '../types'

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch('https://684c542ced2578be881e7d8c.mockapi.io/api/v1/transactions')
        const data = await res.json()
        setTransactions(data)
      } finally {
        setLoading(false)
      }
    }

    fetchTransactions()
  }, [])

  return { transactions, isLoading }
}
