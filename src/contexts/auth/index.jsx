import React, { createContext, useEffect } from 'react'
import useAsyncToken from './useAsyncToken'
import { useStore } from '../storeManager'
import { state, actions } from './store'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const storedToken = useAsyncToken()
  const utils = { ...storedToken }
  const { retrieveToken, ...store } = useStore(state, actions, utils)

  useEffect(() => {
    retrieveToken()
  }, [])

  return (
    <AuthContext.Provider value={store}>
      {children}
    </AuthContext.Provider>
  )
}
