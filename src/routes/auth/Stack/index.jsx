import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../../screens/Home'
import options from './options'

const { Navigator, Screen } = createStackNavigator()

function Stack({ favorites }) {
  return (
    <Navigator screenOptions={options.navigatorScreens}>
      <Screen
        name="main"
        component={Home}
        initialParams={{ favorites }}
        options={options.screen.home}
      />
    </Navigator>
  )
}

export default Stack
