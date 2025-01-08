'use client'

export const EventsSlider = ({
  events,
  setCurrentEventIndex,
  currentEventIndex,
}) => {
  console.log('events length', events.length)
  return (
    <div className="w-full">
      <input
        type="range"
        // min={0}
        max={events.length}
        value={currentEventIndex}
        className="range w-full"
        step={1}
        onChange={e => {
          setCurrentEventIndex(e.target.value)
        }}
      />

      <div className="flex w-full justify-between px-2 text-xs">
        {events.map(event => (
          <span key={event.id}>|</span>
        ))}
      </div>
    </div>
  )
}
