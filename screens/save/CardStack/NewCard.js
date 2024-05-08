import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const NewCard = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [pin, setPIN] = useState('');

  const handleSave = () => {
    // Implement your logic to save the new card details
    // You can use the state variables (cardName, cardNumber, etc.) here
  };

  return (
    <View>
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>New Card</Text>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Card Name</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter the name on you card"
            value={cardName}
            onChangeText={text => setCardName(text)}
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Card Number</Text>
            <TextInput
            style={styles.input}
            placeholder="1234 5678 9012 3456"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={text => setCardNumber(text)}
            />
        </View>

        <View style={styles.horizontalInputContainer}>
            <View style={styles.horizontalInput}>
            <Text style={styles.label}>Expiry</Text>
            <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="MM/YY"
                value={expiry}
                onChangeText={text => setExpiry(text)}
            />
            </View>

            <View style={styles.horizontalInput}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="123"
                keyboardType="numeric"
                value={cvv}
                onChangeText={text => setCVV(text)}
            />
            </View>

            <View style={styles.horizontalInput}>
            <Text style={styles.label}>PIN</Text>
            <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="****"
                keyboardType="numeric"
                secureTextEntry
                value={pin}
                onChangeText={text => setPIN(text)}
            />
            </View>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  horizontalInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  horizontalInput: {
    flex: 1,
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  saveButton: {
    backgroundColor: '#ACF279',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewCard;
