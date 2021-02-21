import { StyleSheet } from 'react-native'
import { color, font } from '../../theme'

export default StyleSheet.create({
  btn: {
    backgroundColor: color.secondary,
  },
  btnContainer: {
    textTransform: 'uppercase',
    width: '80%',
  },
  btnWrapper: {
    alignItems: 'center',
    paddingTop: 24,
  },
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  form: {
    width: '90%',
  },
  input: {
    backgroundColor: color.whitishLight,
    color: '#000',
    fontFamily: font.regular,
  },
  inputIcon: {
    backgroundColor: color.whitishLight,
    paddingHorizontal: 10,
  },
  label: {
    color: '#fff',
    fontFamily: font.regular,
    fontSize: 18,
    marginLeft: 4,
  },
  logo: {
    height: '20%',
    marginBottom: 40,
    resizeMode: 'contain',
  },
  screen: {
    alignItems: 'center',
    backgroundColor: color.primary,
    height: '100%',
    justifyContent: 'center',
  },
})
