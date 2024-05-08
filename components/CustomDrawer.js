import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawer = (props) => {
  // Replace these dummy user details with your actual user data
  const userProfile = {
    profilePicture: require('../images/UserProfile.png'), // Replace with the actual path to the user's profile picture
    name: 'John Doe', // Replace with the actual user's name
    userId: '1234', // Replace with the actual user ID
  };

  return (
    <DrawerContentScrollView {...props} style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Image source={userProfile.profilePicture} style={styles.profilePicture} />
        <View>
          <Text style={styles.userName}>{userProfile.name}</Text>
          <Text style={styles.userId}>User ID: {userProfile.userId}</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      <View style={styles.separator} />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="ios-settings" size={24} color="#FFFFFF" />
          <Text style={styles.footerItemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="ios-information-circle" size={24} color="#FFFFFF" />
          <Text style={styles.footerItemText}>About</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="ios-log-out" size={24} color="#FFFFFF" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: '#2C3E50', // Replace with the actual background color of your homepage
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userId: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginVertical: 10,
  },
  footer: {
    paddingHorizontal: 20,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerItemText: {
    marginLeft: 20,
    fontSize: 16,
    color: '#FFFFFF',
  },
  logoutContainer: {
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    paddingTop: 10,
    marginTop: 'auto', // Pushes the logout button to the bottom
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default CustomDrawer;
