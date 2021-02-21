import React from 'react'
import { Icon } from 'react-native-elements'

function SearchIcon({ color, size }) {
  return (
    <Icon
      name="search"
      type="material"
      color={color}
      size={size}
    />
  )
}

export default SearchIcon
