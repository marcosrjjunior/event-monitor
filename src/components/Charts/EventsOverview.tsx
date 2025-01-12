'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

// Sample Data
const eventData = [
  { name: 'SYNC_TRAIL_DATA_STARTED', count: 200 },
  { name: 'ACTIVITY_TOGGLED', count: 150 },
  { name: 'DIMENSION_TOGGLED', count: 100 },
  { name: 'SYNC_TRAIL_DATA_FAILED', count: 50 },
  { name: 'DIMENSION_TOGGLED_FAILED', count: 30 },
]

const EventsOverview = () => {
  return (
    <div className="card card-dash bg-base-100 card-sm shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Events overview</h2>

        <BarChart
          width={600}
          height={300}
          data={eventData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  )
}

export default EventsOverview
