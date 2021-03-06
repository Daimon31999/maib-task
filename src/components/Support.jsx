import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import Title from './Title'
import TextField from '@material-ui/core/TextField'
import data from './data/data'
import SupportTable from './tables/SupportTable'
import MuiPhoneNumber from 'material-ui-phone-number'

import parsePhoneNumber from 'libphonenumber-js'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20ch',
    },
  },
  cautaUtilizatori: {
    fontSize: '22px',
    marginTop: '2rem',
  },
  myForm: {
    display: 'flex',
    alignItems: 'baseline',
  },
}))

export default function Support() {
  const classes = useStyles()
  const [idnp, setIdnp] = useState(undefined)
  const [phone, setPhone] = useState(null)

  const [date, setDate] = useState(null)
  const [resultName, setResultName] = useState()
  const [searchResult, setSearchResult] = useState()

  useEffect(() => {
    search(data.users)
  }, [])
  function search(data) {
    let tmpRes = []

    tmpRes = data.filter(
      (user) =>
        (!idnp || user.IDNP === idnp) &&
        (!phone || user.phone === phone) &&
        (!date || +user.lastTransaction.getTime() === +date.getTime())
    )

    let uniqueNames = [...new Set(tmpRes.map((user) => user.userName.trim()))]
    uniqueNames =
      uniqueNames.length > 4
        ? uniqueNames.slice(0, 4).join(', ') + '...'
        : uniqueNames
    setResultName(uniqueNames || 'Not found')

    setSearchResult(tmpRes)
  }

  const handleIdnpChange = (event) => {
    setIdnp(event.target.value.trim())
  }
  const handlePhoneChange = (value) => {
    if (value.length < 12) setPhone(null)
    else setPhone(parsePhoneNumber(value).number)
  }

  const handleDateChange = (event) => {
    let value = event.target.value
    let [year, month, day] = value && value.split('-')
    day = day && day.split('T')[0]
    let [hour, minutes] = value && value.split('T')[1].split(':')
    if (year && month && day && hour && minutes)
      setDate(new Date(year, month, day, hour, minutes))
    else setDate(null)
  }

  return (
    <div>
      <Title title='Support' />
      <h1 className={classes.cautaUtilizatori}>Cauta utilizator:</h1>
      <div className='my-row2'>
        <form
          className={`${classes.root} ${classes.myForm}`}
          noValidate
          autoComplete='off'>
          <TextField
            id='IDNP'
            label='IDNP'
            value={idnp}
            onChange={handleIdnpChange}
          />
          <MuiPhoneNumber defaultCountry={'md'} onChange={handlePhoneChange} />
          <TextField
            id='datetime-local'
            label='Next appointment'
            type='datetime-local'
            className={classes.textField}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <Button
          onClick={() => search(data.users)}
          size='medium'
          className='my-button'
          variant='contained'
          color='primary'
          style={{
            padding: '0.6rem 3rem',
          }}>
          Cauta
        </Button>
      </div>
      <h2>Resultate cautare: {resultName}</h2>
      <br />
      <SupportTable data={searchResult} />
    </div>
  )
}
