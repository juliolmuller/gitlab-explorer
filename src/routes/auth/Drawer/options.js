import SearchIcon from './SearchIcon'
import FavoritesIcon from './FavoritesIcon'
import SignOutIcon from './SignOutIcon'
import { color, font } from '../../../theme'

export default {
  navigator: {
    initialRouteName: 'explorer',
    backBehavior: 'initialRoute',
    drawerPosition: 'right',
    drawerStyle: {
      backgroundColor: color.whitishLight,
    },
    drawerContentOptions: {
      labelStyle: {
        fontFamily: font.bold,
      },
      inactiveBackgroundColor: color.whitishLight,
      inactiveTintColor: color.primary,
      activeBackgroundColor: color.primaryLight,
      activeTintColor: color.whitishLight,
    },
  },
  screen: {
    explorer: {
      title: 'Explorador',
      drawerIcon: SearchIcon,
    },
    favorites: {
      title: 'Favoritos',
      drawerIcon: FavoritesIcon,
    },
    logout: {
      title: 'Sair',
      drawerIcon: SignOutIcon,
    },
  },
}
