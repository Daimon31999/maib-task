import React from 'react'
import { DateRangePicker } from 'materialui-daterange-picker'
import moment from 'moment'

import Popover from '@material-ui/core/Popover'

export default function PeriodPicker({ dateRange, setDateRange }) {
  const [open, setOpen] = React.useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  const [anchorEl, setAnchorEl] = React.useState(open)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    toggle()
  }

  const handleClose = () => {
    setAnchorEl(null)
    toggle()
  }

  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <div>
        <div
          id='popover-button'
          style={{
            backgroundColor: '#F1F1EF',
            color: '#6C6F74',
            textAlign: 'left',
            width: '240px',
            display: 'flex',
            flexDirection: 'column',
            padding: '11px 30px 11px 18px',
            fontWeight: '500',
            position: 'relative',
          }}
          onClick={handleClick}>
          <span
            style={{
              fontWeight: '900',
            }}>
            {dateRange.label}
          </span>
          <br />
          <div>
            <div>
              {moment(dateRange.startDate).format('DD MMM YYYY')} —{' '}
              {moment(dateRange.endDate).format('DD MMM YYYY')}
            </div>
            <i
              style={{
                position: 'absolute',
                right: '10px',
                bottom: '10px',
              }}
              className='arrow down'></i>
          </div>
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}>
          <DateRangePicker
            open={open}
            toggle={toggle}
            onChange={(range) => setDateRange(range)}
            initialDateRange={{
              startDate: dateRange.startDate,
              endDate: dateRange.endDate,
            }}
          />
        </Popover>
      </div>
    </div>
  )
}
