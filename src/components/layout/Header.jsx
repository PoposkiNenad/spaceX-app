import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../../styles/HeaderStyle'

export default function Header() {
  const classes = styles()
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Link to="/">Rockets</Link>
        <Link to="/missions">Missions</Link>
      </Toolbar>
    </AppBar>
  )
}