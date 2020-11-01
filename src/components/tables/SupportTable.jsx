import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function MyTable({ data }) {
  const guidGenerator = () => {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (
      S4() +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      S4() +
      S4()
    )
  }

  const classes = useStyles()
  data = data ? data : []
  console.log('data', data)

  const format = (date) => {
    return `${('0' + date.getHours()).slice(-2)}:${(
      '0' + date.getMinutes()
    ).slice(-2)} ${('0' + date.getDate()).slice(-2)}/${(
      '0' +
      (date.getMonth() + 1)
    ).slice(-2)}/${date.getFullYear() - 1}`
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='sticky table' stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Nume Prenume</b>
              </TableCell>
              <TableCell>
                <b>IDNP</b>
              </TableCell>
              <TableCell>
                <b>Nr. Telefon</b>
              </TableCell>
              <TableCell>
                <b>PAN Card</b>
              </TableCell>
              <TableCell>
                <b>Last transaction</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              console.log('row', row)

              return (
                <TableRow key={guidGenerator()}>
                  <TableCell component='th' scope='row'>
                    {row.userName}
                  </TableCell>
                  <TableCell>{row.IDNP}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.PANCard}</TableCell>
                  <TableCell>{format(row.lastTransaction)}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
