import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import WithdrawScreen from './WithdrawScreen';
import ViaBVN from './ViaBVN';
import ViaBank from './ViaBank';


const Stack = createStackNavigator();

const WithdrawStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WalletScreen" component={WithdrawScreen} options={{headerShown: false}} />
        <Stack.Screen name='ViaBVN' component={ViaBVN} options={{headerShown: false}} />
        <Stack.Screen name='ViaBank' component={ViaBank} options={{headerShown: false}} />
        {/* Add screens for other components as needed */}
    </Stack.Navigator>
  )
}

export default WithdrawStack
