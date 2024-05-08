import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const RequestScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.notificationIconHolder} onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={30} />
      </TouchableOpacity>
      
      <Text style={styles.title}>Request from a Stak user</Text>

      {/* Lorem Ipsum Text */}
      <Text style={styles.loremText}>
        Request and recieve money with your verified email address.
      </Text>

      <View style={styles.emailHolder}>
        <View style={{justifyContent: 'space-between'}}>
            <Text style={styles.yourEmail}>jksfhasyour email address</Text>
            <Text style={styles.email}>michaelrhoda7@gmail.com</Text>
        </View>
        <FontAwesome5 name="copy" size={25} style={{backgroundColor: '#E7F2DC', padding:5}} />
      </View>

      <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Request')}>
        <Text style={styles.createButtonText}>Request</Text>
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
export default RequestScreen
