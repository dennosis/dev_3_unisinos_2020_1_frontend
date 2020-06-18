
import axios from 'axios'
import {getToken} from './persist'
  


if (process.env.NODE_ENV !== 'production') 
    require('dotenv').config()
 const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

let header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*',
    "Authorization": `Bearer ${getToken()}`
}

const login = (authenticate) => api.post('/authenticate/signin', authenticate)
const register = (user) => api.post('/user/register', user)
const getUser = () => api.get(`/user`,{headers: {...header}})
const setUser = (user) => api.put(`/user/update`, user, {headers: {...header}})

const rentalCompany = (company) => api.post('/rental-company',company,{headers: {...header}})
const getRentalCompanies = () => api.get('/rental-companies',{headers: {...header}})
const getRentalCompanyById = (id) => api.get(`/rental-company/${id}`,{headers: {...header}})

const card = (card) => api.post('/cards',card,{headers: {...header}})
const cards = () => api.get('/cards',{headers: {...header}})

const rent = (rent) => api.post('/rents',rent, {headers: {...header}})


const test = () => api.get('/',{headers: {...header}})


const search = (filter) => api.post('/cars/search',filter)


const apis = {
    login,
    register,
    getUser,
    setUser,
    test,
    search,
    card,
    cards,
    rent,
    getRentalCompanies,
    rentalCompany
}

export default apis