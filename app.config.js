import dotenv from 'dotenv'
import project from './package.json'

const config = dotenv.config()

if (config.error) {
  throw config.error
}

export default {
  expo: {
    name: 'GitLab Explorer',
    slug: project.name,
    version: project.version,
    orientation: 'portrait',
    icon: './src/images/icon.png',
    splash: {
      backgroundColor: '#2089dc',
      image: './src/images/splash.png',
      resizeMode: 'cover',
    },
    extra: {
      ...process.env,
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: [
      '**/*',
    ],
    android: {
      adaptiveIcon: {
        foregroundImage: './src/images/icon.png',
        backgroundColor: '#2089dc',
      },
    },
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: './src/images/icon.png',
    },
  },
}
