import { Pressable, Text } from 'react-native'
import React from 'react'

interface ButtonProps {
    text: string;
    onPress: () => {};
}

const Button = ({text, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Text>Button</Text>
    </Pressable>
  )
}

export default Button;