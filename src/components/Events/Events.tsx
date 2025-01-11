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
  const [data, setData] = useState(0)

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
    <div className="flex w-full flex-col gap-2 lg:items-center">
      <div className="flex w-[80%] flex-col gap-2">
        <EventsForm
          setData={setData}
          data={data}
          initialValues={{ dates: eventDates }}
        />

        {filteredEvents.length > 0 && (
          <EventsSlider
            events={filteredEvents}
            setCurrentEventIndex={setCurrentEventIndex}
            currentEventIndex={currentEventIndex}
          />
        )}
      </div>

      {filteredEvents.length > 0 && (
        <>
          <div className="flex-start flex gap-2">
            <span>Event: </span>
            <span className="text-md flex flex-row items-center gap-2 font-semibold">
              {currentEvent?.name}

              {(eventLocation?.run_on_background ||
                currentEvent?.custom?.error) && (
                <span
                  className="tooltip cursor-help"
                  data-tip={`Background request. ${currentEvent?.custom?.error ? `Error: ${currentEvent.custom.error}` : ''}`}
                >
                  <InfoCircle className="w-5" />
                </span>
              )}
            </span>
          </div>

          <div className="relative">
            <div className="relative flex h-5 w-5">
              <span
                className={cx(
                  'absolute h-full w-full rounded-full opacity-75',
                  {
                    'inline-flex animate-ping':
                      !eventLocation?.run_on_background,
                    'bg-accent': !eventLocation?.run_on_background,
                    'bg-error': eventLocation?.error,
                    hidden: eventLocation?.run_on_background,
                  },
                )}
                style={{ top: eventLocation?.x, left: eventLocation?.y }}
              />
            </div>

            <Image
              // className="dark:invert"
              src={imagePath}
              alt="Asset"
              width={350}
              height={1167}
            />
          </div>
        </>
      )}
    </div>
  )
}
