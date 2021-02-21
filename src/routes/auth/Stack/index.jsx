import React from 'react'
import { useRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../../screens/Home'
import options from './options'

const { Navigator, Screen } = createStackNavigator()

function Stack() {
  const { favorites } = useRoute().params

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
