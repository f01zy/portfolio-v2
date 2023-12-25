import { API_URL } from '@/config'
import axios from 'axios'

const $api = axios.create({
  withCredentials: true,
  baseURL: `${API_URL}/api`
})

export default $api