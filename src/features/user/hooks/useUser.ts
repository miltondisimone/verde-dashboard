'use client'
import { useEffect, useState } from 'react'
import { User } from '../types'

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('https://684c542ced2578be881e7d8c.mockapi.io/api/v1/users/1')
        const data = await res.json()
        setUser(data)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  return { user, isLoading }
}
