import axios from 'axios'

const API = axios.create({
  baseURL: 'https://p2-reparaciones-production.up.railway.app/api'
})

async function signup(newUser) {
  const { data: { token, email } } = await API.post('/auth/signup', newUser)
  localStorage.setItem('token', token)
  localStorage.setItem('email', email)
  return token
}

async function login(newUser) {
  const { data: { token, email } } = await API.post('/auth/login', newUser)
  localStorage.setItem('token', token)
  localStorage.setItem('email', email)
  return token
}

export default {
  signup,
  login
}
