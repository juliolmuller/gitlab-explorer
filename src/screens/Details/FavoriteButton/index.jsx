import React from 'react'
import { Icon } from 'react-native-elements'
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles'

function FavoriteButton({ isFavorite, onPress }) {
  return (
    <RectButton style={styles.favoriteBtn} onPress={onPress}>
      <Icon
        name={isFavorite ? 'favorite' : 'favorite-border'}
        type="material"
        color="#fff"
        size={36}
      />
    </RectButton>
  )
}

export default FavoriteButton
