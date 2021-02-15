import React from 'react'
import { Icon } from 'react-native-elements'

function SignOutIcon({ color, size }) {
  return (
    <Icon
      name="logout"
      type="material"
      color={color}
      size={size}
    />
  )
}

export default SignOutIcon
