import React, { Component } from 'react'
import { FlatList, View, Dimensions, Keyboard, ActivityIndicator } from 'react-native'
import { observer, Provider } from 'mobx-react'
import stores from './stores'
import { MainNavigator } from './navigation/main-navigator'

@observer
export default class App extends Component<{}, {}> {
  render() {
    return (
      <Provider {...stores}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
