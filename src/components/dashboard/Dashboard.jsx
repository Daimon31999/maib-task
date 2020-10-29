import React from 'react'
import { Card, CardContent, CardHeader } from '@material-ui/core'

import Chart from '../charts/Chart'

export default function Dashboard() {
  return (
    <>
      <Card>
        <CardHeader
          title={
            'Welcome to the administration ' + localStorage.getItem('username')
          }
        />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
      </Card>
      <br />
      <Chart />
    </>
  )
}
