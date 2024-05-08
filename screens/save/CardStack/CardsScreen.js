import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you have Expo installed for icons

const CardsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Add Card Section */}
      <View style={styles.addCardContainer}>
        <TouchableOpacity style={styles.addCardButton} onPress={() => navigation.navigate('NewCard')}>
          <MaterialIcons name="credit-card" size={24} color="black" />
          <Text style={styles.addCardText}>Add new card</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.addCardDescription}>Add a new card to top up your wallet</Text>

      {/* Separator Line */}
      <View style={styles.separator} />
        <Text style={styles.linkedCardHeader}>Linked Cards</Text>
        <Text style={styles.linkedCardDescription}>No card(s) linked to this account</Text>
      {/* List of Added Cards (Your existing cards list can go here) */}
      {/* ... */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  addCardContainer: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addCardText: {
    marginLeft: 8,
    flex: 1,
    fontSize: 16,
  },
  addCardDescription: {
    marginTop: 8,
    color: 'gray',
    marginBottom: '10%',
  },
  linkedCardHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },
  linkedCardDescription: {
    marginTop: 8,
    color: 'gray',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginBottom: 16,
  },
});

export default CardsScreen
