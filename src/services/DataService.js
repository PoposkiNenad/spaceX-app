import axios from "axios"

/**
 * Get rockets data
 * @returns {Promise<AxiosResponse<any>>}
 */
export const rocketService=()=>{
  return axios.get(`https://api.spacexdata.com/v4/rockets`)
}

export const launchesService=()=> {
  return axios.get(`https://api.spacexdata.com/v4/launches/past`)
}