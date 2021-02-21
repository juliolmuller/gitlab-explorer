import React from 'react'
import { Icon } from 'react-native-elements'

function MainIcon({ color, focused, size }) {
  return (
    <Icon
      name="saved-search"
      type="material"
      color={focused ? '#2089dc' : color}
      size={size}
    />
  )
}

export default MainIcon
