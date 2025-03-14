'use client'

import { useState } from 'react'

import Image from 'next/image'
import cx from 'clsx'

import { EventsSlider } from './EventsSlider'
import { DB_DATE, EVENT_LOCATIONS } from '@/utils/constants'
import { EventsForm } from './EventsForm'
import { useSearchParams } from 'next/navigation'
import { format } from 'date-fns'
import { InfoCircle } from 'iconoir-react'

export const Events = ({ events }) => {
  const searchParams = useSearchParams()
  const [currentEventIndex, setCurrentEventIndex] = useState(0)

  const eventDates = [
    ...new Set(
      events.map(event => format(new Date(event.created_at), DB_DATE)),
    ),
  ]

  const filteredEvents = events.filter(
    event =>
      searchParams.get('filters_date') &&
      format(new Date(event.created_at), DB_DATE) ===
        searchParams.get('filters_date'),
  )

  const currentEvent = filteredEvents[currentEventIndex]

  const eventLocation =
    EVENT_LOCATIONS?.[currentEvent?.version || '1.0']?.[currentEvent?.name]

  const imagePath = `/assets/${eventLocation?.device || 'mobile'}/${eventLocation?.version || '1.0'}/${eventLocation?.image || 'no-image'}.png`

  return (
    <div className="flex w-full flex-col gap-3 lg:items-center">
      <div className="flex w-full flex-col gap-2">
        <EventsForm initialValues={{ dates: eventDates }} />

        {filteredEvents.length > 0 && (
          <EventsSlider
            events={filteredEvents}
            setCurrentEventIndex={setCurrentEventIndex}
            currentEventIndex={currentEventIndex}
          />
        )}
      </div>

      {filteredEvents.length > 0 && (
        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Event: </span>
            <span className="text-md font-semibold">{currentEvent?.name}</span>

            {(eventLocation?.run_on_background || currentEvent?.custom) && (
              <span
                className="tooltip cursor-help"
                data-tip={`Background request. ${currentEvent?.custom ? `Error: ${JSON.parse(currentEvent.custom)?.error}` : ''}`}
              >
                <InfoCircle className="w-5" />
              </span>
            )}
          </div>

          <div className="relative">
            <span
              className={cx('absolute h-5 w-5 rounded-full opacity-75', {
                'inline-flex animate-ping': !eventLocation?.run_on_background,
                'bg-accent': !eventLocation?.run_on_background,
                'bg-error': eventLocation?.error,
                hidden: eventLocation?.run_on_background,
              })}
              style={{ top: eventLocation?.x, left: eventLocation?.y }}
            />

            <Image src={imagePath} alt="Asset" width={300} height={1167} />
          </div>
        </div>
      )}
    </div>
  )
}
