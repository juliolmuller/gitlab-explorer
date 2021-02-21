import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Stack from '../Stack'
import options from './options'

const { Navigator, Screen } = createBottomTabNavigator()

function BottomTabs() {
  return (
    <Navigator tabBarOptions={options.navigatorTabBar}>
      <Screen
        name="explore"
        component={Stack}
        initialParams={{ favorites: false }}
        options={options.screen.explore}
      />
      <Screen
        name="favorites"
        component={Stack}
        initialParams={{ favorites: true }}
        options={options.screen.favorites}
      />
    </Navigator>
  )
}

export default BottomTabs
