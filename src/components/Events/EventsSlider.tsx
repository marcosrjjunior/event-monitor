'use client'

export const EventsSlider = () => {
  return (
    <div>
      <input
        type="range"
        min={0}
        max="100"
        value="25"
        className="range"
        step="25"
        onChange={() => {}}
      />

      <div className="flex w-full justify-between px-2 text-xs">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
    </div>
  )
}
