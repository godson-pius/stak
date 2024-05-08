import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import WalletScreen from './WalletScreen';
import WithdrawStack from '../SharedScreens/Withdraw/WithdrawStack';
import RequestStack from '../SharedScreens/Request/RequestStack';



const Stack = createStackNavigator();

const WalletStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WalletScreen" component={WalletScreen} options={{headerShown: false, title: 'My Cards' }} />
        <Stack.Screen name="WithdrawStack" component={WithdrawStack} options={{ title: 'My Cards' }} />
        <Stack.Screen name="RequestStack" component={RequestStack} options={{ title: 'My Cards' }} />
        {/* Add screens for other components as needed */}
    </Stack.Navigator>
  )
}

export default WalletStack
