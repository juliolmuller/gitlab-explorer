import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AuthContext, AuthProvider } from './auth'

export {
  AuthContext,
}

export default function ContextProvider({ children, auth = {} }) {
  return (
    <SafeAreaProvider>
      <AuthProvider value={auth}>
        {children}
      </AuthProvider>
    </SafeAreaProvider>
  )
}
