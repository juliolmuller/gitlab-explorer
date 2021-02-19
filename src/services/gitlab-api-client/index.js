import http from './http-client'
import endpoints from './endpoints'

const AUTHORIZATION_HEADER = 'Authorization'

class GitLabApi {
  constructor(httpClient) {
    this.http = httpClient
  }

  setToken(token) {
    this.http.defaults.headers.common[AUTHORIZATION_HEADER] = `Bearer ${token}`
  }

  async signIn(username, password) {
    const endPoint = endpoints.auth
    const data = { grant_type: 'password', username, password }
    const response = await this.http.post(endPoint, data)
    const token = response.data.access_token

    this.setToken(token)

    return token
  }
}

export default new GitLabApi(http)
