import React, { useEffect, useState } from 'react'
import Rockets from '../components/Rockets';
import { rocketService } from '../services/DataService'

/**
 * Main screen page
 * @returns {JSX.Element}
 */
export default function Main() {

  const [rocket, setRocket] = useState([])

  useEffect(() => {
    rocketService().then((result) => {
      setRocket(result.data)
      console.log(result.data)
    }).catch((err) => {
      console.log(err)
    });
  }, [])

  
  return (
    <div style={{padding: '0 50px'}}>
      <Rockets rocket={rocket}/>
    </div>
  )
}