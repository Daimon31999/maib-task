import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'

import data from '../data/data'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function MyTable({ dateRange }) {
  const classes = useStyles()
  let rowCount = 0
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
            {data.table.map((row, index) => {
              if (
                // '[]' includes start and end date
                moment(row.date).isBetween(
                  dateRange.startDate,
                  dateRange.endDate,
                  undefined,
                  '[]'
                )
              ) {
                rowCount++
                return (
                  <TableRow key={row.date.toString() + index}>
                    <TableCell component='th' scope='row'>
                      {moment(row.date).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell>{row.totalUsers}</TableCell>
                    <TableCell>{row.uniqueUsers}</TableCell>
                    <TableCell>{row.uniqueUsers}</TableCell>
                  </TableRow>
                )
              }
              if (index === data.table.length - 1 && !rowCount) {
                return (
                  <TableRow key={row.date.toString() + index}>
                    <TableCell component='th' scope='row'>
                      <span
                        style={{
                          color: 'red',
                          fontWeight: 'bold',
                          fontSize: '1.2rem',
                        }}>
                        No Data
                      </span>
                    </TableCell>
                  </TableRow>
                )
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
