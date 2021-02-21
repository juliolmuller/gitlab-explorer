import { StyleSheet } from 'react-native'
import { color, font } from '../../../theme'

export default StyleSheet.create({
  avatar: {
    alignItems: 'center',
    backgroundColor: color.secondaryLight,
    borderRadius: 8,
    height: 75,
    justifyContent: 'center',
    resizeMode: 'cover',
    width: 75,
  },
  avatarFallback: {
    color: '#fff',
    fontFamily: font.bold,
    fontSize: 28,
    textTransform: 'uppercase',
  },
  body: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 4,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 10,
    flexDirection: 'row',
    margin: 6,
    padding: 4,
  },
  counter: {
    fontFamily: font.bold,
    marginLeft: 2,
    marginRight: 14,
  },
  owner: {
    flex: 1,
    fontFamily: font.regular,
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: font.bold,
  },
})
