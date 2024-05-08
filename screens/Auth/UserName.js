import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const UserName = ({ navigation, route }) => {
    const { phoneNumber, selectedCountry } = route.params;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState(new Date(2024, 1, 20) );
    const [showDatePicker, setShowDatePicker] = useState(false);

    const confirmNameFields = firstName !== '' && lastName !== '';
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Let's get to meet you</Text>

        <View style={styles.spacing}></View>

        <Text style={styles.subHeaders}>What's your name</Text>
        <Text style={styles.loremText}>
          We prefer using legal names
        </Text>
  
        <Text style={styles.subHeaders}>First name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Rose"
            placeholderTextColor="gray"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
        </View>
  
        {/* Confirm Password Input */}
        <Text style={styles.subHeaders}>Last name</Text>
        <View style={[styles.inputContainer, {marginBottom: 30}]}>
          <TextInput
            style={styles.input}
            placeholder="Mikes"
            placeholderTextColor="gray"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
        </View>

        
        <View style={styles.spacing}></View>

        
        <Text style={styles.subHeaders}>When were you born</Text>
        <Text style={styles.loremText}>
          We need this information to ensure safety
        </Text>

        <TouchableOpacity style={styles.dateInput} onPress={() => setShowDatePicker(true)}>
                {/* Date of Birth Picker */}
                <View>
                    <Text style={styles.dateText}>{dob.toDateString()}</Text>
                </View>
            </TouchableOpacity>

            
            {showDatePicker && (
                <DateTimePicker
                value={dob}
                mode="date"
                display="spinner"
                onChange={(event, selectedDate) => {
                    setShowDatePicker(false);
                    setDob(selectedDate || dob);
                }}
                />
            )}
  
        <TouchableOpacity
          style={[styles.selected, { backgroundColor: confirmNameFields ? '#ACF279' : 'lightgray' }]}
          disabled={!confirmNameFields}
          onPress={() => {
            // Continue button action
            navigation.navigate('CreatePassword', {firstName, lastName, selectedCountry, phoneNumber});
          }}
        >
          <Text style={[styles.nextButtonText, { color: confirmNameFields ? 'black' : 'gray' }]}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: '5%',
        // alignItems: 'center',
        paddingTop: 50,
    },
  checkersContainer: {
    marginBottom: 10,
  },
  selected: {
    backgroundColor: '#ACF279',
    marginTop: 35,
    padding: 10,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
  },
  notificationIconHolder: {
    marginTop: 30,
    marginBottom: 10,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'grey'
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
  subHeaders: {
    fontSize: 17,
    fontWeight: '500',
  },
  loremText: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 15,
    color: 'grey'
  },
  loremText2: {
    fontSize: 14,
    marginVertical: 5,
    marginLeft: 15,
    color: 'grey'
  },
  loremTextHeader: {
    fontSize: 15,
    marginVertical: 5,
    color: 'grey'
  },
  checker: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkerText: {
    flex: 1,
    marginRight: 10,
  },
  checkerValid: {
    color: 'green',
    fontSize: 20,
  },
  checkerInvalid: {
    color: 'red',
    fontSize: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: 'gray',
    paddingLeft: 10,
    marginRight: 10,
  },
  eyeIcon: {
    padding: 10,
  },
  spacing: {
    backgroundColor: 'lightgray',
    height: 8,
    width: '70%',
    marginBottom: 20,
    borderRadius: 5,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  dateText: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 8,
  },
});

export default UserName
