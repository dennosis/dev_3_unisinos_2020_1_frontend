
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

export const login = (authenticate) => api.post('/authenticate/signin', authenticate)
export const register = (user) => api.post('/user/register', user)


export const test = () => api.get('/',{headers: {...header}})


export const search = (filter) => api.post('/cars/search',filter,{headers: {...header}})



const apis = {
    login,
    register,
    test,
    search
}

export default apis