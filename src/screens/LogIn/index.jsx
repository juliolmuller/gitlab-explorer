import React, { useState } from 'react'
import constants from 'expo-constants'
import { Image, ScrollView, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { RectButton } from 'react-native-gesture-handler'
import { useAuth } from '../../hooks'
import logo from '../../images/logo.png'
import styles from './styles'

const defaultUsername = constants.manifest.extra.GITLAB_USERNAME ?? ''
const defaultPassword = constants.manifest.extra.GITLAB_PASSWORD ?? ''

function LogIn() {
  const { signIn } = useAuth()
  const [message, setMessage] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [username, setUsername] = useState(defaultUsername)
  const [password, setPassword] = useState(defaultPassword)

  async function handlePress() {
    try {
      setLoading(true)
      await signIn(username, password)
    } catch (error) {
      console.warn(error)
      setMessage(error.message)
      setLoading(false)
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Image
        style={styles.logo}
        source={logo}
      />

      <View style={styles.form}>
        <Input
          style={styles.input}
          labelStyle={styles.label}
          leftIconContainerStyle={styles.inputIcon}
          leftIcon={{ name: 'person', type: 'material' }}
          // keyboardType="email-address"
          // autoCompleteType="email"
          autoCapitalize="none"
          label="Usuário do GitLab:"
          onChangeText={setUsername}
          value={username}
        />
        <Input
          style={styles.input}
          labelStyle={styles.label}
          leftIconContainerStyle={styles.inputIcon}
          leftIcon={{ name: 'vpn-key', type: 'material' }}
          autoCompleteType="password"
          label="Senha de acesso:"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <If condition={message}>
          <Text style={styles.error}>{message}</Text>
        </If>

        <View style={styles.btnWrapper}>
          <Button
            buttonStyle={styles.btn}
            containerStyle={styles.btnContainer}
            title="Entrar"
            raised={!isLoading}
            loading={isLoading}
            onPress={handlePress}
            ViewComponent={RectButton}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default LogIn
