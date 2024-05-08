import React from 'react'
import { View, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import InvestScreen from '../screens/invest/InvestScreen';
import SaveStacks from './saveStack/SaveStacks';
import OthersScreen from '../screens/others/OthersScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import WalletStack from '../screens/wallet/WalletStack';

const Tab = createBottomTabNavigator();

const CustomTabBarIcon = ({ name, size, color, focused, label }) => {
    return (
      <View style={{ alignItems: 'center', backgroundColor: focused ? 'white' : 'transparent', borderRadius: 50, padding: 10 }}>
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={color}
          style={{  }}
        />
        <Text style={{ color: color, fontSize: 12, }}>{label}</Text>
      </View>
    );
  };

const HomeTab = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        elevation: 8,
        borderRadius: 20,
        height:55,
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'lightgray',
      tabBarLabelStyle: { fontSize: 12 },
      tabBarIconStyle: { marginBottom: -2 },
    })}
    tabBarOptions={{
      showLabel: false,
    }}
  >
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ size, color, focused }) => (
          <CustomTabBarIcon name="home-outline" size={17} color={color} focused={focused} label="Home" />
        ),
      }}
    />
    <Tab.Screen
      name="Invest"
      component={InvestScreen}
      options={{
        tabBarIcon: ({ size, color, focused }) => (
          <CustomTabBarIcon name="hand-coin-outline" size={17} color={color} focused={focused} label="Invest" />
        ),
      }}
    />
    <Tab.Screen
      name="Save"
      component={SaveStacks}
      options={{
        tabBarIcon: ({ size, color, focused }) => (
          <CustomTabBarIcon name="home-outline" size={17} color={color} focused={focused} label="Save" />
        ),
      }}
    />
    <Tab.Screen
      name="Wallet"
      component={WalletStack}
      options={{
        tabBarIcon: ({ size, color, focused }) => (
          <CustomTabBarIcon name="wallet-outline" size={17} color={color} focused={focused} label="Wallet" />
        ),
      }}
    />
    <Tab.Screen
      name="Others"
      component={OthersScreen}
      options={{
        tabBarIcon: ({ size, color, focused }) => (
          <CustomTabBarIcon name="more" size={17} color={color} focused={focused} label="Others" />
        ),
      }}
    />
  </Tab.Navigator>
  )
}

export default HomeTab
