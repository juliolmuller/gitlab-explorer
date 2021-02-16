import { useReducer } from 'react'

function reducerFunction(prevState, newState) {
  return { ...prevState, ...newState }
}

function generateDispatcher(commit, state, actions, utils) {
  return async (actionName, ...payload) => {
    try {
      const context = { state: { ...state }, utils: { ...utils } }
      const newState = await actions[actionName](context, ...payload)

      commit(newState)
    } catch (error) {
      if (/.* is not a function$/.test(error.message)) {
        throw new Error(`Action "${actionName}" does not exist (${error.message}).`)
      }

      throw error
    }
  }
}

function maskActions(actions, dispatch) {
  const actionKeys = Object.keys(actions)
  const actionsEntries = actionKeys.map(
    (name) => [name, (...payload) => {
      return dispatch(name, ...payload)
    }],
  )

  return Object.fromEntries(actionsEntries)
}

export function useStore(state = {}, actions = {}, utils = {}) {
  const [currentState, commit] = useReducer(reducerFunction, state)
  const dispatch = generateDispatcher(commit, currentState, actions, utils)
  const maskedActions = maskActions(actions, dispatch)

  return {
    ...currentState,
    ...maskedActions,
  }
}
