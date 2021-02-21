import SearchIcon from './SearchIcon'
import FavoritesIcon from './FavoritesIcon'
import SignOutIcon from './SignOutIcon'

export default {
  navigator: {
    initialRouteName: 'explorer',
    backBehavior: 'initialRoute',
    drawerPosition: 'right',
    drawerStyle: {
      backgroundColor: '#fafafc',
    },
    drawerContentOptions: {
      labelStyle: {
        fontFamily: 'Archivo700',
      },
      inactiveBackgroundColor: '#fafafc',
      inactiveTintColor: '#2089dc',
      activeBackgroundColor: 'rgba(32, 137, 220, 0.5)',
      activeTintColor: '#fafafc',
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
