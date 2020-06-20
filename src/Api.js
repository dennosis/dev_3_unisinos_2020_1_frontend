
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

const storeUser = (user) => api.post('/authenticate/signup', user)
const getUser = () => api.get(`/user`,{headers: {...header}})
const setUser = (user) => api.put(`/user`, user, {headers: {...header}})

const getCarById = (id) => api.get(`/cars/${id}`, {headers: {...header}})

const storeRentalCompany = (company) => api.post('/rental-company',company,{headers: {...header}})
const getRentalCompanies = () => api.get('/rental-company',{headers: {...header}})
const getRentalCompanyById = (id) => api.get(`/rental-company/${id}`,{headers: {...header}})

const storeCard = (card) => api.post('/cards',card,{headers: {...header}})
const getCards = () => api.get('/cards',{headers: {...header}})
const getCardById = (id) => api.get(`/cards/${id}`,{headers: {...header}})

const getBilletById = (id) => api.get(`/billets/${id}`,{headers: {...header}})

const storeRent = (rent) => api.post('/rents',rent, {headers: {...header}})
const getRentById = (id) => api.get(`/rents/${id}`, {headers: {...header}})
const getRents = () => api.get(`/rents`, {headers: {...header}})

const storePaymentByCard = (payment) => api.post(`/payment/card`, payment, {headers: {...header}})
const storePaymentByBillet = (payment) => api.post(`/payment/billet`, payment, {headers: {...header}})

const getPaymentById = (id) => api.get(`/payment/${id}`, {headers: {...header}})

const getAddressById = (id) => api.get(`/address/${id}`, {headers: {...header}})

const test = () => api.get('/',{headers: {...header}})


const findCars = (filter) => api.post('/cars/search',filter)


const apis = {
    test,

    login,

    storeUser,
    getUser,
    setUser,

    findCars,
    getCarById,

    storeCard,
    getCards,
    getCardById,

    getBilletById,

    storeRent,
    getRentById,
    getRents,

    storeRentalCompany,
    getRentalCompanies,
    getRentalCompanyById,

    storePaymentByCard,
    storePaymentByBillet,
    getPaymentById,

    getAddressById
}

export default apis