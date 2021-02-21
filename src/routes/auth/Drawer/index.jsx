import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabs from '../BottomTabs'
import LogOut from '../../../screens/LogOut'
import options from './options'

const { Navigator, Screen } = createDrawerNavigator()

function Drawer() {
  return (
    <Navigator drawerPosition='right'>
      <Screen
        name="main"
        component={BottomTabs}
        options={options.screen.main}
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
