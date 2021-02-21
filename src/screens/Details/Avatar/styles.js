import { StyleSheet } from 'react-native'
import { color, font } from '../../../theme'

export default StyleSheet.create({
  avatar: {
    alignItems: 'center',
    backgroundColor: color.secondaryLight,
    borderRadius: 60,
    height: 120,
    justifyContent: 'center',
    resizeMode: 'cover',
    width: 120,
  },
  avatarFallback: {
    color: '#fff',
    fontFamily: font.bold,
    fontSize: 40,
    textTransform: 'uppercase',
  },
  avatarWrapper: {
    alignItems: 'center',
    height: 120,
    justifyContent: 'center',
    marginVertical: 20,
  },
})
