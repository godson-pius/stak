import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RequestScreen from './RequestScreen';
import Request from './Request';


const Stack = createStackNavigator();

const RequestStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RequestScreen" component={RequestScreen} options={{headerShown: false}} />
        <Stack.Screen name='Request' component={Request} options={{headerShown: false}} />
        {/* Add screens for other components as needed */}
    </Stack.Navigator>
  )
}

export default RequestStack
