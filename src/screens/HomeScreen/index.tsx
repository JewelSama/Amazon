import { View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products'



const HomeScreen = () => {
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


