import { render, screen, fireEvent } from '@testing-library/react'
import { FilterSelect } from './FilterSelect'

describe('FilterSelect', () => {
  const defaultProps = {
    label: 'Category',
    id: 'category-select',
    value: 'all',
    onChange: jest.fn(),
    options: [
      { label: 'All', value: 'all' },
      { label: 'Food', value: 'food' },
      { label: 'Travel', value: 'travel' },
    ],
  }

  it('renders label and select with options', () => {
    render(<FilterSelect {...defaultProps} />)

    // Label
    expect(screen.getByLabelText(/Category/i)).toBeInTheDocument()

    // Options
    expect(screen.getByRole('option', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Food' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Travel' })).toBeInTheDocument()
  })

  it('calls onChange when a new option is selected', () => {
    render(<FilterSelect {...defaultProps} />)

    fireEvent.change(screen.getByLabelText(/Category/i), {
      target: { value: 'food' },
    })

    expect(defaultProps.onChange).toHaveBeenCalledWith('food')
  })

  it('sets the correct value in the select input', () => {
    render(<FilterSelect {...defaultProps} value="travel" />)

    const select = screen.getByLabelText(/Category/i) as HTMLSelectElement
    expect(select.value).toBe('travel')
  })
})