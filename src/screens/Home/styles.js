import { StyleSheet } from 'react-native'
import { color, font } from '../../theme'

export default StyleSheet.create({
  fallbackText: {
    fontFamily: font.regular,
  },
  fallbackWrapper: {
    alignItems: 'center',
    height: 180,
    justifyContent: 'center',
  },
  screen: {
    backgroundColor: color.whitish,
    height: '100%',
  },
  searchInput: {
    color: '#000',
    fontFamily: font.regular,
    fontSize: 16,
  },
})
