import React, { createContext, useReducer } from 'react'
import { generateReducer } from './reducer'
import { generateActions } from './actions'
import useAsyncToken from './useAsyncToken'

async function retrieveToken() {
  const { token } = useAsyncToken()

  return Boolean(await token)
}

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  error: null,
}

export const AuthContext = createContext(retrieveToken())

export function AuthProvider({ value, children }) {
  const [state, dispatch] = useReducer(generateReducer(AuthContext), {
    ...initialState,
    ...value,
  })

  return (
    <AuthContext.Provider value={{ ...state, ...generateActions(dispatch) }}>
      {children}
    </AuthContext.Provider>
  )
}
