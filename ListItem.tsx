import React from 'react'
import { View, Image, Text } from 'react-native'

export interface ListItemProps {
  imageUrl: string
  songName: string
}

export default function ListItem(props: ListItemProps) {
  const { imageUrl, songName } = props
  console.log('PROPS', props)
  return (
    <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: 'lightgrey' }}>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 50, height: 50, resizeMode: 'contain', margin: 10 }}
      />
      <Text style={{ alignSelf: 'center', fontSize: 16 }}>{songName}</Text>
    </View>
  )
}
