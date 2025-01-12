'use client'

import dynamic from 'next/dynamic'

const UserActivity = dynamic(() => import('@/components/Charts/UserActivity'), {
  ssr: false,
})

const EventTimeline = dynamic(
  () => import('@/components/Charts/EventTimeline'),
  {
    ssr: false,
  },
)

const EventsOverview = dynamic(
  () => import('@/components/Charts/EventsOverview'),
  {
    ssr: false,
  },
)

export default function Charts() {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      <UserActivity />
      <EventTimeline />
      <EventsOverview />
    </div>
  )
}
