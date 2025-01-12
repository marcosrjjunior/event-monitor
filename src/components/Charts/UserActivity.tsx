'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

// Sample Data
const userData = [
  { user: 'User 1', events: 300 },
  { user: 'User 2', events: 250 },
  { user: 'User 3', events: 200 },
  { user: 'User 4', events: 150 },
  { user: 'User 5', events: 100 },
]

const UserActivity = () => {
  return (
    <div className="card card-dash bg-base-100 card-sm shadow-sm">
      <div className="card-body">
        <h2 className="card-title">User activity</h2>

        <BarChart
          width={600}
          height={300}
          data={userData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="user" type="category" />
          <Tooltip />
          <Bar dataKey="events" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  )
}

export default UserActivity
