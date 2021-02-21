import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './styles'

function Stats({ stars = 0, forks = 0 }) {
  return (
    <View style={styles.icons}>
      <View style={styles.icon}>
        <Icon name="star-rate" type="material" size={30} />
        <Text style={styles.counter}>{stars}</Text>
      </View>
      <View style={styles.icon}>
        <Icon name="git-branch" type="feather" size={30} />
        <Text style={styles.counter}>{forks}</Text>
      </View>
    </View>
  )
}

export default Stats
