import Axios from 'axios'

// create a new instance of axios with a custom config.
const axios = Axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})

export default axios
