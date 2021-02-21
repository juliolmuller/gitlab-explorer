import { useAsyncStorage } from '@react-native-async-storage/async-storage'

const STORAGE_KEY = '@gitlab-explorer::favorites'

function useAsyncFavorites() {
  const { getItem, setItem } = useAsyncStorage(STORAGE_KEY)

  async function getFavorites() {
    return await getItem() ?? []
  }

  async function addFavorite(newFavorite) {
    const favorites = await getFavorites()

    favorites.push(newFavorite)
    await setItem(favorites)
  }

  async function removeFavorite(favoriteId) {
    const oldFavorites = await getFavorites()
    const newFavorites = oldFavorites.filter(
      ({ id }) => id === favoriteId,
    )

    await setItem(newFavorites)
  }

  return {
    getFavorites,
    addFavorite,
    removeFavorite,
  }
}

export default useAsyncFavorites
