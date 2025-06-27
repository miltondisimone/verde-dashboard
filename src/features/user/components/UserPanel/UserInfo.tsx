import Image from 'next/image'
import { UserInfoProps } from '../../types'
import './userInfo.css'

export const UserInfo = ({ name, email, avatarUrl }: UserInfoProps) => {
  return (
    <div className="userInfoWrapper">
      <Image
        src={avatarUrl}
        alt={name}
        width={120}
        height={120}
        className="object-cover m-auto rounded-full"
      />

      <dl className='nameWrapper'>
        <dt className="sr-only">Name</dt>
        <dd className="text-base font-semibold userName">{name}</dd>

        <dt className="sr-only">Email</dt>
        <dd className="userEmail">{email}</dd>
      </dl>
    </div>
  )
}