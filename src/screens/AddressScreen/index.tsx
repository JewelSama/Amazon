import { View, Text, TextInput } from 'react-native'
import React, {useState} from 'react'
import {Picker} from '@react-native-picker/picker'
import styles from './styles'
import countryList from 'country-list'



const countries = countryList.getData();


const AddressScreen = () => {
    const [country, setCountry] = useState(countries[0].code);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    return (
    <View style={styles.root}>
        <View style={styles.row}>
            <Picker
            selectedValue={country}
            onValueChange={setCountry} 
            >
                {countries.map(country => (
                    <Picker.Item value={country.code} label={country.name} />
                ))}
                
            </Picker>
        </View>

            <View style={styles.row}>
                <Text style={styles.label}>Full name (First and Last name)</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Full name"
                    value={fullname}
                    onChangeText={setFullname}
                />
               
               
                <Text style={styles.label}>Phone number</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Phone number"
                    value={phone}
                    onChangeText={setPhone}
                />
            </View>


    </View>
  )
}

export default AddressScreen;