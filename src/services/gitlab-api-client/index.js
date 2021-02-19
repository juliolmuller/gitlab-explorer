import http from './http-client'
import * as endpoints from './endpoints'

const AUTHORIZATION_HEADER = 'Authorization'

class GitLabApi {
  constructor(httpClient) {
    this.http = httpClient
  }

  setToken(token) {
    this.http.defaults.headers.common[AUTHORIZATION_HEADER] = `Bearer ${token}`
  }

  async signIn(username, password) {
    const uri = endpoints.auth
    const data = { grant_type: 'password', username, password }
    const response = await this.http.post(uri, data)
    const token = response.data.access_token

    this.setToken(token)

    return token
  }

  async getRepositories(search = '') {
    const uri = endpoints.projects
    const response = await this.http.get(uri, {
      params: {
        order_by: 'last_activity_at',
        simple: true,
        search,
      },
    })

    return response.data
  }

  async getRepositoryDetails(id) {
    const uri = `${endpoints.projects}/${id}`
    const response = await this.http.get(uri)

    return response.data
  }
}

export default new GitLabApi(http)
