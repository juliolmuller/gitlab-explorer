import React from 'react'
import { Icon } from 'react-native-elements'

function FavoritesIcon({ color, size }) {
  return (
    <Icon
      name="favorite-border"
      type="material"
      color={color}
      size={size}
    />
  )
}

export default FavoritesIcon
