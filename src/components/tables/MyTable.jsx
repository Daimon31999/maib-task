import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import data from '../data/data'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function MyTable() {
  const classes = useStyles()

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Data</b>
              </TableCell>
              <TableCell>
                <b>Numar utilizatori total</b>
              </TableCell>
              <TableCell>
                <b>Numar utilizatori unici</b>
              </TableCell>
              <TableCell>
                <b>Numar utilizatori unici</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.table.map((row) => {
              console.log()
              return (
                <TableRow key={row.date.toString()}>
                  <TableCell component='th' scope='row'>
                    {row.date.getDate()}/
                    {row.date.getMonth().toString().length < 2
                      ? '0' + row.date.getMonth()
                      : row.date.getMonth()}
                    /{row.date.getFullYear()}
                  </TableCell>
                  <TableCell>{row.totalUsers}</TableCell>
                  <TableCell>{row.uniqueUsers}</TableCell>
                  <TableCell>{row.uniqueUsers}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
