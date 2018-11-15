import axios from './axios'

export const fetchUser = () => {
  axios.get('/user')
}
