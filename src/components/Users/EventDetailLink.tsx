'use client'

import { updateSearchParams } from '@/utils/searchParams'
import { useRouter } from 'next/navigation'

export const UserDetailLink = ({ userId }) => {
  const router = useRouter()

  return (
    <button
      className="btn btn-primary btn-sm"
      onClick={() => {
        router.push(
          updateSearchParams(window.location.href, { user_id: userId }),
        )
      }}
    >
      Detail
    </button>
  )
}
