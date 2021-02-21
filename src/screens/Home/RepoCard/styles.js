import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  avatar: {
    alignItems: 'center',
    backgroundColor: 'rgba(252,109,38, 0.5)',
    borderRadius: 8,
    height: 75,
    justifyContent: 'center',
    resizeMode: 'contain',
    width: 75,
  },
  avatarFallback: {
    color: '#fff',
    fontFamily: 'Archivo700',
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
    fontFamily: 'Archivo700',
    marginLeft: 2,
    marginRight: 14,
  },
  owner: {
    flex: 1,
    fontFamily: 'Archivo400',
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Archivo700',
  },
})
