import { useAsyncStorage } from '@react-native-async-storage/async-storage'

const STORAGE_KEY = '@gitlab-explorer::access_token'

function useAsyncToken() {
  const { getItem, setItem, removeItem } = useAsyncStorage(STORAGE_KEY)

  return {
    getToken: getItem,
    setToken: setItem,
    destroyToken: removeItem,
  }
}

export default useAsyncToken
