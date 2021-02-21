import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

function Avatar({ uri, fallbackText = '?' }) {
  return (
    <View style={styles.avatarWrapper}>
      <Choose>
        <When condition={uri}>
          <Image style={styles.avatar} source={{ uri }} />
        </When>
        <Otherwise>
          <View style={styles.avatar}>
            <Text style={styles.avatarFallback}>
              {fallbackText[0]}
            </Text>
          </View>
        </Otherwise>
      </Choose>
    </View>
  )
}

export default Avatar
