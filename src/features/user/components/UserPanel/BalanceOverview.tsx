import { Card } from '../../../../components/Card/Card'
import { BalanceOverviewProps } from "../../types"

export const BalanceOverview = ({ totalBalance, amountSent, amountReceived }: BalanceOverviewProps) => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <Card
        title="Total Balance"
        description={`$ ${totalBalance.toFixed(2)}`}
      />
      <Card
        title="Sent"
        description={`$ ${amountSent.toFixed(2)}`}
      />
      <Card
        title="Received"
        description={`$ ${amountReceived.toFixed(2)}`}
      />
    </div>
  )
}

