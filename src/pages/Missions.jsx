import React, { useEffect, useState } from 'react'
import Rockets from '../components/Rockets'
import { launchesService } from '../services/DataService'

export default function Missions(props) {

  const [launches, setLaunches] = useState([])

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
      {launches.map((launch)=>{
        return(
          <div key={launch.id}>{launch.name}</div>
        )
      })}
    </div>
  )
}
