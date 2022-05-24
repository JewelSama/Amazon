import { View, StyleSheet, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import ProductItem from '../../components/ProductItem';
// import products from '../../data/products'
import { DataStore } from 'aws-amplify';
import {Product} from '../../models'
import { ConsoleLogger } from '@aws-amplify/core';



const HomeScreen = ({searchValue}: {searchValue: string}) => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
     DataStore.query(Product).then(setProducts);
  }, []);

  return (
    <View style={styles.page}>
        {/* <ProductItem item={products[4]} /> */}

        <FlatList 
          data={products}
          renderItem={({item}) => <ProductItem item = {item} />}
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
export default HomeScreen;


