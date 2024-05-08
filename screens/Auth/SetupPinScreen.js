import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const SetupPinScreen = ({ navigation, route }) => {
    const { firstName, lastName, selectedCountry, phoneNumber, password, selectedOption } = route.params;

    const [pin, setPin] = useState('');
    const pinInputRefs = Array.from({ length: 4 }, () => useRef(null));
  
    const handleChangePin = (text, index) => {
      setPin((prevPin) => {
        const newPin = prevPin.split('');
        newPin[index] = text;
        return newPin.join('');
      });
  
      // Move to the next pin input
      if (text !== '' && index < 3) {
        pinInputRefs[index + 1].current.focus();
      }
    };
  
    const handleInvestNow = () => {
      navigation.navigate('ConfirmPinScreen', { firstName, lastName, selectedCountry, phoneNumber, password, selectedOption, pin });
    };
  
    const isInvestNowDisabled = pin.length !== 4;
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Setup your pin</Text>
        <Text style={styles.value}>You will use this pin to confirm transactions</Text>
        <View style={styles.pinContainer}>
          {Array.from({ length: 4 }).map((_, index) => (
            <TextInput
              key={index}
              ref={pinInputRefs[index]}
              style={styles.pinInput}
              value={pin[index]}
              onChangeText={(text) => handleChangePin(text, index)}
              maxLength={1}
              keyboardType="numeric"
              secureTextEntry
            />
          ))}
        </View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isInvestNowDisabled ? '#ccc' : '#ACF279' }]}
          onPress={handleInvestNow}
          disabled={isInvestNowDisabled}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingHorizontal: '5%',
    },
    heading: {
      fontSize: 20,
      fontWeight: '500',
      marginBottom: 5,
    },
    pinContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pinInput: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderColor: '#555',
      borderRadius: 5,
      marginHorizontal: 5,
      textAlign: 'center',
      fontSize: 20,
      },
      value: {
          marginBottom: 20,
          fontSize: 17,
          color: '#555',
      },
    button: {
      width: '100%',
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 16,
      textAlign: 'center',
    },
  });
  
export default SetupPinScreen
