'use client'

import { updateSearchParams } from '@/utils/searchParams'
import { usePathname, useSearchParams } from 'next/navigation'
import NavigateIndicator from '../NavigateIndicator'
import Link from 'next/link'

export const UserDetailLink = ({ userId, disabled = false }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const href = !disabled
    ? updateSearchParams(pathname, searchParams, {
        user_id: userId,
        filters_date: undefined,
      })
    : ''

  if (disabled) {
    return (
      <button className="btn btn-primary btn-sm" disabled>
        Detail
      </button>
    )
  }

  return (
    <Link
      href={href}
      className="btn btn-primary btn-sm"
      replace
      aria-disabled={disabled}
    >
      Detail <NavigateIndicator />
    </Link>
  )
}
