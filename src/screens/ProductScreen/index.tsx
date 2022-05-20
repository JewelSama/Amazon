import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import styles from './styles';
import product from '../../data/product'
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector'

const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    // console.warn(selectedOption);
    return (
    <View>
      <Text style={styles.title}>{product.title}</Text>
 

        {/* option <Selector></Selector> */}

        <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue) =>  setSelectedOption(itemValue)}>

            {product.options.map(option =>(
               <Picker.Item label={option} value={option} />
           ))}

        </Picker>

      <Text style={styles.price}>${product.price}
            {product.oldPrice && <Text style={styles.oldPrice}>${product.oldPrice}</Text>}
        </Text>


        <Text style={styles.description}>{product.description}</Text>

        <QuantitySelector />


    </View>
  )
}

export default ProductScreen;
