import axios from 'axios'

export const iSomesoApi = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
