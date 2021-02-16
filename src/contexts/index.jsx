import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AuthContext, AuthProvider } from './auth'

function ContextProvider({ children }) {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </SafeAreaProvider>
  )
}

export {
  AuthContext,
  ContextProvider as default,
}
