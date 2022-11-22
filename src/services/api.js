import axios from 'axios'

const API = axios.create({
  baseURL: 'https://p2-reparaciones-production.up.railway.app/api'
})

async function signup(newUser) {
  const { data } = await API.post('/auth/signup', newUser)
  return data;
}

async function login(newUser) {
  const response = await (await API.post('/auth/login', newUser));
  return response.data;
}

async function getHistoryRepair(userId, token) {
  const response = await API.get(
    `/users/636d3818dd003405950ca7f7/historyrepair`,
    {headers: { token }}
  )
  return response.data;
}

async function postNewRepair(newRepair, token) {
  const response = await API.post('/repairs/', newRepair, {headers: { token }})
  console.log(response)
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