// import axios from 'axios'
// import { observable } from 'mobx'
// import { Alert } from 'react-native'

// const API_URL: string = 'https://itunes.apple.com/search'
// export default class SearchStore {
//   // Essentially initial state
//   @observable query = ''
//   @observable tracks = []

//   // Getters
//   get getQuery() {
//     return this.query
//   }

//   get getTracks() {
//     return this.tracks
//   }
//   // Setters
//   set setQuery(artist: string) {
//     this.query = artist
//   }

//   set setTracks(result: Array<Object>) {
//     this.tracks = result
//   }
//   // API call to get tracks by artist name
//   async getTrackList(query: string) {
//     if (!query) {
//       this.tracks = []
//       return
//     }
//     try {
//       const requestURL = `${API_URL}?term=${query}&country=us`
//       const response = await axios.get(requestURL)
//       console.log('HEY', response)
//       this.tracks = response.data.results
//     } catch (e) {
//       Alert.alert('Connection error', "Couldn't fetch the data.")
//     }
//   }
// }
