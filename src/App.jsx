import React, { useEffect, useState } from 'react'
import { Archivo_400Regular as Archivo400, Archivo_700Bold as Archivo700 } from '@expo-google-fonts/archivo'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import Routes from './routes'
import ContextProvider from './contexts'
import { useAuth } from './hooks'

function App() {
  const tokenRetrieved = useAuth()
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [fontsLoaded] = useFonts({ Archivo400, Archivo700 })
  const [ctxLoaded, setCtxLoaded] = useState(false)
  const isLoading = !ctxLoaded || !fontsLoaded

  async function initializeCtx() {
    const hasValidToken = await tokenRetrieved

    setAuthenticated(hasValidToken)
    setCtxLoaded(true)
  }

  useEffect(() => {
    initializeCtx()
  }, [])

  return (
    <Choose>
      <When condition={isLoading}>
        <AppLoading />
      </When>
      <Otherwise>
        <ContextProvider auth={{ isAuthenticated }}>
          <Routes />
        </ContextProvider>
      </Otherwise>
    </Choose>
  )
}

export default App
