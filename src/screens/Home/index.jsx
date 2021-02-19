import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import gitlab from '../../services/gitlab-api-client'
import styles from './styles'

function Home() {
  const [repos, setRepos] = useState([])
  const [isLoading, setLoading] = useState(true)

  async function fetchRepos() {
    const reposPromise = gitlab.getRepositories()

    setLoading(true)
    setRepos(await reposPromise)
    setLoading(false)
  }

  useEffect(() => {
    fetchRepos()
  }, [])

  return (
    <View style={styles.wrapper}>
      <Choose>
        <When condition={isLoading}>
          <Text>Loading...</Text>
        </When>
        <Otherwise>
          <For each="repo" of={repos}>
            <Text key={repo.id}>{repo.name}</Text>
          </For>
        </Otherwise>
      </Choose>
    </View>
  )
}

export default Home
