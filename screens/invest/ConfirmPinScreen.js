import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../../components/AppProvider';
import { openBrowserAsync } from 'expo-web-browser';

const ConfirmPinScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [pin, setPin] = useState('');
  const pinInputRefs = Array.from({ length: 4 }, () => useRef(null));
  const authContext = useAuth();
  const user = authContext.user;
  const amount = item.amount.split('').splice(2, item.amount.length - 1).join('');

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

  const handleInvestNow = async() => {
    const res = await authContext.confirmPin(user?.data?.id, +pin)
    if (res?.data?.isSuccessful) {
      const data = {
        userId: user?.data?.id,
        email: "testmail@gmail.com",
        amount: +amount,
        ref: "Investment Payment",
        callbackurl: ""
      }

      const token = user?.data?.token
      const payRes = await authContext.creditNairaWallet(data, token)

      if (payRes?.data?.isSuccessFul) {
        console.log("url: ", payRes?.data?.data?.authorization_url)
        openBrowserAsync(payRes?.data?.data?.authorization_url)
      }

      console.log("RESPONSE := ", payRes?.data);
      console.log(data);

      // Alert.alert('Wait')
      // TODO: handle payment
      // navigation.navigate('VerifyFinal');
    } else {
      Alert.alert('Incorrect pin provided. Please try again')
    }
  };

  const isInvestNowDisabled = pin.length !== 4;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Your Stack Pin</Text>
      <Text style={styles.value}>Enter your stack pin to confirm transfer</Text>
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
        <Text style={styles.buttonText}>Invest now</Text>
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
