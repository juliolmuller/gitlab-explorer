import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

function Header({ children }) {
  return (
    <Text style={styles.title}>
      {children}
    </Text>
  )
}

export default Header
