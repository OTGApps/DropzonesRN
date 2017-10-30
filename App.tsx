import React, { Component } from 'react'
import { FlatList, View, Dimensions, Keyboard, ActivityIndicator } from 'react-native'
import { observer, Provider } from 'mobx-react'
// import stores from './stores'
import { debounce } from 'lodash'
import SearchInput from './SearchInput'
import ListItem from './ListItem'
import stores from './stores'
import searchStore from './stores/SearchStore'

export interface AppProps {
  title: 'Spotify songs'
  value: string
  placeholder?: string
  onChangeText(): void
}

@observer
export default class App extends Component<AppProps, {}> {
  debounceInput = debounce(query => {
    stores.searchStore.getTrackList()
    Keyboard.dismiss()
  }, 500)

  onTextInputChange = (value: string) => {
    stores.searchStore.setQuery(value)
    this.debounceInput(value)
  }
  render() {
    const { query } = searchStore
    console.log('SEARCH STORE', searchStore)
    return (
      <Provider {...stores}>
        <View style={{ marginTop: 20 }}>
          <SearchInput
            value={query}
            style={{
              alignSelf: 'center',
              borderColor: 'gray',
              borderWidth: 0.5,
            }}
            autoFocus
            onChangeText={value => {
              this.onTextInputChange(value)
            }}
            placeholder="Search by artist name..."
          />
          <ActivityIndicator animating={stores.searchStore.loading} size="large" />
          <FlatList
            style={{ height: Dimensions.get('window').height - 140 }}
            data={stores.searchStore.getTracks}
            keyExtractor={(_, i) => i}
            renderItem={({ item }) => <ListItem imageUrl={item.url} songName={item.trackName} />}
          />
        </View>
      </Provider>
    )
  }
}
