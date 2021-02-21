import { useAsyncStorage } from '@react-native-async-storage/async-storage'

const STORAGE_KEY = '@gitlab-explorer::favorites'

function useAsyncFavorites() {
  const { getItem, setItem } = useAsyncStorage(STORAGE_KEY)

  function setFavorites(favorites) {
    return setItem(JSON.stringify(favorites))
  }

  async function getFavorites() {
    const favorites = await getItem()

    return JSON.parse(favorites) ?? []
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
    await setFavorites(favorites)
  }

  async function removeFavorite(repoId) {
    const oldFavorites = await getFavorites()
    const newFavorites = oldFavorites.filter(
      ({ id }) => id === repoId,
    )

    await setFavorites(newFavorites)
  }

  return {
    getFavorites,
    findFavorite,
    addFavorite,
    removeFavorite,
  }
}

export default useAsyncFavorites
