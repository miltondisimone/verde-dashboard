import { render, screen, fireEvent } from '@testing-library/react'
import { FilterBar } from './FilterBar'
import { useTransactionFilterStore } from '../../store'

jest.mock('../../store', () => ({
  useTransactionFilterStore: jest.fn(),
}))

describe('FilterBar', () => {
  const setType = jest.fn()
  const setCategory = jest.fn()

  beforeEach(() => {
    setType.mockReset()
    setCategory.mockReset()

    // ✅ Safe cast to unknown first
    ;(useTransactionFilterStore as unknown as jest.Mock).mockReturnValue({
      type: 'all',
      category: 'all',
      setType,
      setCategory,
    })
  })

  const categories = ['Food', 'Travel']

  it('renders filters with correct options', () => {
    render(<FilterBar categories={categories} />)
    expect(screen.getByLabelText('Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Category')).toBeInTheDocument()
  })

  it('calls store methods on change', () => {
    render(<FilterBar categories={categories} />)

    fireEvent.change(screen.getByLabelText('Type'), {
      target: { value: 'send' },
    })
    expect(setType).toHaveBeenCalledWith('send')

    fireEvent.change(screen.getByLabelText('Category'), {
      target: { value: 'Food' },
    })
    expect(setCategory).toHaveBeenCalledWith('Food')
  })
})
