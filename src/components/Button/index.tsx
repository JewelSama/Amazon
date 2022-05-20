import { Pressable, Text, StyleSheet } from 'react-native'
import React from 'react'

interface ButtonProps {
    text: string;
    onPress: () => void;
}

const Button = ({text, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Text style={styles.text}>Button</Text>
    </Pressable>
  )
}

export default Button;

const styles=StyleSheet.create({
    root:{
        backgroundColor: '#e47911', 
        margin: 10,
        height: 40,
        justifyContent:  'center',
        alignItems: 'center', 
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#a15e1b'
    },
    text:{
        fontSize: 16,
    }
})