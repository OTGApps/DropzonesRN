import { types, process } from 'mobx-state-tree'
import axios from 'axios'
import { Alert } from 'react-native'

const API_URL: string = 'https://itunes.apple.com/search'

export const Track = types.model('TracksModel').props({
  id: types.identifier(types.number),
  url: '',
  trackName: '',
})

export const SearchStoreModel = types
  .model('SearchStoreModel')
  .props({
    tracks: types.optional(types.array(Track), []),
    query: '',
    loading: false,
  })
  .views(self => ({
    get getQuery() {
      return self.query
    },
    get getTracks() {
      return self.tracks
    },
  }))
  .actions(self => ({
    setQuery(artist: string) {
      self.query = artist
    },
    setTracks(result: Array<Object>) {
      self.tracks = result
    },
  }))
  .actions(self => {
    const getTrackList = process(function*() {
      try {
        const requestURL = `${API_URL}?term=${self.query}&country=us`
        self.loading = true
        const response = yield axios.get(requestURL)
        const { results } = response.data
        const newTracks = results.map(track => {
          return {
            id: track.trackId,
            url: track.artworkUrl100,
            trackName: track.trackName,
          }
        })
        self.tracks.replace(newTracks)
        self.loading = false
      } catch (e) {
        Alert.alert('Connection error')
      }
    })
    return {
      getTrackList,
    }
  })

// export default type SearchStore = typeof SearchStoreModel.Type
const SearchStore = SearchStoreModel.create({})
export default SearchStore
