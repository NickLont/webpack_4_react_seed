import axios from './axios'

export const fetchUser = async (user) => {
  let res
  try {
    res = { name: 'Nick' }
    // res = await axios.get('/user', user)
  } catch (e) {
    console.log('axios error: ', e)
    throw e
  }
  return res
}
