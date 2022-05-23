import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react';
import CartProductItem from '../../components/CartProductItem'
import products from '../../data/cart';
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'



const ShoppingCartScreen = () => {
  const navigation = useNavigation();

  const onCheckOut = () =>{
    navigation.navigate('address')
  }


  const totalPrice = products.reduce(
        (summedPrice, product) =>
        summedPrice + product.item.price * product.quantity,
        0,
    );

  return (
        <View style={styles.page}>
           
          <FlatList 
          data={products}
          renderItem={({item}) => <CartProductItem cartItem = {item} />}
          showsVerticalScrollIndicator = {false}
          ListHeaderComponent={() => (
            <View>
            <Text style={{fontSize: 18}}>Subtotal ({products.length} items): <Text style={{color:"#e47911", fontWeight: 'bold'}}>${totalPrice.toFixed(2)}</Text></Text>
            <Button text="Proceed to checkout"
                onPress={onCheckOut}
                containerStyles={{backgroundColor: '#f7e300', borderColor: '#c7b702'}}
            />
        </View>

          )}
      />
        
        </View>
  )
}
const styles=StyleSheet.create({
    page:{
        padding: 10,
        height: '100%'
    }
})

export default ShoppingCartScreen;