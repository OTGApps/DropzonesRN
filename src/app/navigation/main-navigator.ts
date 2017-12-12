import { StackNavigator, NavigationRouteConfig } from 'react-navigation'
import { HomeNavigator } from './home-navigator'

export interface Routes {
  homeStack: NavigationRouteConfig<any>
}

export const routes: Routes = {
  homeStack: { screen: HomeNavigator },
}

export type RouteNames = keyof Routes

export const MainNavigator = StackNavigator(routes, {
  headerMode: 'none',
  mode: 'modal',
  navigationOptions: {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
    },
    header: null,
    gesturesEnabled: false,
  },
  cardStyle: { shadowColor: 'transparent' },
})
