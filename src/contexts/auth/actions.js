import generateGenericActions from '../generateActions'
import { SIGN_IN, SIGN_OUT, REFRESH_TOKEN } from './mutations'

const actionsMap = {
  signIn: SIGN_IN,
  signOut: SIGN_OUT,
  refreshToken: REFRESH_TOKEN,
}

export function generateActions(dispatcher) {
  return generateGenericActions(actionsMap, dispatcher)
}
