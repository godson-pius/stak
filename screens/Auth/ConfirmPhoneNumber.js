import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useAuth } from '../../components/AppProvider';

const ConfirmPhoneNumber = ({ navigation, route }) => {
    const { selectedCountry, phoneNumber } = route.params;

    const [otp, setOtp] = useState('');
    const pinInputRefs = Array.from({ length: 4 }, () => useRef(null));
  
    const handleChangePin = (text, index) => {
      setOtp((prevPin) => {
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
  
    const confirmPassword = async () => {
      // Add logic to handle the invest now action
      // For example, navigate to the next screen
      // navigation.navigate('NextScreen');
      try{
        const res = await authContext.confirmPhoneNumber(phoneNumber, String(otp));
        if (res?.data?.isSuccessful) {
          navigation.navigate('UserName', {selectedCountry, phoneNumber});
        } else {
          Alert.alert("Failed to confirm your phone number")
        }
      }catch(error){
        console.log(error);
      }
      //   // Handle successful confirmation
      //   console.log('Phone number confirmed successfully:', response.data);
      //   navigation.navigate('HomeTab');
      //   // Navigate to the next step or perform any other action
      // } catch (error) {
      //   // Handle confirmation error
      //   console.error('Phone number confirmation failed:', error);
      //   // Display error message to the user
      // }
    };
  
    const isInvestNowDisabled = otp.length !== 4;
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Let's confirm it's you</Text>
        <Text style={styles.value}>Input the 4 digits code sent to your number</Text>
        <View style={styles.pinContainer}>
          {Array.from({ length: 4 }).map((_, index) => (
            <TextInput
              key={index}
              ref={pinInputRefs[index]}
              style={styles.pinInput}
              value={otp[index]}
              onChangeText={(text) => handleChangePin(text, index)}
              maxLength={1}
              keyboardType="numeric"
              secureTextEntry
            />
          ))}
        </View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isInvestNowDisabled ? '#ccc' : '#ACF279' }]}
          onPress={confirmPassword}
          disabled={isInvestNowDisabled}
        >
          <Text style={styles.buttonText}>Confirm</Text>
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
  
export default ConfirmPhoneNumber
