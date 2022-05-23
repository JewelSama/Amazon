import { View, Text, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
import {Picker} from '@react-native-picker/picker'
import styles from './styles'
import countryList from 'country-list'
import Button from '../../components/Button'


const countries = countryList.getData();


const AddressScreen = () => {
    const [country, setCountry] = useState(countries[0].code);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [addressErr, setAddressErr]= useState('')
   
   
    const onCheckout = () =>{
        if(addressErr){
            Alert.alert('Fix all fields errors before submitting');
            return;
        }
        if(!fullname){
            Alert.alert('Please fill in the fullname field')
            return;
        }
        if(!phone){
            Alert.alert('Please fill in the number field')
            return;
        }
        console.warn('Checkout')
   }

   const validateAddress = () =>{
       if(address.length < 3){
           setAddressErr('Address is too short')
       }
      
   }
   
   
   
   
   
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
            </View>

               
            <View style={styles.row}>
                <Text style={styles.label}>Phone number</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Phone number"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType={'numeric'}  //or Phone-pad
                />
            </View>


            <View style={styles.row}>
                <Text style={styles.label}>Address</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Address"
                        value={address}
                        onEndEditing={validateAddress}
                        onChangeText={text => {
                            setAddress(text);
                            setAddressErr('');
                        }}
                    />
                    {!!addressErr && <Text style={{color: 'red'}}>{addressErr}</Text>}
            </View>
            
            
            <View style={styles.row}>
                <Text style={styles.label}>City</Text>
                    <TextInput 
                        style={styles.input}
                        value={city}
                        onChangeText={setCity}
                    />
            </View>

            <Button text="Checkout" onPress={onCheckout} />
    </View>
  )
}

export default AddressScreen;