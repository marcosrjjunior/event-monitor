'use client'

import { useLinkStatus } from 'next/link'

export default function NavigateIndicator() {
  const { pending } = useLinkStatus()

  return pending ? <span className="navigate-indicator">...</span> : null
}
