import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, ScrollView, Dimensions, TouchableHighlight  } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar';

const RealEstateScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const data = [
    {
      id: '1',
      amount: '₦ 5000',
      invested: '6342',
      units: '1000',
      title: 'Real Estate Inve...',
      state: 'Available',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: require('../../images/property1.jpeg'), // Replace with the correct image path
    },
    {
      id: '2',
      amount: '₦ 7000',
      invested: '7000',
      units: '3000',
      title: 'Real Estate Inve...',
      state: 'Closed',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: require('../../images/property2.jpg'), // Replace with the correct image path
    },
    {
      id: '3',
      amount: '₦ 10518',
      invested: '15000',
      units: '1000',
      title: 'Real Estate Inve...',
      state: 'Available',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: require('../../images/property3.jpeg'), // Replace with the correct image path
    },
    {
      id: '4',
      amount: '₦ 4500',
      invested: '237',
      units: '1000',
      title: 'Real Estate Inve...',
      state: 'Available',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: require('../../images/property4.jpeg'), // Replace with the correct image path
    },
    {
      id: '5',
      amount: '₦ 15000',
      ivested: '5986',
      units: '1000',
      title: 'Real Estate Inve...',
      state: 'Closed',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: require('../../images/property5.jpg'), // Replace with the correct image path
    },
  ];

  const closeToYou = [
    {
      id: '1',
      amount: '₦ 13500',
      invested: '178',
      units: '500',
      title: 'Real Estate Inve...',
      state: 'Closed',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: require('../../images/property6.jpeg'), // Replace with the correct image path
    },
    {
      id: '2',
      amount: '₦ 15000',
      invested: '9353',
      units: '1500',
      title: 'Real Estate Inve...',
      state: 'Available',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: require('../../images/property7.jpeg'), // Replace with the correct image path
    },
    {
      id: '3',
      amount: '₦ 7500',
      invested: '1915',
      units: '1800',
      title: 'Real Estate Inve...',
      state: 'Closed',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: require('../../images/property8.jpeg'), // Replace with the correct image path
    },
    // Add more properties as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableHighlight onPress={() => navigation.navigate('InvestDetails', {item})} underlayColor="#DDDDDD">
      <View style={styles.card}>
        <Image source={item.image} style={styles.cardImage} />
        <View style={styles.cardInfo}>
          <Text style={styles.title}>{item.title}</Text>
          {item.state === 'Available' ? (
            <View style={styles.investmentAvailable}>
              <Text style={styles.state}>{item.state}</Text>
            </View>
          ) : (
            <View style={styles.investmentClosed}>
              <Text style={styles.state}>{item.state}</Text>
            </View>
          )}
          <View style={{flexDirection: 'row', marginVertical: 15, justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.descriptionValue}>{item.amount}</Text>
              <Text style={styles.description}>Montly</Text>
            </View>
            <View>
              <Text style={styles.descriptionValue}>{item.invested}</Text>
              <Text style={styles.description}>Invested</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar translucent />
      <View style={styles.searchBarHolder}>
        <View style={styles.searchBar}>
          <MaterialCommunityIcons name="magnify" size={24} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Lagos, Nigeria"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
      </View>
      <Text style={styles.subHeaderText}>Top real estate offers of the month</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={styles.flatListContainer}
      />

      <Text style={styles.subHeaderText}>Close to you</Text>
      <FlatList
        data={closeToYou}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={styles.flatListContainer}
      />
    </ScrollView>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: '5%',
    paddingBottom: 100,
  },
  header: {
    height: '12%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  headerTextHolder: {
    width: '50%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  notificationIconHolder: {
    width: '50%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
  },
  searchBarHolder: {
    backgroundColor: '#ecf0f1',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'lightgray',
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
    color: '#95a5a6',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  subHeaderText: {
    marginVertical: 10,
    color: 'gray',
    fontSize: 14,
  },
  flatListContainer: {
    padding: 10,
  },
  card: {
    marginRight: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'lightgray',
    width: screenWidth*0.42,
    height: 210, // Set your desired fixed height here
  },
  cardImage: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
  },
  cardInfo: {
    paddingHorizontal: '5%',
    height: '60%',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 8,
  },
  investmentAvailable: {
    backgroundColor: '#E7F2DC',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  investmentClosed: {
    backgroundColor: '#F2EBF0',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
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
    fontWeight: '600',
    fontSize: 16,
    color: '#555',
  },
});

export default RealEstateScreen;
