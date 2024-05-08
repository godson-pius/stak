import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useAuth } from '../../components/AppProvider';

const ConfirmPinScreenFinal = ({ navigation, route }) => {
  const [confirmPin, setConfirmPin] = useState('');
  const { recipientPhone, amountToSend } = route.params;
  const pinInputRefs = Array.from({ length: 4 }, () => useRef(null));

  const handleChangePin = (text, index) => {
    setConfirmPin((prevPin) => {
      const newPin = prevPin.split('');
      newPin[index] = text;
      return newPin.join('');
    });

    // Move to the next pin input
    if (text !== '' && index < 3) {
      pinInputRefs[index + 1].current.focus();
    }
  };

  
  const authContext = useAuth();
  const user = authContext.user ? authContext.user : 'no user';

  const isInvestNowDisabled = confirmPin.length !== 4;

  const finalizePin = async() => {
    const res = await authContext.confirmPin(user?.data?.id, +confirmPin)
    if (res?.data?.isSuccessful) {
      const data = {
        reciepientPhone: recipientPhone,
        amount: +amountToSend,
        currency: "usd"
      }

      const token = user?.data?.token
      console.log("DATA: ", data, token)
      const payRes = await authContext.transferToUser(data, token)
      console.log("Response: ", payRes)
      return

      if (payRes?.data?.isSuccessFul) {
        openBrowserAsync(payRes?.data?.data?.authorization_url)
        navigation.navigate('VerifyFinal');
      }
      // Alert.alert('Wait')
      // TODO: handle payment
      // navigation.navigate('VerifyFinal');
    } else {
      Alert.alert('Incorrect pin provided. Please try again')
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Confirm your pin</Text>
      <Text style={styles.value}>You will use this pin to confirm transactions</Text>
      <View style={styles.pinContainer}>
        {Array.from({ length: 4 }).map((_, index) => (
          <TextInput
            key={index}
            ref={pinInputRefs[index]}
            style={styles.pinInput}
            value={confirmPin[index]}
            onChangeText={(text) => handleChangePin(text, index)}
            maxLength={1}
            keyboardType="numeric"
            secureTextEntry
          />
        ))}
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: isInvestNowDisabled ? '#ccc' : '#ACF279' }]}
        onPress={finalizePin}
        disabled={isInvestNowDisabled}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default ConfirmPinScreenFinal;
