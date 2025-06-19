import { render, screen } from '@testing-library/react'
import { UserPanel } from './UserPanel'
import { useUser } from '../../hooks/useUser'
import { useTransactions } from '@/features/transactions/hooks/useTransactions'
import { useTransactionsStats } from '../../hooks/useTransactionsStats'

jest.mock('../../hooks/useUser')
jest.mock('@/features/transactions/hooks/useTransactions')
jest.mock('../../hooks/useTransactionsStats')

describe('UserPanel', () => {
	const mockUser = {
		id: '1',
		name: 'Julieta Martínez',
		email: 'julieta.martinez@example.com',
		avatarUrl: 'https://i.pravatar.cc/150?u=julieta',
	}

	const mockTransactions = [
		{ id: '1', type: 'send', category: 'Test', amount: '100', createdAt: new Date().toISOString(), description: '', recipient: '' },
		{ id: '2', type: 'receive', category: 'Test', amount: '200', createdAt: new Date().toISOString(), description: '', recipient: '' },
	]

	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('shows loading skeleton while loading', () => {
		; (useUser as jest.Mock).mockReturnValue({ user: null, isLoading: true })
			; (useTransactions as jest.Mock).mockReturnValue({ transactions: [], isLoading: true })
			; (useTransactionsStats as jest.Mock).mockReturnValue({ sent: 0, received: 0, total: 0 })

		const { container } = render(<UserPanel />)
		const skeleton = container.querySelector('.animate-pulse')
		expect(skeleton).toBeInTheDocument()
	})

	it('renders user info after loading', () => {
		; (useUser as jest.Mock).mockReturnValue({ user: mockUser, isLoading: false })
			; (useTransactions as jest.Mock).mockReturnValue({ transactions: mockTransactions, isLoading: false })
			; (useTransactionsStats as jest.Mock).mockReturnValue({ sent: 100, received: 200, total: 100 })

		render(<UserPanel />)

		expect(screen.getByText(mockUser.name)).toBeInTheDocument()
		expect(screen.getByText(mockUser.email)).toBeInTheDocument()
	})
})
