/* eslint-disable react/display-name */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HeaderTitle from './HeaderTitle'
// import BackIcon from './BackIcon'
import MenuIcon from './MenuIcon'
import HomeIcon from './HomeIcon'
import SignOutIcon from './SignOutIcon'
import Home from '../../screens/Home'
import LogOut from '../../screens/LogOut'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: HeaderTitle,
      }}
    >
      <Stack.Screen
        component={Home}
        name="Home"
        options={{
          title: 'Explorador',
          headerRight: MenuIcon,
        }}
      />
    </Stack.Navigator>
  )
}

function AuthRoutes() {
  return (
    <Drawer.Navigator
      drawerPosition='right'
    >
      <Drawer.Screen
        component={AppStack}
        name="Explorer"
        options={{
          title: 'Explorador',
          drawerIcon: HomeIcon,
        }}
      />
      <Drawer.Screen
        component={LogOut}
        name="LogOut"
        options={{
          title: 'Desconectar',
          drawerIcon: SignOutIcon,
        }}
      />
    </Drawer.Navigator>
  )
}

export default AuthRoutes
