import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react';
import ProductItem from '../../components/ProductItem'
import products from '../../data/cart';

const ShoppingCartScreen = () => {
  return (
        <View>
          <FlatList 
          data={products}
          renderItem={({item}) => <ProductItem item = {item.item} />}
          showsVerticalScrollIndicator = {false}
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