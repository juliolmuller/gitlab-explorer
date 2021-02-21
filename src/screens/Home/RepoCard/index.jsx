import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { RectButton } from 'react-native-gesture-handler'
import { buildAvatarUrl, truncate } from '../../../utils'
import styles from './styles'

function RepoCard({ repo }) {
  const { navigate } = useNavigation()
  const avatar = buildAvatarUrl(repo.namespace.avatar_url)

  function handlePress() {
    navigate('details', {
      repoId: repo.id,
    })
  }

  return (
    <RectButton style={styles.card} onPress={handlePress}>
      <Choose>
        <When condition={avatar}>
          <Image style={styles.avatar} source={{ uri: avatar }} />
        </When>
        <Otherwise>
          <View style={styles.avatar}>
            <Text style={styles.avatarFallback}>
              {repo.name[0]}
            </Text>
          </View>
        </Otherwise>
      </Choose>

      <View style={styles.body}>
        <Text style={styles.title}>
          {repo.name}
        </Text>

        <View style={styles.row}>
          <Text style={styles.owner}>
            {truncate(repo.namespace.name)}
          </Text>
          <Icon name="star-rate" type="material" size={20} />
          <Text style={styles.counter}>{repo.star_count}</Text>
          <Icon name="git-branch" type="feather" size={20} />
          <Text style={styles.counter}>{repo.forks_count}</Text>
        </View>
      </View>
    </RectButton>
  )
}

export default RepoCard
