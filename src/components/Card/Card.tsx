import { CardProps } from "../types"

export const Card = ({ title, description }: CardProps) => {
  return (
    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm">
      <div className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-600">
        {title}
      </div>
      <div className="text-2xl font-semibold text-black">{description.toLocaleString()}</div>
    </div>
  )
}