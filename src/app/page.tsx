'use client'

import { UserPanel } from '@/features/user/components/UserPanel/UserPanel'
import { TableWrapper } from '@/features/transactions/components/TransactionsTable/TableWrapper'

const Home = () => {
  return (
    <>
      <h1 className="pageHeader">
        Financial Dashboard
      </h1>
      <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">


        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/5 w-full">
            <UserPanel />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <TableWrapper />
          </main>
        </div>
      </div>
    </>
  )
}

export default Home;