import React from 'react'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import Chart from '../charts/Chart'
import MyTable from '../tables/MyTable'
import Title from '../Title'
import PeriodPicker from '../PeriodPicker'

export default function Dashboard() {
  let d = new Date() // tmp date object
  let startDate = d.setDate(d.getDate() - 30) // 30 day ago
  let endDate = new Date()

  const [dateRange, setDateRange] = React.useState({
    label: '30 days',
    startDate: startDate,
    endDate: endDate,
  })

  return (
    <>
      <Title title='Dashboard' />
      <div className='my-row'>
        <Button
          size='medium'
          className='my-button'
          variant='contained'
          color='primary'>
          Configura raport
        </Button>
        <PeriodPicker
          dateRange={dateRange}
          setDateRange={(range) => setDateRange(range)}
        />
      </div>
      <br />
      <Card
        style={{
          width: '340px',
        }}>
        <CardContent>
          <span style={{ fontWeight: '600' }}>
            Instalari pe dispozitive active
          </span>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}>
            <h1>5,489</h1>
            <span style={{ letterSpacing: '-0.2px' }}>
              +3.79% vs previous 30days
            </span>
          </div>
        </CardContent>
      </Card>
      <br />
      <Chart dateRange={dateRange} />

      <br />
      <MyTable />
    </>
  )
}
