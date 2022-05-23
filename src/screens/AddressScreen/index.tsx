import { View, Text } from 'react-native'
import React from 'react'
import {Picker} from '@react-native-picker/picker'
import styles from './styles'




const AddressScreen = () => {
  return (
    <View>
        <View style={styles.row}>
            <Picker>
                <Picker.Item value="Moldova" label="Moldova" />
            </Picker>
        </View>

    </View>
  )
}

export default AddressScreen;