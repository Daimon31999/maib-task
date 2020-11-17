import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'

import Chart from '../charts/Chart'
import MyTable from '../tables/DashboardTable'
import Title from '../Title'
import PeriodPicker from '../PeriodPicker'
import DashboardCard from '../dashboard/DashboardCard'
import data from '../data/data'
import moment from 'moment'

export default function Dashboard() {
  let d = new Date() // tmp date object
  let startDate = d.setDate(d.getDate() - 30) // 30 day ago
  let endDate = new Date()

  const [dateRange, setDateRange] = React.useState({
    label: 'This Month',
    startDate: startDate,
    endDate: endDate,
  })

  const [dataChart, setDataChart] = useState(data.chart)
  const [dataTable, setDataTable] = useState(data.table)

  useEffect(() => {
    let filteredDataChart = data.chart.filter((item) =>
      moment(item.date).isBetween(
        dateRange.startDate,
        dateRange.endDate,
        undefined,
        '[]'
      )
    )

    let filteredDataTable = data.table.filter((item) =>
      moment(item.date).isBetween(
        dateRange.startDate,
        dateRange.endDate,
        undefined,
        '[]'
      )
    )

    setDataChart(filteredDataChart)
    setDataTable(filteredDataTable)
  }, [dateRange])

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
      <DashboardCard />
      <br />
      <Chart dateRange={dateRange} dataChart={dataChart} />

      <br />
      <MyTable dateRange={dateRange} dataTable={dataTable} />
    </>
  )
}
