import { Card } from '../../../../components/Card/Card'
import { BalanceOverviewProps } from "../../types"
import './balanceOverview.css'

export const BalanceOverview = ({ totalBalance, amountSent, amountReceived }: BalanceOverviewProps) => {
  return (
    <div className="flex flex-col gap-4 mt-4 w-full">
      <Card
        className='totalBalance'
        title="Total Balance"
        description={`$ ${totalBalance.toFixed(2)}`}
      />
      <div className="my-2 h-px separator"></div>
      <Card
        className='sent'
        title="Sent"
        description={`$ ${amountSent.toFixed(2)}`}
      />
      <div className="my-2 h-px separator"></div>
      <Card
        className='received'
        title="Received"
        description={`$ ${amountReceived.toFixed(2)}`}
      />
    </div>
  )
}

