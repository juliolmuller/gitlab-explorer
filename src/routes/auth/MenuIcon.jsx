import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

const styles = {
  marginHorizontal: 12,
}

function MenuIcon() {
  const { toggleDrawer } = useNavigation()

  return (
    <Icon
      name="menu"
      type="material"
      onPress={toggleDrawer}
      iconStyle={styles}
    />
  )
}

export default MenuIcon
