import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import styles from './styles'

function MenuIcon() {
  const { toggleDrawer } = useNavigation()

  return (
    <Icon
      name="menu"
      type="material"
      onPress={toggleDrawer}
      iconStyle={styles.icon}
    />
  )
}

export default MenuIcon
