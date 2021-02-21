import constants from 'expo-constants'

const BASE_URL = constants.manifest.extra.GITLAB_API_URL

export function buildAvatarUrl(avatar) {
  if (String(avatar).startsWith('/')) {
    return BASE_URL + avatar
  }

  return avatar
}

export function truncate(text) {
  const MAX_LENGTH = 15

  return text.length > MAX_LENGTH
    ? text.substring(0, MAX_LENGTH).trim().concat('...')
    : text
}
