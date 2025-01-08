import { getData } from '@/lib/db'
import { Events } from './Events'

export const EventsWrapper = async ({ searchParams, userId }) => {
  const {} = await searchParams

  const events = getData('events.json')
    .filter(item => item.user_id === userId)
    .sort(
      (a: unknown, b: unknown) =>
        new Date(a.created_at) - new Date(b.created_at),
    )

  const user = getData('users.json').filter(item => item.id === userId)?.[0]

  // console.log('filteredUser', filteredUser.length)
  console.log('events', events)

  return (
    <div className="flex min-w-[375px] flex-1 flex-col items-center">
      {user.name.toUpperCase()}

      {events.length > 0 && <Events events={events} />}
    </div>
  )
}
