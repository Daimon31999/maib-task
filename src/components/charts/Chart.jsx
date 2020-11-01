import React from 'react'
import data from '../data/data'
import FormattedDate from './../FormattedDate'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Card, CardContent } from '@material-ui/core'

const Chart = ({ dateRange }) => (
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
          <FormattedDate dateRange={dateRange} />
        </div>
        <ResponsiveContainer width='100%' height={400}>
          <AreaChart
            data={data.chart}
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
