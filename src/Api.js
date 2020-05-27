
import axios from 'axios'
  


if (process.env.NODE_ENV !== 'production') 
    require('dotenv').config()
 const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

let header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
    //"Authorization":"Bearer "
}


export const test = () => api.get('/',{headers: {...header}})


export const search = (filter) => api.post('/cars/search',filter,{headers: {...header}})



const apis = {
    test,
    search
}

export default apis