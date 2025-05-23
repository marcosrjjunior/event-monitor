'use client'

import { useSearchParams } from 'next/navigation'
import { startTransition, useActionState } from 'react'

async function onSubmit(previousState, formData) {
  const currentUrl = new URL(window.location.href)
  currentUrl.searchParams.delete('user_id')
  currentUrl.searchParams.delete('filters_date')

  if (!formData) {
    currentUrl.searchParams.delete('filters_user_id')
    window.location.href = currentUrl.toString()

    return
  }

  const user_id = formData.get('user_id')

  // TODO: validate required here
  if (!user_id) return

  currentUrl.searchParams.set('page', '1')
  currentUrl.searchParams.set('filters_user_id', user_id)

  window.location.href = currentUrl.toString()

  return { user_id }
}

export const UsersFilters = ({ users }) => {
  const [state, submit, isPending] = useActionState(onSubmit, undefined)
  const searchParams = useSearchParams()

  const reset = () => {
    startTransition(() => {
      submit(undefined)
    })
  }

  return (
    <form action={submit} className="flex gap-2">
      {/* {state?.user_id} */}
      {/* <label htmlFor="user_id">User </label> */}

      <select
        className="select select-sm"
        id="user_id"
        name="user_id"
        defaultValue={state?.user_id}
      >
        <option value="">Filter user...</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      <button className="btn btn-soft btn-sm btn-ghost" disabled={isPending}>
        Filter
      </button>

      <button
        className="btn btn-soft btn-sm btn-ghost"
        disabled={isPending || !searchParams.get('filters_user_id')}
        onClick={() => {
          reset()
        }}
      >
        Reset
      </button>
    </form>
  )
}
