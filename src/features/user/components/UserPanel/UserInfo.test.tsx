import { render, screen } from '@testing-library/react'
import { UserInfo } from '@/features/user/components/UserPanel/UserInfo'

describe('UserInfo', () => {
  it('renders all user stats correctly', () => {
    render(
      <UserInfo
        name="Alice"
        email="alice@example.com"
        avatarUrl='/testUrl'
      />
    )

    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('alice@example.com')).toBeInTheDocument()
  })
})