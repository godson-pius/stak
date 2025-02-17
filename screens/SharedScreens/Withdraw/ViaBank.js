import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const ViaBank = ({navigation}) => {
  const [BVN, setBVN] = useState('');
  const [selectedBank, setSelectedBank] = useState('USD');

  const isBVNEmpty = BVN.trim() === '';

  const isBVNValid = BVN.trim().length >= 11;

  const availableBank = [
    {
      value: 'GTBank'}, {value: 'UBA'}, {value: 'Access Bank'}, {value: 'UBA'},
    {
      value: 'UBA',
    },
    {
      value: 'UBA',
    },
    {
      value: 'UBA',
    },
    // Add more currencies and their flag images as needed
  ];
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.notificationIconHolder} onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={30} />
      </TouchableOpacity>
      
      <Text style={styles.title}>Via Bank</Text>

      {/* Lorem Ipsum Text */}
      <Text style={styles.loremText}>
        Add your bank account where you can withdraw to.
      </Text>
      
      <Text style={styles.loremText2}>Enter your BVN number</Text>

      <View style={styles.textInput}>
        <TextInput style={styles.input}
            placeholder="040*****254" 
            value={BVN}
            maxLength={11}
            onChangeText={(text) => setBVN(text)}
            keyboardType='numeric'
        />
      </View>

      <Text style={styles.loremText2}>Select bank</Text>
      <View style={styles.currencyPicker}>
          <Picker
            style={styles.picker}
            selectedValue={selectedBank}
            onValueChange={setSelectedBank}
          >
            {availableBank.map((currency) => (
              <Picker.Item
                key={currency.value}
                label={currency.value}
                value={currency.value}
                // You can customize the item's appearance here
              />
            ))}
          </Picker>
        </View>

      <TouchableOpacity
        style={[
          styles.createButton,
          { backgroundColor: isBVNValid ? '#ACF279' : 'lightgray' },
        ]}
        disabled={!isBVNValid}
      >
        <Text style={styles.createButtonText}>Continue</Text>
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
    targetIcon: {
      backgroundColor: '#567339',
      padding: 10,
      width: 50,
      borderRadius: 10,
      marginBottom: 10,
    },
    loremText: {
      color: 'gray',
      fontSize: 16,
      marginTop: 10,
      marginBottom: 5,
    },
    loremText2: {
      fontSize: 17,
      fontWeight: '500',
      marginTop: 10,
      marginBottom: 5,
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
});

export default ViaBank
