import { StyleSheet } from 'react-native'
import { color, font } from '../../theme'

export default StyleSheet.create({
  btnContainer: {
    fontFamily: font.regular,
    fontSize: 16,
  },
  btnWrapper: {
    alignItems: 'center',
  },
  description: {
    fontFamily: font.regular,
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 20,
    paddingHorizontal: 12,
  },
  noDescription: {
    fontStyle: 'italic',
    textAlign: 'center',
  },
  screen: {
    backgroundColor: color.whitish,
    height: '100%',
    position: 'relative',
  },
  title: {
    fontFamily: font.bold,
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
})
