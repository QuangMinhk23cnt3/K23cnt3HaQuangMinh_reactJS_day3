
import axios from 'axios'

const hqmAPI_URL = 'https://67da74ec35c87309f52c9812.mockapi.io/k23cnt1_haquangminh/hqm_users';

export const getUsers = () => axios.get(hqmAPI_URL);
export const getUser = (id) => axios.get(`${hqmAPI_URL}/${id}`);
export const createUser = (user) => axios.post(hqmAPI_URL, user);
export const updateUser = (id, user) => axios.put(`${hqmAPI_URL}/${id}`, user);
export const deleteUser = (id) => axios.delete(`${hqmAPI_URL}/${id}`);
