import axios from 'axios'

let qs = require('qs')

export function getData() {
  return axios.get('/home')
}
