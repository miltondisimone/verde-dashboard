import Image from 'next/image'
import { UserInfoProps } from '../../types'

export const UserInfo = ({ name, email, avatarUrl }: UserInfoProps) => {
  return (
    <div className="text-center border-[#e8e8e8] p-4 rounded-[1rem] text-sm">
      <Image
        src={avatarUrl}
        alt={name}
        width={120}
        height={120}
        className="object-cover m-auto"
      />

      <dl>
        <dt className="sr-only">Name</dt>
        <dd className="text-base font-semibold text-gray-900">{name}</dd>

        <dt className="sr-only">Email</dt>
        <dd className="text-gray-600">{email}</dd>
      </dl>
    </div>
  )
}