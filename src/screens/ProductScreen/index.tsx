import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './styles';
// import product from '../../data/product'
import { Product } from '../../models';
import { DataStore } from 'aws-amplify';

import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import { useRoute } from '@react-navigation/native';


const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState<Product|undefined>(undefined);

      const route = useRoute();

      useEffect(() =>{
        if(!route.params?.id) {
          return;
        }
        DataStore.query(Product, route.params.id).then(setProduct)
      }, [route.params?.id])

      useEffect(() => {
        if(product?.options){
          setSelectedOption(product.options[0]);
        }
      }, [])

      if(!product){
        return <ActivityIndicator />;
      }


    return (
    <ScrollView style={[styles.root, {height: '100%'}]}>
      <Text style={styles.title}>{product.title}</Text>
 

        <ImageCarousel images={product.images} />

        {/* option <Selector></Selector> */}

        <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue) =>  setSelectedOption(itemValue)}>

            {product.options.map(option =>(
               <Picker.Item label={option} value={option} />
           ))}

        </Picker>

      <Text style={styles.price}>${product.price.toFixed(2)}
            {product.oldPrice && <Text style={styles.oldPrice}>${product.oldPrice.toFixed(2)}</Text>}
        </Text>


        <Text style={styles.description}>{product.description}</Text>

        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />


         <Button text={"Add To Cart"} 
         onPress={() => {console.warn("Add to cart")}} 
                containerStyles={{backgroundColor: "#e3c905"}}
         />       
         <Button text="Buy Now" onPress={() => {}} />       

    </ScrollView>
  )
}

export default ProductScreen;
