import SearchIcon from './SearchIcon'
import FavoritesIcon from './FavoritesIcon'

export default {
  navigatorTabBar: {
    style: {
      elevation: 10,
      height: 64,
      shadowOpacity: 0,
    },
    tabStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconStyle: {
      flexGrow: 0,
      height: 20,
      width: 20,
    },
    labelStyle: {
      marginLeft: 24,
      fontFamily: 'Archivo700',
      fontSize: 16,
    },
    inactiveBackgroundColor: '#fafafc',
    activeBackgroundColor: '#2089dc',
    inactiveTintColor: '#2089dc',
    activeTintColor: '#fff',
  },
  screen: {
    explore: {
      tabBarLabel: 'Explorar',
      tabBarIcon: SearchIcon,
    },
    favorites: {
      tabBarLabel: 'Favoritos',
      tabBarIcon: FavoritesIcon,
    },
  },
}
