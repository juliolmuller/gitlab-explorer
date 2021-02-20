import React from 'react'
import { Image, View } from 'react-native'
import loading from '../../images/loading.gif'
import styles from './styles'

function Suspense({ isLoading, children }) {
  return (
    <Choose>
      <When condition={isLoading}>
        <View style={styles.wrapper}>
          <Image
            style={styles.spinner}
            source={loading}
          />
        </View>
      </When>
      <Otherwise>
        {children}
      </Otherwise>
    </Choose>
  )
}

export default Suspense
