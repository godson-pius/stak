import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const Request = ({navigation}) => {
  const [receiverEmail, setReceiverEmail] = useState('');
  const [amount, setAmount] = useState('');

  const isInputValid = receiverEmail.trim() !== '' && amount.trim() !== '';

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.notificationIconHolder} onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={30} />
      </TouchableOpacity>
      
      <Text style={styles.title}>Request from a Stak user</Text>

      {/* Lorem Ipsum Text */}
      <Text style={styles.loremText}>
        Request and recieve money with your verified email or unique account number.
      </Text>

      <Text style={styles.loremText2}>Who are you asking</Text>

      <View style={styles.textInput}>
        <TextInput style={styles.input}
            placeholder="michaelrhoda7@gmail.com" 
            value={receiverEmail}
            onChangeText={(text) => setReceiverEmail(text)}
            keyboardType='numeric'
        />
      </View>

      <Text style={styles.loremText2}>How much are u asking for</Text>

      <View style={styles.textInput}>
        <TextInput style={styles.input}
            placeholder="₦3000" 
            value={amount}
            maxLength={11}
            onChangeText={(text) => setAmount(text)}
            keyboardType='numeric'
        />
      </View>

      <TouchableOpacity
        style={[
          styles.createButton,
          { backgroundColor: isInputValid ? '#ACF279' : 'gray' },
        ]}
        onPress={() => {
          if (isInputValid) {
            // Handle the request logic here
            console.log('Sending request:', receiverEmail, amount);
          }
        }}
        disabled={!isInputValid}
      >
        <Text style={styles.createButtonText}>Send request</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    notificationIconHolder: {
      marginTop: 20,
      marginBottom: 20,
    },
    loremText: {
      color: 'gray',
      fontSize: 16,
      marginTop: 10,
      marginBottom: 5,
    },
    yourEmail: {
      color: 'gray',
      fontSize: 16,
    },
    email: {
      fontSize: 17,
      fontWeight: '500',
    },
    addCardContainer: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        marginBottom: 20,
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
    
    loremText2: {
        fontSize: 17,
        fontWeight: '500',
        marginTop: 10,
        marginBottom: 5,
      },
    textInput: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        // marginBottom: 5,
    },
    input: {
        width: '100%',
        backgroundColor: '#F5F5F5',
        paddingLeft: 10,
        fontSize: 16,
      },
    createButton: {
        backgroundColor: '#ACF279',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    createButtonText: {
        fontSize: 18,
        fontWeight: '500',
    },
    currencyPicker: {
        flexDirection: 'row',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    picker: {
        width: '100%',
        height: '100%',
    },
    emailHolder: {
      flexDirection: 'row',
      backgroundColor: '#F1F2F0',
      justifyContent: 'space-between',
      width: '100%',
      height: 60,
      fontWeight: 'bold',
      padding: 10,
      marginBottom: 10,
    },
});
export default Request
