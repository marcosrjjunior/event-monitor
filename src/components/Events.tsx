import { count, getData } from '@/lib/db'
import { DATE_TIME } from '@/utils/constants'
import { format } from 'date-fns'
import Link from 'next/link'

export const Events = async ({ searchParams }) => {
  const { page = 1 } = await searchParams

  const events = getData('events.json', page)
  const total = count('events.json')

  return (
    <div className="flex w-full flex-col gap-2">
      {events.map(event => (
        <div
          key={event.id}
          className="card card-compact w-full bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <div className="flex justify-between">
              <span className="font-semibold">{event.name}</span>
              <span className="text-neutral-content/50">
                {format(new Date(event.created_at), DATE_TIME)}
              </span>
            </div>

            <div>
              <div className="avatar placeholder flex items-center gap-2">
                <div className="w-8 rounded-full bg-neutral text-neutral-content">
                  <span className="text-xs">
                    {event.user_id.substring(0, 2).toUpperCase()}
                  </span>
                </div>

                <span>{event.user_id}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="join">
        <Link href={`?page=${+page > 1 ? page - 1 : 1}`} scroll={false}>
          <button className="btn join-item">«</button>
        </Link>

        <button className="btn join-item">Page {page}</button>

        <Link
          href={`?page=${+page === total ? +page : +page + 1}`}
          scroll={false}
        >
          <button className="btn join-item">»</button>
        </Link>
      </div>
    </div>
  )
}
