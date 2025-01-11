'use client'

import { DATE } from '@/utils/constants'
import { format } from 'date-fns'
import { useSearchParams } from 'next/navigation'
import { startTransition, useActionState } from 'react'

async function onSubmit(previousState, formData) {
  const currentUrl = new URL(window.location.href)
  if (!formData) {
    currentUrl.searchParams.delete('filters_date')
    window.location.href = currentUrl.toString()
    return
  }

  if (!formData.date) return

  currentUrl.searchParams.set('filters_date', formData.date)

  window.location.href = currentUrl.toString()

  return { date: formData.date }
}

export const EventsForm = ({ data, setData, initialValues }) => {
  const searchParams = useSearchParams()

  const [state, submit, _] = useActionState(onSubmit, {
    date: searchParams.get('filters_date'),
  })

  const onChange = ({ ...values }) => {
    startTransition(() => {
      submit(values)
    })
  }

  return (
    <form action={submit} className="flex gap-2">
      {/* {state?.user_id} */}
      {/* <label htmlFor="user_id">User </label> */}

      {/* TODO: populate available dates based on the selected user_id */}
      <select
        className="select select-sm"
        id="date"
        name="date"
        value={state?.date || ''}
        onChange={e => onChange({ date: e.target.value })}
        // defaultValue={state?.date}
      >
        <option value="">Select a date...</option>
        {initialValues.dates.map(date => (
          <option key={date} value={date}>
            {format(new Date(date), DATE)}
          </option>
        ))}
      </select>

      {/* <button className="btn btn-soft btn-sm btn-ghost" disabled={isPending}>
        Filter
      </button> */}

      {/* <button
        className="btn btn-soft btn-sm btn-ghost"
        disabled={isPending}
        onClick={() => {
          reset()
        }}
      >
        Reset
      </button> */}
    </form>
  )
}
