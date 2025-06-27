import './tableWrapper.css'

export const TableHeader = () => (
  <thead className="tableHeader">
    <tr>
      <th scope="col" className="text-left px-4 py-3">Date</th>
      <th scope="col" className="text-left px-4 py-3">Description</th>
      <th scope="col" className="text-left px-4 py-3">Amount</th>
      <th scope="col" className="text-left px-4 py-3">Category</th>
      <th scope="col" className="text-left px-4 py-3">Type</th>
    </tr>
  </thead>
)