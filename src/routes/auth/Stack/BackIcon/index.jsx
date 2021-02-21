import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import styles from './styles'

function BackIcon() {
  const { goBack } = useNavigation()

  return (
    <Icon
      name="arrow-back"
      type="material"
      onPress={goBack}
      iconStyle={styles.icon}
    />
  )
}

export default BackIcon
