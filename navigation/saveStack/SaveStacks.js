import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//  Screens
import SaveScreen from '../../screens/save/SaveScreen';
import AutosaveScreen from '../../screens/save/OverviewStack/AutosaveScreen';
import OverviewScreen from '../../screens/save/OverviewStack/OverviewScreen';
import CustomizePlan from '../../screens/save/OverviewStack/CustomizePlan';
import StakFlex from '../../screens/save/OverviewStack/StakFlex';
import StakLock from '../../screens/save/OverviewStack/StakLock';
import StakTarget from '../../screens/save/OverviewStack/StakTarget';

const Stack = createStackNavigator();

const SaveStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SaveScreen" component={SaveScreen} />
        <Stack.Screen name="StakFlex" component={StakFlex} />
        <Stack.Screen name="StakLock" component={StakLock} />
        <Stack.Screen name="StakTarget" component={StakTarget} />
        <Stack.Screen name="AutosaveScreen" component={AutosaveScreen} options={{ title: 'My Cards' }} />
        <Stack.Screen name="CustomizePlan" component={CustomizePlan} options={{ title: 'My Cards' }} />
        {/* Fereferals */}
        {/* <Stack.Screen name="OverviewScreen" component={OverviewScreen} /> */}
    </Stack.Navigator>
  )
}

export default SaveStacks