import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

const styles = {
  marginHorizontal: 12,
}

function BackIcon() {
  const { goBack } = useNavigation()

  return (
    <Icon
      name="arrow-back"
      type="material"
      onPress={goBack}
      iconStyle={styles}
    />
  )
}

export default BackIcon
