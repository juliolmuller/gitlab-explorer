import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { Linking, ScrollView, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Button, Icon } from 'react-native-elements'
import Suspense from '../../components/Suspense'
import FavoriteButton from './FavoriteButton'
import Avatar from './Avatar'
import Stats from './Stats'
import gitlab from '../../services/gitlab-api-client'
import { useAsyncFavorites } from '../../hooks'
import { buildAvatarUrl } from '../../utils'
import styles from './styles'

function Details() {
  const { repoId } = useRoute().params
  const { findFavorite, addFavorite, removeFavorite } = useAsyncFavorites()
  const [isFavorite, setFavorite] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [repo, setRepo] = useState(null)
  const avatar = buildAvatarUrl(repo?.namespace?.avatar_url)

  async function fetchRepoDetails() {
    const favoriteFoundPromise = findFavorite(repoId)
    const repoDetailsPromise = gitlab.getRepositoryDetails(repoId)

    setLoading(true)
    setFavorite(await favoriteFoundPromise)
    setRepo(await repoDetailsPromise)
    setLoading(false)
    console.log(await repoDetailsPromise) // DEBUG:
  }

  function toggleFavorite() {
    if (isFavorite) {
      removeFavorite(repoId)
      setFavorite(false)
    } else {
      addFavorite(repo)
      setFavorite(true)
    }
  }

  useEffect(() => {
    fetchRepoDetails()
  }, [])

  return (
    <Suspense isLoading={isLoading}>
      <ScrollView contentContainerStyle={styles.screen}>
        <FavoriteButton isFavorite={isFavorite} onPress={toggleFavorite} />
        <Avatar uri={avatar} fallbackText={repo?.name} />
        <Text style={styles.title}>{repo?.name}</Text>
        <Stats stars={repo?.star_count} forks={repo?.forks_count} />

        <Choose>
          <When condition={repo?.description}>
            <Text style={styles.description}>
              {repo?.description}
            </Text>
          </When>
          <Otherwise>
            <Text style={[styles.noDescription, styles.description]}>
              ~ sem descrição ~
            </Text>
          </Otherwise>
        </Choose>

        <View style={styles.btnWrapper}>
          <Button
            title="Ver projeto no GitLab"
            onPress={() => Linking.openURL(repo.web_url)}
            ViewComponent={RectButton}
          />
        </View>
      </ScrollView>
    </Suspense>
  )
}

export default Details
