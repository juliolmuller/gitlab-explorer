import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Stack from '../Stack'
import LogOut from '../../../screens/LogOut'
import options from './options'

const { Navigator, Screen } = createDrawerNavigator()

function Drawer() {
  return (
    <Navigator {...options.navigator}>
      <Screen
        name="explorer"
        component={Stack}
        initialParams={{ favorites: false }}
        options={options.screen.explorer}
      />
      <Screen
        name="favorites"
        component={Stack}
        initialParams={{ favorites: true }}
        options={options.screen.favorites}
      />
      <Screen
        name="logout"
        component={LogOut}
        options={options.screen.logout}
      />
    </Navigator>
  )
}

export default Drawer
