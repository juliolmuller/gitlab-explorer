import React, { useCallback, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import PublicRoutes from './public'
import AuthRoutes from './auth'
import { useAuth } from '../hooks'

function Routes({ appLoading, onAuthLoad }) {
  const { isAuthLoaded, isAuthenticated } = useAuth()
  const notifyAuthLoaded = useCallback(onAuthLoad, [])

  useEffect(() => {
    isAuthLoaded && notifyAuthLoaded()
  }, [isAuthLoaded])

  return (
    <If condition={!appLoading}>
      <NavigationContainer>
        <Choose>
          <When condition={isAuthenticated}>
            <AuthRoutes />
          </When>
          <Otherwise>
            <PublicRoutes />
          </Otherwise>
        </Choose>
      </NavigationContainer>
    </If>
  )
}

export default Routes
