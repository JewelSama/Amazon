import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNav from './bottomTabNav';
import ShoppingCartScreen from '../screens/ShoppingCartScreen'
import AddressScreen from '../screens/AddressScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
    return(
            <Stack.Navigator>
                <Stack.Screen 
                    component={ShoppingCartScreen}
                    name="cart"
                    options={{title:'Shopping Cart'}}
                />
                <Stack.Screen 
                    component={AddressScreen}
                    name="address"
                    options={{title:'Address'}}

                />
            </Stack.Navigator>
    )
}

export default HomeStack;