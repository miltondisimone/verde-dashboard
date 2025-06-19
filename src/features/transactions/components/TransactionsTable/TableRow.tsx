import { Transaction } from '../../types'
import { format } from 'date-fns'

export const TableRow = ({ tx }: { tx: Transaction }) => (
  <tr className="border-t border-gray-200 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
    <td className="px-4 py-3" data-label="Date">
      {format(new Date(tx.createdAt), 'MMM dd, yyyy')}
    </td>
    <td className="px-4 py-3" data-label="Description">
      {tx.description}
    </td>
    <td className="px-4 py-3 font-semibold" data-label="Amount">
      ${parseFloat(tx.amount).toFixed(2)}
    </td>
    <td className="px-4 py-3" data-label="Category">
      {tx.category}
    </td>
    <td className="px-4 py-3" data-label="Type">
      <span
        aria-label={`Transaction type: ${tx.type}`}
        className={`px-2 py-1 rounded-full text-xs font-medium ${tx.type === 'send'
            ? 'bg-red-100 text-red-800'   // ⬅️ increased contrast
            : 'bg-green-100 text-green-800' // ⬅️ increased contrast
          }`}
      >
        {tx.type}
      </span>
    </td>
  </tr>
)