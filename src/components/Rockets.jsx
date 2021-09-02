import { Grid } from '@material-ui/core'
import React from 'react'
import Card from './layout/Card'
import {styles} from '../styles/RocketsStyle'

export default function Missions(props) {
  const classes = styles()
  return (
    <Grid container spacing={2} className={classes.root}>
      {props.rocket && props.rocket.map((mission) => {
        return (
          <Grid className="item" key={mission.id} item xs={12} sm={6} lg={3}>
            <Card rocket={mission} launches={props.launches} />
          </Grid>
        )
      })}
    </Grid>
  )
}
