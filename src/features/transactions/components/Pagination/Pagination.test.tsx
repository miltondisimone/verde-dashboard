import { render, screen, fireEvent } from '@testing-library/react'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('does not render if totalPages <= 1', () => {
    const { container } = render(
      <Pagination totalItems={5} itemsPerPage={10} onPageChange={jest.fn()} />
    )
    expect(container.firstChild).toBeNull()
  })

  it('renders the correct number of page buttons', () => {
    render(<Pagination totalItems={30} itemsPerPage={10} onPageChange={jest.fn()} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
  })

  it('calls onPageChange when a button is clicked', () => {
    const onPageChange = jest.fn()
    render(<Pagination totalItems={20} itemsPerPage={10} onPageChange={onPageChange} />)

    const secondPage = screen.getByRole('button', { name: '2' })
    fireEvent.click(secondPage)

    expect(onPageChange).toHaveBeenCalledWith(2)
  })

  it('does not call onPageChange if the same page is clicked again', () => {
    const onPageChange = jest.fn()
    render(<Pagination totalItems={20} itemsPerPage={10} onPageChange={onPageChange} />)

    const firstPage = screen.getByRole('button', { name: '1' })
    fireEvent.click(firstPage)

    // Called once due to initial effect only
    expect(onPageChange).toHaveBeenCalledTimes(1)
  })

  it('highlights the active page button', () => {
    render(<Pagination totalItems={30} itemsPerPage={10} onPageChange={jest.fn()} />)

    const activeBtn = screen.getByRole('button', { name: '1' })
    expect(activeBtn).toHaveClass('bg-green-600')
    expect(activeBtn).toHaveClass('text-white')
  })
})
