import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//  Screens
import SaveScreen from '../../screens/save/SaveScreen';

const Stack = createStackNavigator();

const SaveStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Save" component={SaveScreen} />
        {/* Add more screens as needed */}
    </Stack.Navigator>
  )
}

export default SaveStack