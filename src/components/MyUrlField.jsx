import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch'

const useStyles = makeStyles({
  link: {
      textDecoration: 'none',
  },
  icon: {
      width: '0.6em',
      paddingLeft: 2,
  },
});

export default function MyUrlField({ record = {}, source }) {

  const classes = useStyles()

  return (
    <div>
      <a className={classes.link} href={record[source]}>

        {record[source]}

        <LaunchIcon className={classes.icon} />

      </a>
    </div>
  )
}
