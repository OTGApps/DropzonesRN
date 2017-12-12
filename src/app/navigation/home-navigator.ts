import { StackNavigator, NavigationRouteConfig } from 'react-navigation'
import { HomeScreen } from '../screens/home-screen'
import { SecondScreen } from '../screens/second-screen'
export interface Routes {
  home: NavigationRouteConfig<any>
  second: NavigationRouteConfig<any>
}

export const routes: Routes = {
  home: {
    screen: HomeScreen,
  },
  second: {
    screen: SecondScreen,
  },
}

export type RouteNames = keyof Routes

export const HomeNavigator = StackNavigator(routes, {
  mode: 'card',
  cardStyle: {
    elevation: 0, //remove shadow on Android
    shadowOpacity: 0, //remove shadow on iOS
  },
})
