import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const QuantitySelector = ({quantity, setQuantity}) => {
    const onMinus = () =>{
        setQuantity(Math.max(0,quantity - 1));
    }
    const onPlus = () =>{
        setQuantity(quantity +  1);
    }


  return (
    <View style={styles.root}>
        <Pressable style={styles.button} onPress={onMinus}>
            <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.quantity}>{quantity}</Text>
        <Pressable style={styles.button} onPress={onPlus}>
            <Text style={styles.buttonText}>+</Text>
        </Pressable>
    </View>
  )
}
 
export default QuantitySelector;

const styles = StyleSheet.create({
    root:{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#e3e3e3',
        borderWidth: 1,
        width: 130,
        justifyContent: 'space-between'
    },
    button:{
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d1d1d1'
    },
    buttonText:{
        fontSize: 18,
    },
    quantity:{
        color: '#007eb9'
    }
})