import { db } from '@/lib/db'
import { Events } from './Events'

export const EventsWrapper = async ({ userId }) => {
  const events = await db
    .prepare(`SELECT * FROM events WHERE user_id = ? ORDER BY created_at desc`)
    .all(userId)

  return (
    <div className="flex min-w-[375px] flex-1 flex-col items-center">
      {userId && events.length === 0 && (
        <span>There are no events for the selected user</span>
      )}

      {events.length > 0 && <Events events={events} />}
    </div>
  )
}
