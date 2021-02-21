import { useAsyncStorage } from '@react-native-async-storage/async-storage'

const STORAGE_KEY = '@gitlab-explorer::favorites'

function useAsyncFavorites() {
  const { getItem, setItem } = useAsyncStorage(STORAGE_KEY)

  async function getFavorites() {
    return await getItem() ?? []
  }

  async function findFavorite(repoId) {
    const favorites = await getFavorites()

    return Boolean(favorites.find(
      ({ id }) => id === repoId,
    ))
  }

  async function addFavorite(repo) {
    const favorites = await getFavorites()

    favorites.push(repo)
    await setItem(favorites)
  }

  async function removeFavorite(repoId) {
    const oldFavorites = await getFavorites()
    const newFavorites = oldFavorites.filter(
      ({ id }) => id === repoId,
    )

    await setItem(newFavorites)
  }

  return {
    getFavorites,
    findFavorite,
    addFavorite,
    removeFavorite,
  }
}

export default useAsyncFavorites
