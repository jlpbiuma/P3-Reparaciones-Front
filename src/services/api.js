import axios from 'axios'

const API = axios.create({
  baseURL: 'https://p2-reparaciones-production.up.railway.app/api'
})

async function signup(newUser) {
  const { data: { token, email, userId } } = await API.post('/auth/signup', newUser)
  localStorage.setItem('token', token)
  localStorage.setItem('email', email)
  localStorage.setItem('userId', userId)
  return token;
}

async function login(newUser) {
  const { data: { token, email, userId } } = await API.post('/auth/login', newUser)
  localStorage.setItem('token', token)
  localStorage.setItem('email', email)
  localStorage.setItem('userId', userId)
  return token;
}

async function getHistoryRepair() {
  const { data } = await API.get(`/users/${userId}/historyrepair`)
  return data;
}

async function postNewRepair(newRepair) {
  const userId = localStorage.getItem("userId");
  newRepair.client = userId;
  const { data } = await API.post('/repairs/', newRepair)
  return data;
}

async function getUserProfile() {
  const userId = localStorage.getItem("userId");
  const { data } = await API.get(`/users/client/${userId}`)
  return data;
}

async function putUserProfile() {
  const userId = localStorage.getItem("userId");
  const {data} = await API.put(`/users/client/${userId}`)
  return data;
}

async function deleteUserprofile() {
  const userId = localStorage.getItem("userId");
  const {data} = await API.delete(`/users/client/${userId}`)
  return data;
}

export default {
  signup,
  login,
  getHistoryRepair,
  postNewRepair,
  getUserProfile,
  putUserProfile,
  deleteUserprofile
}