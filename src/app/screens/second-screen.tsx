import * as React from 'react'
import { observer } from 'mobx-react'
import { View, Text } from 'react-native'

@observer
export class SecondScreen extends React.Component<{}, {}> {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text>Hey Second screen</Text>
      </View>
    )
  }
}
