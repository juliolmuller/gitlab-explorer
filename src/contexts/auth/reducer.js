import generateGenericReducer from '../generateReducer'
import * as mutations from './mutations'

export function generateReducer(context) {
  return generateGenericReducer(context, mutations)
}
