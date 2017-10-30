import React from 'react'
import styled from 'styled-components/native'
import { ViewStyle, TextStyle } from 'react-native'

const Container: ViewStyle = styled.View`
  margin-top: 40;
  margin-bottom: 20;
`

const Input: TextStyle = styled.TextInput`
  width: 70%;
  color: gray;
  height: 40;
  font-size: 18;
  padding-left: 10;
`

export interface Props {
  value: string
  placeholder?: string
  onChangeText(): void
}

export default function SearchInput(props: Props) {
  return (
    <Container>
      <Input {...props} />
    </Container>
  )
}
