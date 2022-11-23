import axios from 'axios'

const API = axios.create({
  baseURL: 'https://p2-reparaciones-production.up.railway.app/api'
})

async function signup(newUser) {
  const response = await API.post('/auth/signup', newUser)
  return response.data;
}

async function login(newUser) {
  const response = await (await API.post('/auth/login', newUser));
  return response.data;
}

async function getAllUnasignedRepairs(token) {
  const response = await API.get(`/repairs/unasigned`, {headers: {token}})
  console.log(response);
  return response.data;
}

async function getAllUnasignedRepairsByClientId(userId, token) {
  const response = await API.get(`/repairs/unasigned/${userId}`, {headers: { token }})
  return response.data;
}

async function getAllAsignedRepairs(token) {
  const response = await API.get(`/repairs/asigned`, {headers: {token}})
  return response.data;
}

async function getAllAsignedRepairsByUserId(userId, token) {
  const response = await API.get(`/repairs/asigned/${userId}`, {headers: {token}})
  return response.data;
}

async function getAllDoneRepairs(token) {
  const response = await API.get(`/repairs/done`, {headers: {token}})
  return response.data;
}

async function getAllDoneRepairsByUserId(userId, token) {
  const response = await API.get(`/repairs/done/${userId}`, {headers: {token}})
  return response.data;
}

async function putAsignToEmployee(userId, token) {
  const response = await API.put(`/repairs/unasigned/${userId}`, {headers: {token}})
  return response.data;
}

async function postNewRepair(newRepair, token) {
  const response = await API.post('/repairs/', newRepair, {headers: { token }})
  return response.data;
}

async function getUserProfile(userId, token) {
  const response = await API.get(`/users/client/${userId}`, {headers: { token }})
  return response.data;
}

async function putUserProfile(userId, token) {
  const response = await API.put(`/users/client/${userId}`, {headers: { token }})
  return response.data;
}

async function putRepairToDone(repairId, token, repair) {
  const response = await API.put(`/repairs/asigned/${repairId}`, {headers: { token }})
}

async function deleteUserprofile(userId, token) {
  const response = await API.delete(`/users/client/${userId}`, {headers: { token }})
  return response.data;
}

async function deleteRepair(repairId, token) {
  const response = await API.delete(`/repairs/${repairId}`, {headers: { token }})
  return response.data;
}

export default {
  signup,
  login,
  getAllUnasignedRepairs,
  getAllUnasignedRepairsByClientId,
  getAllAsignedRepairs,
  getAllAsignedRepairsByUserId,
  getAllDoneRepairs,
  getAllDoneRepairsByUserId,
  putAsignToEmployee,
  postNewRepair,
  getUserProfile,
  putUserProfile,
  putRepairToDone,
  deleteUserprofile,
  deleteRepair
}