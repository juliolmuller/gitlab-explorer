import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { ScrollView, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import RepoCard from './RepoCard'
import Suspense from '../../components/Suspense'
import gitlab from '../../services/gitlab-api-client'
import { useAsyncFavorites, useDebouncedCallback } from '../../hooks'
import styles from './styles'

const DEBOUNCE_TIME = 500

function Home() {
  const { favorites } = useRoute().params
  const { getFavorites } = useAsyncFavorites()
  const [repos, setRepos] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [searchText, setSearchText] = useState('')

  const fetchRepos = useDebouncedCallback(async (search) => {
    const reposPromise = gitlab.getRepositories(search)

    setLoading(true)
    setRepos(await reposPromise)
    setLoading(false)
  }, DEBOUNCE_TIME)

  async function retrieveFavorites() {
    setLoading(true)
    setRepos(await getFavorites())
    setLoading(false)
  }

  useEffect(() => {
    favorites
      ? retrieveFavorites()
      : fetchRepos(searchText)
  }, [searchText])

  return (
    <View style={styles.screen}>
      <If condition={!favorites}>
        <SearchBar
          lightTheme round
          inputStyle={styles.searchInput}
          placeholder="Search for repos..."
          onChangeText={setSearchText}
          value={searchText}
          autoCapitalize="none"
        />
      </If>

      <Suspense isLoading={isLoading}>
          <Choose>
            <When condition={repos.length}>
              <ScrollView style={styles.scrollableWrapper}>
                <For each="repo" of={repos}>
                  <RepoCard key={repo.id} repo={repo} />
                </For>
              </ScrollView>
            </When>
            <Otherwise>
              <View style={styles.fallbackWrapper}>
                <Text style={styles.fallbackText}>
                  Nenhum repositório encontrado 🤔
                </Text>
              </View>
            </Otherwise>
          </Choose>
      </Suspense>
    </View>
  )
}

export default Home
