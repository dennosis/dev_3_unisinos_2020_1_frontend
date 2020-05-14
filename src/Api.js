
import axios from 'axios'
  


if (process.env.NODE_ENV !== 'production') 
    require('dotenv').config()
 
console.log(process.env)

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

let header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
    //"Authorization":"Bearer "
}


export const test = () => api.get('/',{headers: {...header}})



const apis = {
    test
}

export default apis