import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabs}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tab}
          >
            {isFocused ? (
              <Text style={styles.tabTextFocused}>{label}</Text>
            ) : (
              <Text style={styles.tabText}>{label}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    mainHeader: {
      backgroundColor: 'lightblue',
      padding: 15,
      alignItems: 'center',
    },
    tabs: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'lightgray',
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
    },
    tabText: {
      fontSize: 16,
      color: 'black',
    },
    tabTextFocused: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'blue',
    },
    subHeader: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    balanceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    balanceText: {
      marginLeft: 10,
      fontSize: 18,
    },
    optionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    option: {
      flex: 1,
      marginRight: 5,
      padding: 10,
      backgroundColor: 'lightgray',
      borderRadius: 5,
      alignItems: 'center',
    },
    boxContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    boxOption: {
      flex: 1,
      marginRight: 5,
      padding: 10,
      backgroundColor: 'lightgray',
      borderRadius: 5,
      alignItems: 'center',
    },
    joinButton: {
      backgroundColor: 'lightgray',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    joinButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
export default CustomTabBar
