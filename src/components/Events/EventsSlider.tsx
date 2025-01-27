'use client'

import { useEffect } from 'react'

import { format } from 'date-fns'
import cx from 'clsx'

import { EVENT_LOCATIONS, TIME } from '@/utils/constants'

// TODO: this should be part of the EventForm
export const EventsSlider = ({
  events,
  setCurrentEventIndex,
  currentEventIndex,
}) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'ArrowLeft') {
        if (currentEventIndex === 0) return

        setCurrentEventIndex(currentEventIndex - 1)
      } else if (event.key === 'ArrowRight') {
        if (currentEventIndex === events.length - 1) return
        setCurrentEventIndex(currentEventIndex + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentEventIndex, events.length, setCurrentEventIndex])

  return (
    <div className="flex w-full flex-col gap-1">
      <span className="text-xs opacity-60">
        Pick a time and use the keyboard {`'<'`} or {`'>'`} to navigate.
      </span>

      <div className="mt-2 flex min-h-[38px] justify-between gap-2 overflow-x-scroll px-2.5 text-xs">
        {events.map((event, index) => {
          const eventLocation =
            EVENT_LOCATIONS?.[event?.version || '1.0']?.[event?.name]

          return (
            <span
              onClick={() => setCurrentEventIndex(index)}
              key={event.id}
              className={cx(
                'relative min-w-[70px] cursor-pointer text-xs hover:opacity-60',
                {
                  'text-accent': +currentEventIndex === index,
                },
              )}
            >
              {eventLocation?.error && (
                <span className="bg-error absolute top-0 right-2 h-1 w-1 rounded" />
              )}

              {format(new Date(event.created_at), TIME)}
            </span>
          )
        })}
      </div>
    </div>
  )
}
