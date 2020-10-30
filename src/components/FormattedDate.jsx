import React from 'react'

export default function FormattedDate({ dateRange }) {
  const formatDate = (date) => {
    let str = new Date(date)
    str = `${('0' + str.getDate()).slice(-2)} ${(
      '0' +
      (str.getMonth() + 1)
    ).slice(-2)} ${str.getFullYear()}`
    return str
  }
  const startDate = formatDate(dateRange.startDate)
  const endDate = formatDate(dateRange.endDate)
  const formattedDate = `${startDate} - ${endDate}`
  return <span>{formattedDate}</span>
}
