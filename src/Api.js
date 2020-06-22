
import axios from 'axios'
import {getToken} from './persist'
  


if (process.env.NODE_ENV !== 'production') 
    require('dotenv').config()
 const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const getHeader=()=>{
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
        "Authorization": `Bearer ${getToken()}`
    }
}

const login = (authenticate) => api.post('/authenticate/signin', authenticate)

const storeUser = (user) => api.post('/authenticate/signup', user)
const getUser = () => api.get(`/user`,{headers: getHeader()})
const setUser = (user) => api.put(`/user`, user, {headers:  getHeader()})

const getCarById = (id) => api.get(`/cars/${id}`, {headers:  getHeader()})

const storeRentalCompany = (company) => api.post('/rental-company',company,{headers:  getHeader()})
const getRentalCompanies = () => api.get('/rental-company',{headers:  getHeader()})
const getRentalCompanyById = (id) => api.get(`/rental-company/${id}`,{headers:  getHeader()})

const storeCard = (card) => api.post('/cards',card,{headers:  getHeader()})
const getCards = () => api.get('/cards',{headers:  getHeader()})
const getCardById = (id) => api.get(`/cards/${id}`,{headers:  getHeader()})

const getBilletById = (id) => api.get(`/billets/${id}`,{headers:  getHeader()})

const storeRent = (rent) => api.post('/rents',rent, {headers:  getHeader()})
const getRentById = (id) => api.get(`/rents/${id}`, {headers:  getHeader()})
const getRents = () => api.get(`/rents`, {headers:  getHeader()})

const storePaymentByCard = (payment) => api.post(`/payment/card`, payment, {headers:  getHeader()})
const storePaymentByBillet = (payment) => api.post(`/payment/billet`, payment, {headers:  getHeader()})

const getPaymentById = (id) => api.get(`/payment/${id}`, {headers:  getHeader()})

const getAddressById = (id) => api.get(`/address/${id}`, {headers:  getHeader()})

const test = () => api.get('/',{headers:  getHeader()})


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