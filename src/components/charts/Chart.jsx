import React from 'react'
import {
  AreaChart,
  Area,
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Card, CardContent, CardHeader } from '@material-ui/core'

const data = [
  { name: 'Page A', uc: 2500 },
  { name: 'Page B', uc: 1000 },
  { name: 'Page C', uc: 10000 },
  { name: 'Page D', uc: 4500 },
  { name: 'Page E', uc: 5000 },
  { name: 'Page F', uc: 10000 },
]

const Chart = () => (
  <>
    <Card>
      <CardContent>
        <div
          style={{
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '1rem',
          }}>
          <span>Numar de utilizatori</span>
          <span>23 Aug - 21 Sep</span>
        </div>
        <ResponsiveContainer width='100%' height={400}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='100%' stopColor='#82ca9d' stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='uc'
              stroke='#82ca9d'
              fillOpacity={1}
              fill='url(#colorPv)'
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </>
)

export default Chart
