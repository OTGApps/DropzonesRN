import * as React from 'react'
import { inject, observer } from 'mobx-react'
import {
  View,
  FlatList,
  ActivityIndicator,
  Dimensions,
  Keyboard,
  TouchableOpacity,
  Text,
} from 'react-native'
import { map, addIndex } from 'ramda'
import { debounce } from 'lodash'
import SearchInput from '../components/SearchInput'
import ListItem from '../components/ListItem'
import SearchStore from '../stores'

export interface HomeScreenProps {
  title: 'Spotify songs'
  value: string
  placeholder?: string
  onChangeText(): void
  query: string
  searchStore: SearchStore
  loading: boolean
  getTracks(): void
}

@inject('searchStore')
@observer
export class HomeScreen extends React.Component<HomeScreenProps, {}> {
  debounceInput = debounce(query => {
    this.props.searchStore.getTrackList()
    Keyboard.dismiss()
  }, 500)

  onTextInputChange = (value: string) => {
    this.props.searchStore.setQuery(value)
    this.debounceInput(value)
  }

  render() {
    const { query, getTracks, loading } = this.props.searchStore
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            width: '50%',
            height: 50,
            alignSelf: 'center',
            backgroundColor: 'red',
            marginTop: 20,
            justifyContent: 'center',
          }}
          onPress={() => this.props.navigation.navigate('second')}
        >
          <Text style={{ alignSelf: 'center' }}>Press for Second Screen</Text>
        </TouchableOpacity>
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
          placeholder='Search by artist name...'
        />
        <ActivityIndicator animating={loading} size='large' />
        <FlatList
          style={{ height: Dimensions.get('window').height - 140 }}
          data={getTracks}
          keyExtractor={(_, i) => i}
          renderItem={({ item }) => <ListItem imageUrl={item.url} songName={item.trackName} />}
        />
      </View>
    )
  }
}
