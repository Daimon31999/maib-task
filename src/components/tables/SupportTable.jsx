import React from 'react'
import moment from 'moment'

export default function MyTable({ data }) {
  data = data || []
  return (
    <div>
      <table id='test-table'>
        <tr>
          <th>
            <b>Nume Prenume</b>
          </th>
          <th>
            <b>IDNP</b>
          </th>
          <th>
            <b>Nr. Telefon</b>
          </th>
          <th>
            <b>PAN Card</b>
          </th>
          <th>
            <b>Last transaction</b>
          </th>
        </tr>
        {data.map((row) => {
          return (
            <tr>
              <td component='th' scope='row'>
                {row.userName}
              </td>
              <td>{row.IDNP}</td>
              <td>{row.phone}</td>
              <td>{row.PANCard}</td>
              <td>{moment(row.lastTransaction).format('HH:mm DD/MM/YYYY')}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
