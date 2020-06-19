
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
const register = (user) => api.post('/authenticate/signup', user)
const getUser = () => api.get(`/user`,{headers: {...header}})
const setUser = (user) => api.put(`/user`, user, {headers: {...header}})

const getCarById = (id) => api.get(`/cars/${id}`, {headers: {...header}})

const rentalCompany = (company) => api.post('/rental-company',company,{headers: {...header}})
const getRentalCompanies = () => api.get('/rental-company',{headers: {...header}})
const getRentalCompanyById = (id) => api.get(`/rental-company/${id}`,{headers: {...header}})

const card = (card) => api.post('/cards',card,{headers: {...header}})
const cards = () => api.get('/cards',{headers: {...header}})
const getCardById = (id) => api.get(`/cards/${id}`,{headers: {...header}})

const getBilletById = (id) => api.get(`/billets/${id}`,{headers: {...header}})


const rent = (rent) => api.post('/rents',rent, {headers: {...header}})
const getRentById = (id) => api.get(`/rents/${id}`, {headers: {...header}})

const paymentByCard = (payment) => api.post(`/payment/card`, payment, {headers: {...header}})
const paymentByBillet = (payment) => api.post(`/payment/billet`, payment, {headers: {...header}})

const getPaymentById = (id) => api.get(`/payment/${id}`, {headers: {...header}})

const getAddressById = (id) => api.get(`/address/${id}`, {headers: {...header}})

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
    getCardById,
    getBilletById,
    rent,
    getRentById,
    getRentalCompanies,
    getRentalCompanyById,
    paymentByCard,
    paymentByBillet,
    getPaymentById,
    rentalCompany,
    getAddressById,
    getCarById
}

export default apis