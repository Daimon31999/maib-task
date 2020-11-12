import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import Chart from '../charts/Chart'
import MyTable from '../tables/DashboardTable'
import Title from '../Title'
import PeriodPicker from '../PeriodPicker'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  card: {
    width: '340px',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  installs: {
    fontWeight: '600',
  },
  boost: {
    letterSpacing: '-0.2px',
  },
})

export default function Dashboard() {
  const classes = useStyles()
  let d = new Date() // tmp date object
  let startDate = d.setDate(d.getDate() - 30) // 30 day ago
  let endDate = new Date()

  const [dateRange, setDateRange] = React.useState({
    label: 'This Month',
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
      <Card className={classes.card}>
        <CardContent>
          <span className={classes.installs}>
            Instalari pe dispozitive active
          </span>
          <div className={classes.cardContent}>
            <h1>5,489</h1>
            <span className={classes.boost}>+3.79% vs previous 30days</span>
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
