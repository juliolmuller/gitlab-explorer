import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { Text, View } from 'react-native'
import Suspense from '../../components/Suspense'
import gitlab from '../../services/gitlab-api-client'
import { useAsyncFavorites } from '../../hooks'
import styles from './styles'

function Details() {
  const { repoId } = useRoute().params
  const { getFavorites, addFavorite, removeFavorite } = useAsyncFavorites()
  const [isFavorite, setFavorite] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [repo, setRepo] = useState(null)

  // DEBUG:
  repo && console.log(repo)

  async function fetchRepoDetails() {
    const [repoDetails, savedRepos] = await Promise.all([
      gitlab.getRepositoryDetails(repoId),
      getFavorites(),
    ])

    setLoading(true)
    setFavorite(!!savedRepos.find(({ id }) => id === repoId))
    setRepo(repoDetails)
    setLoading(false)
  }

  useEffect(() => {
    fetchRepoDetails()
  }, [])

  return (
    <Suspense isLoading={isLoading}>
      <View style={styles.screen}>
        <Text>Hello, there #{repoId}!</Text>
      </View>
    </Suspense>
  )
}

export default Details
