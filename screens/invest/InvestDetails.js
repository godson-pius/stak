import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

const InvestDetails = ({ route }) => {
  const { item } = route.params;

  const navigation = useNavigation();

  const handleInvestNow = () => {
    // Navigate to 'PreviewScreen' along with the item information
    navigation.navigate('PreviewScreen', { item });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar translucent />
      <Text style={styles.heading}>{item.title}</Text>
      <Image source={item.image} style={styles.image} />

      {/* Additional details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>State: {item.state}</Text>
        <View style={{ flexDirection: 'row', marginVertical: 15, justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.descriptionValue}>9.10%</Text>
            <Text style={styles.description}>Annual returns</Text>
          </View>
          {item.state === 'Available' ? (
            <View style={styles.investmentAvailable}>
              <Text style={styles.state}>{item.state}</Text>
            </View>
          ) : (
            <View style={styles.investmentClosed}>
              <Text style={styles.state}>{item.state}</Text>
            </View>
          )}
        </View>

        <View style={styles.notifications}>
          <Text style={styles.state}>There could be decrease or increase in annual returns and this shows the total returns for the next 12 months</Text>
        </View>

        <View style={{ flexDirection: 'row', marginVertical: 15, justifyContent: 'space-between' }}>
          <View style={{ alignItems: 'center', width: '33.3%' }}>
            <Text style={styles.descriptionValue}>{item.amount}</Text>
            <Text style={styles.description2}>Montly</Text>
          </View>
          <View style={{ alignItems: 'center', width: '33.3%' }}>
            <Text style={styles.descriptionValue}>{item.invested}</Text>
            <Text style={styles.description2}>Invested</Text>
          </View>
          <View style={{ alignItems: 'center', width: '33.3%' }}>
            <Text style={styles.descriptionValue}>{item.units}</Text>
            <Text style={styles.description2}>Units</Text>
          </View>
        </View>

        <View style={styles.notifications2}>
          <View style={styles.iconHolder}>
            <Fontisto name="lightbulb" size={20} color={'yellow'} />
          </View>
          <View style={styles.textHolder}>
            <Text style={styles.state}>You can claim your investment anytime by selling your units</Text>
          </View>
        </View>
        {/* Add more details as needed */}
      </View>
      <Text style={styles.sectionTitle}>About this Investment</Text>
      <Text style={styles.sectionText}>
        The offer is a rental located at Ikotun, Lagos, Nigeria. A tranquil vicinity, rentals located here tend to sell off as the area bustles night and day.
      </Text>

      <Text style={styles.sectionTitle}>How to Earn</Text>
      <Text style={styles.sectionText}>
        For early investors the property’s sale price (its current market value) appreciates over time.
        You could also sell off your units at a higher price when you deem fit.
      </Text>

      {item.state === 'Available' ? (
        <TouchableOpacity style={styles.button} onPress={handleInvestNow}>
          <Text style={styles.buttonText}>Invest now</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonUnavailable} onPress={() => Alert.alert('Investment is closed.')}>
          <Text style={styles.buttonText}>Closed</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: '5%',
    paddingTop: 50,
    paddingBottom: 50,
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  investmentAvailable: {
    backgroundColor: '#E7F2DC',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    height: 30,
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  investmentClosed: {
    backgroundColor: '#F2EBF0',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    height: 30,
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  state: {
    fontSize: 13,
  },
  description: {
    paddingTop: 5,
    fontSize: 14,
    color: '#555',
  },
  descriptionValue: {
    fontWeight: '400',
    fontSize: 20,
    // color: '#555',
  },
  description2: {
    paddingTop: 5,
    fontSize: 16,
    color: '#555',
  },
  notifications: {
    backgroundColor: '#E7F2DC',
    width: '75%',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  notifications2: {
    flexDirection: 'row',
    backgroundColor: '#E7F2DC',
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  iconHolder: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHolder: {
    width: '80%',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ACF279",
    width: "100%",
    padding: 10,
    //margin: 10,
    borderRadius: 5,
  },
  buttonUnavailable: {
    backgroundColor: "#F2EBF0",
    width: "100%",
    padding: 10,
    //margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  // Add more styles as needed
});

export default InvestDetails;
