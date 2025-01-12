import { getData } from '@/lib/db'
import { Events } from './Events'

export const EventsWrapper = async ({ userId }) => {
  const events = getData('events.json')
    .filter(item => item.user_id === userId)
    .sort(
      (a: any, b: any) =>
        (new Date(a.created_at) as any) - (new Date(b.created_at) as any),
    )

  // const user = getData('users.json').filter(item => item.id === userId)?.[0]

  // console.log('filteredUser', filteredUser.length)
  // console.log('events', events)

  return (
    <div className="flex min-w-[375px] flex-1 flex-col items-center">
      {/* {user.name.toUpperCase()} */}

      {events.length > 0 ? (
        <Events events={events} />
      ) : (
        <span>There are no events for the selected user</span>
      )}
    </div>
  )
}
