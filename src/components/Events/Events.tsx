'use client'

import { useState } from 'react'

import Image from 'next/image'
import cx from 'clsx'

import { EventsSlider } from './EventsSlider'
import { EVENT_LOCATIONS } from '@/utils/constants'

export const Events = ({ events }) => {
  const [currentEvent, setCurrentEvent] = useState(events[0])

  console.log('currentEvent', currentEvent)
  const eventLocation =
    EVENT_LOCATIONS?.[currentEvent?.version || '1.0']?.[currentEvent.name]
  console.log('eventLocation', eventLocation)

  // const top = eventLocation.x
  // const left = eventLocation.y
  const imagePath = `/assets/${eventLocation?.device || 'mobile'}/${eventLocation?.version || '1.0'}/${eventLocation?.image || 'no-image'}.png`

  return (
    <>
      <EventsSlider />

      <span>{currentEvent.name}</span>

      <div className="relative">
        <div className="relative flex h-5 w-5">
          <span
            className={cx(
              `absolute inline-flex h-full w-full rounded-full opacity-75`,
              {
                'animate-ping': !eventLocation?.run_on_background,
                'bg-info': !eventLocation?.run_on_background,
                'tooltip bg-accent': eventLocation?.run_on_background,
              },
            )}
            {...(eventLocation?.run_on_background && {
              ['data-tip']: 'Background request',
            })}
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
  )
}
