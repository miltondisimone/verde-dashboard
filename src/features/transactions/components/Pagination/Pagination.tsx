import { useState, useEffect } from 'react'
import { PaginationProps } from '../../types'
import './pagination.css';

export const Pagination = ({ totalItems, itemsPerPage = 10, onPageChange }: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    onPageChange(currentPage)
  }, [currentPage, onPageChange])

  if (totalPages <= 1) return null

  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="flex flex-wrap justify-center mt-8 gap-3 px-4 py-4">
      {Array.from({ length: totalPages }, (_, i) => {
        const pageNum = i + 1
        const isActive = currentPage === pageNum

        return (
          <button
            key={pageNum}
            onClick={() => handlePageClick(pageNum)}
            className={`px-5 py-2 text-sm font-semibold transition-colors duration-200 shadow-sm ${
              isActive
                ? 'activePaginationButton text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {pageNum}
          </button>
        )
      })}
    </div>
  )
}
