import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//  Screens
import CardsScreen from './CardsScreen';
import NewCard from './NewCard';

const Stack = createStackNavigator();

const CardStack = () => {
  return (
    <Stack.Navigator initialRouteName="CardScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CardScreen" component={CardsScreen} options={{headerShown: false, title: 'My Cards' }} />
        <Stack.Screen name="NewCard" component={NewCard} options={{ title: 'My Cards' }} />
        {/* Add screens for other components as needed */}
    </Stack.Navigator>
  )
}

export default CardStack
