import { StyleSheet } from 'react-native'
import { font } from '../../../theme'

export default StyleSheet.create({
  counter: {
    fontFamily: font.bold,
    fontSize: 24,
    marginLeft: 12,
  },
  icon: {
    flexDirection: 'row',
  },
  icons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
})
