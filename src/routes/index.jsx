import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import PublicRoutes from './public'
import AuthRoutes from './auth'
import { useAuth } from '../hooks'

function Routes() {
  const { isAuthenticated } = useAuth()

  return (
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
  )
}

export default Routes
