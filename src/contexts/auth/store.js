// import http from '../../services/http'

export const state = {
  isAuthLoaded: false,
  isAuthenticated: false,
  accessToken: null,
}

export const actions = {
  async retrieveToken({ utils }) {
    const token = await utils.getToken()

    return {
      isAuthLoaded: true,
      isAuthenticated: !!token,
      accessToken: token,
    }
  },
  async signIn({ utils }, username, password) {
    const token = username + password
    await utils.setToken(token)

    return {
      isAuthenticated: !!token,
      accessToken: token,
    }
  },
  signOut({ utils }) {
    utils.destroyToken()

    return {
      isAuthenticated: false,
      accessToken: null,
    }
  },
}
