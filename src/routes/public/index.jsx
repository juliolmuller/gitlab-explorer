import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LogIn from '../../screens/LogIn'

const Stack = createStackNavigator()

function PublicRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={LogIn} name="LogIn" />
    </Stack.Navigator>
  )
}

export default PublicRoutes
