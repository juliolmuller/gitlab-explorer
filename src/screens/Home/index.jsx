import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { ScrollView, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements'
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
    console.log('Fetching: ', (await reposPromise)[0])
  }, DEBOUNCE_TIME)

  async function retrieveFavorites() {
    setLoading(true)
    setRepos(await getFavorites())
    setLoading(false)
    console.log('Fetching: ', (await getFavorites())[0])
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
        <ScrollView contentContainerStyle={styles.wrapper}>
          <Choose>
            <When condition={repos.length}>
              <For each="repo" of={repos}>
                <Text key={repo.id}>{repo.name}</Text>
              </For>
            </When>
            <Otherwise>
              <Text>Nenhum repositório encontrado</Text>
            </Otherwise>
          </Choose>
        </ScrollView>
      </Suspense>
    </View>
  )
}

export default Home
