import React from 'react'
import { Text } from 'react-native'

const styles = {
  fontFamily: 'Archivo700',
  fontSize: 16,
  textTransform: 'uppercase',
}

function Header({ children }) {
  return (
    <Text style={styles}>
      {children}
    </Text>
  )
}

export default Header
