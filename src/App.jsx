import React, { useEffect, useState } from 'react'
import { Archivo_400Regular as Archivo400, Archivo_700Bold as Archivo700 } from '@expo-google-fonts/archivo'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import ContextProvider from './contexts'
import Routes from './routes'

function App() {
  const [authLoaded, setAuthLoaded] = useState(false)
  const [fontsLoaded] = useFonts({ Archivo400, Archivo700 })
  const isLoading = !authLoaded || !fontsLoaded

  function handleAuthLoaded() {
    setAuthLoaded(true)
  }

  useEffect(() => {
    if (isLoading) {
      SplashScreen.preventAutoHideAsync()
    } else {
      SplashScreen.hideAsync()
    }
  }, [isLoading])

  return (
    <ContextProvider>
      <Routes appLoading={isLoading} onAuthLoad={handleAuthLoaded} />
    </ContextProvider>
  )
}

export default App
