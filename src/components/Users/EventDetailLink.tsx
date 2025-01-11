'use client'

import { updateSearchParams } from '@/utils/searchParams'
import { useRouter } from 'next/navigation'

export const UserDetailLink = ({ userId, disabled = false }) => {
  const router = useRouter()

  return (
    <button
      className="btn btn-primary btn-sm"
      disabled={disabled}
      onClick={() => {
        router.push(
          updateSearchParams(window.location.href, {
            user_id: userId,
            filters_date: undefined,
          }),
        )
      }}
    >
      Detail
    </button>
  )
}
