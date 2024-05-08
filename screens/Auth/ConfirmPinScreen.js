import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useAuth } from '../../components/AppProvider';

const ConfirmPinScreen = ({ navigation, route }) => {
  const { firstName, lastName, selectedCountry, phoneNumber, password, selectedOption, pin } = route.params;
  const [confirmPin, setConfirmPin] = useState('');
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

  const registerUser = async () => {

    try {
      const data = {
        firstName,
        lastName,
        middleName: 'null',
        phoneNumber: "+23467363736211",
        password,
        country: 0,
        socialChannel: selectedOption,
        pin: +pin
      }
      const res = await authContext.register(data);

      if (res?.data?.isSuccessful == true) {
        // Alert.alert("Account successfully created!")
        navigation.navigate('YouAreIn', { phoneNumber, password });
      } else {
        Alert.alert("Failed to create account. please try again")
      }

      // navigation.navigate('ConfirmPhoneNumber', {phoneNumber});
    }
    catch (error) {
      console.log(error);
    }

    // try {
    //   // Make a POST request to the registration endpoint
    //   const response = await axios.post('https://dev.api.auth.stakfinance.com/api/Auth/Register', {
    //     firstName,
    //     lastName,
    //     middleName: null,
    //     phoneNumber,
    //     password,
    //     country: 0,
    //     socialChannel: 0,
    //     pin
    //   });

    //   // Handle successful registration
    //   console.log('User registered successfully:', response.data);
    //   // You can navigate to the next screen or perform any other action here
    //   handleSendOtp();
    //   return response.data; // Return any relevant data from the response
    // } catch (error) {
    //   // Handle registration error
    //   if (error.response) {
    //     // The request was made and the server responded with a status code
    //     console.error('Registration failed with status code:', error.response.status);
    //     console.error('Error message:', error.response.data);
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     console.error('No response received from the server');
    //   } else {
    //     // Something happened in setting up the request that triggered an error
    //     console.error('Error occurred while processing the request:', error.message);
    //   }
    //   // You can display an error message to the user or perform other error handling actions here
    //   throw error; // Rethrow the error to propagate it to the calling code
    // }
  };


  const handleSendOtp = async () => {
    try {
      const response = await axios.post('https://dev.api.auth.stakfinance.com/api/Auth/ResendPhoneOtp', {
        phoneNumber
      });

      // Handle successful OTP resend
      console.log('OTP resent successfully:', response.data);
      navigation.navigate('ConfirmPhoneNumber', { phoneNumber });
      // Navigate to the next step or perform any other action
    } catch (error) {
      // Handle OTP resend error
      console.error('OTP resend failed:', error);
      // Display error message to the user
    }
    // navigation.navigate('UserName', {selectedCountry, phoneNumber});
  };

  const isInvestNowDisabled = confirmPin.length !== 4 || confirmPin !== pin;

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
        onPress={registerUser}
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

export default ConfirmPinScreen;
