'use client'

import { useTransactionFilterStore } from '../../store'
import { FilterSelect } from './FilterSelect'

export const FilterBar = ({ categories }: { categories: string[] }) => {
  const { type, category, setType, setCategory } = useTransactionFilterStore()

  return (
    <div className="flex flex-wrap items-center gap-6 mb-4">
      <FilterSelect
        label="Type"
        id="type"
        value={type}
        onChange={(value) => setType(value as 'all' | 'send' | 'receive')}
        options={[
          { label: 'All', value: 'all' },
          { label: 'Send', value: 'send' },
          { label: 'Receive', value: 'receive' },
        ]}
      />

      <FilterSelect
        label="Category"
        id="category"
        value={category}
        onChange={setCategory}
        options={[{ label: 'All', value: 'all' }, ...categories.map((cat) => ({ label: cat, value: cat }))]}
      />
    </div>
  )
}