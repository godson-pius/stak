import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//  Screens
import OverviewScreen from './OverviewScreen';
import AutosaveScreen from './AutosaveScreen';
import StakFlex from './StakFlex';
import StakLock from './StakLock';
import StakTarget from './StakTarget';

const Stack = createStackNavigator();

const OverviewStack = () => {
  return (
    <Stack.Navigator initialRouteName="CardScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OverviewScreen" component={OverviewScreen} options={{headerShown: false}} />
        {/* Add screens for other components as needed */}
    </Stack.Navigator>
  )
}

export default OverviewStack
