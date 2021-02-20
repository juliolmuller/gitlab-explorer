import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import Suspense from '../../components/Suspense'
import gitlab from '../../services/gitlab-api-client'
import styles from './styles'

function Home() {
  const [repos, setRepos] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [searchText, setSearchText] = useState('')

  async function fetchRepos() {
    const reposPromise = gitlab.getRepositories()

    setLoading(true)
    setRepos(await reposPromise)
    setLoading(false)
  }

  function handleSearch(value) {
    setSearchText(value)
    console.log(`"${value}"`)
  }

  useEffect(() => {
    fetchRepos()
  }, [])

  return (
    <View style={styles.screen}>
      <SearchBar
        lightTheme round
        inputStyle={styles.searchInput}
        placeholder="Search for repos..."
        onChangeText={handleSearch}
        value={searchText}
      />

      <Suspense isLoading={isLoading}>
        <ScrollView contentContainerStyle={styles.wrapper}>
          <For each="repo" of={repos}>
            <Text key={repo.id}>{repo.name}</Text>
          </For>
        </ScrollView>
      </Suspense>
    </View>
  )
}

export default Home
