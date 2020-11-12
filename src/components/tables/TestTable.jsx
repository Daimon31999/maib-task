import React from 'react'

export default function MyTable({ data }) {
  data = data ? data : []

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
              <td>{format(row.lastTransaction)}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
