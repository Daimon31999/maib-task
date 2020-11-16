import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import data from '../data/data'
import moment from 'moment'

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

export default function DashboardCard() {
  const classes = useStyles()
  const [sum, setSum] = useState(0)
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    let totalSum = data.chart.map((item) => item.uc)
    totalSum = totalSum.reduce((a, b) => a + b, 0)
    setSum(totalSum.toLocaleString())

    let filteredData = data.chart.filter((item) => {
      return moment(item.date).isBetween(
        moment().startOf('month'),
        moment().endOf('month'),
        undefined,
        '[]'
      )
    })

    let monthlySum = filteredData
      .map((item) => item.uc)
      .reduce((a, b) => a + b, 0)

    setPercent(Math.round((monthlySum / totalSum) * 100))
  }, [data.chart])

  return (
    <Card className={classes.card}>
      <CardContent>
        <span className={classes.installs}>
          Instalari pe dispozitive active
        </span>
        <div className={classes.cardContent}>
          <h1>{sum}</h1>
          <span className={classes.boost}>+{percent}% vs previous 30days</span>
        </div>
      </CardContent>
    </Card>
  )
}
