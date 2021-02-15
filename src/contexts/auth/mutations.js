import http from './httpService'
import useAsyncToken from './useAsyncToken'

export const SIGN_IN = async (state, payload) => {
  const { title, body } = payload
  const newNote = await http(title, body)

  return { ...state, notes: [...state.notes, newNote] }
}

export const SIGN_OUT = (state) => {
  useAsyncToken().destroyToken()

  return {
    ...state,
    accessToken: null,
    isAuthenticated: false,
  }
}

export const REFRESH_TOKEN = (state, noteId) => {
  const notes = state.notes.filter((note) => {
    return noteId !== note.id
  })

  return { ...state, notes }
}
