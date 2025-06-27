import { CardProps } from "../types"

export const Card = ({ title, description, className }: CardProps) => {
  return (
    <div className={`w-full ${className ?? ''}`}>
      <div className="flex items-center gap-2 mb-2 font-bold">
        {title}
      </div>
      <div className="text-2xl font-semibold" style={{ color: '#00221e', fontWeight: 500 }}>
        {description.toLocaleString()}
      </div>
    </div>
  )
}