import constants from 'expo-constants'
import axios from 'axios'

const baseURL = constants.manifest.extra.GITLAB_API_URL
const http = axios.create({ baseURL })

export default http
