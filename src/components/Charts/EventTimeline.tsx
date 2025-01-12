'use client'

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

// Sample Data
const timelineData = [
  { date: '2025-01-01', count: 50 },
  { date: '2025-01-02', count: 80 },
  { date: '2025-01-03', count: 65 },
  { date: '2025-01-04', count: 90 },
  { date: '2025-01-05', count: 100 },
]

const EventTimeline = () => {
  return (
    <div className="card card-dash bg-base-100 card-sm shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Events timeline</h2>

        <LineChart
          width={600}
          height={300}
          data={timelineData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  )
}

export default EventTimeline
