import axios from 'axios'

const API = axios.create({
  baseURL: 'https://p2-reparaciones-production.up.railway.app/api'
})

async function signup(newUser) {
  const { data: { token, email, userId } } = await API.post('/auth/signup', newUser)
  localStorage.setItem('token', token)
  localStorage.setItem('email', email)
  localStorage.setItem('userId', userId)
  return data;
}

async function login(newUser) {
  debugger;
  const response = await (await API.post('/auth/login', newUser));
  localStorage.setItem('token', response.data.token)
  localStorage.setItem('email', response.data.email)
  localStorage.setItem('userId', response.data.userId)
  return response;
}

async function getHistoryRepair() {
  debugger;
  const userId = localStorage.getItem("userId");
  const response = await API.get(`/users/${userId}/historyrepair`)
  return response.data;
}

async function postNewRepair(newRepair) {
  const userId = localStorage.getItem("userId");
  newRepair.client = userId;
  const response = await API.post('/repairs/', newRepair)
  return response.data;
}

async function getUserProfile() {
  const userId = localStorage.getItem("userId");
  const response = await API.get(`/users/client/${userId}`)
  return response.data;
}

async function putUserProfile() {
  const userId = localStorage.getItem("userId");
  const response = await API.put(`/users/client/${userId}`)
  return response.data;
}

async function deleteUserprofile() {
  const userId = localStorage.getItem("userId");
  const response = await API.delete(`/users/client/${userId}`)
  return response.data;
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