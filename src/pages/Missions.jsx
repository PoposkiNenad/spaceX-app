import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { launchesService } from '../services/DataService'
import { styles } from '../styles/RocketsStyle'
import MissionCard from '../components/layout/MissionCard'

export default function Missions() {

  const [launches, setLaunches] = useState([])
  const classes = styles()

  useEffect(() => {
    launchesService().then((result) => {
      setLaunches(result.data)
      console.log(result.data)
    }).catch((err) => {
      console.log(err)
    });
  }, [])

  return (
    <div>
      <Grid container spacing={2} className={classes.root}>
        {launches && launches.map((mission) => {
          return (
            <Grid className="item" key={mission.id} item xs={12} sm={6} lg={3}>
              <MissionCard mission={mission} />
            </Grid>
          )
        })}
      </Grid>
      )
    </div>
  )
}
