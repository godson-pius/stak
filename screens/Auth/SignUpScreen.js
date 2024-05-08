// SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import { useAuth } from '../../components/AppProvider';


const SignUpScreen = ({ navigation }) => {
  const [screen, setScreen] = useState('CountrySelection');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [number, setNumber] = useState('');

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
  };

  const isCountrySelected = (country) => {
    return selectedCountry === country;
  };
  const isButtonClickable = selectedCountry !== '';

  const nextPress = () => {
    setScreen("PhoneNumberInput")
  }

  
  const prevPress = () => {
    setScreen("CountrySelection")
  }
  
  const authContext = useAuth();

  const handleSendOtp = async () => {
    const phoneNumber = selectedCountry === 'Nigeria'? `+234${number}` : `+44${number}`;
    // try {
    //   const response = await axios.post('https://dev.api.auth.stakfinance.com/api/Auth/ResendPhoneOtp', {
    //     phoneNumber
    //   });

    //   // Handle successful OTP resend
    //   console.log('OTP resent successfully:', response.data);
    //   // navigation.navigate('ConfirmPhoneNumber', {selectedCountry, phoneNumber});
    //   // Navigate to the next step or perform any other action
    // } catch (error) {
    //   // Handle OTP resend error
    //   console.error('OTP resend failed:', error);
    //   // Display error message to the user
    // }
    // navigation.navigate('UserName', {selectedCountry, phoneNumber});
    
    console.log(phoneNumber);
    try{
      await authContext.resendPhoneOtp(phoneNumber);
  
      navigation.navigate('ConfirmPhoneNumber', {selectedCountry, phoneNumber});
    }
    catch(error){
      console.log(error);
    }
  };

  const CountrySelection = () => {
    return (
      <View style={styles.countryContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Let's get you started</Text>
        </View>
        <View style={styles.addCardContainer}>
          <View style={styles.addCardButton}>
            {/* Use the flag icons instead of the card icon */}
            <Text>{/* Country Flag 1 */}</Text>
            <View style={{width: '15%'}}>
              <Image source={require('../../images/NigeriaFlag.png')} style={styles.countryImage}/>
            </View>
            <View style={{width: '60%', alignItems: 'flex-start'}}>
              <Text style={styles.selectionText}>Nigeria</Text>
            </View>
            
            <View style={{width: '25%', alignItems: 'flex-end'}}>
              <TouchableOpacity
                style={[
                  styles.customChecker,
                  { backgroundColor: isCountrySelected('Nigeria') ? '#ACF279' : 'transparent' },
                ]}
                onPress={() => handleCountrySelection('Nigeria')}
              />
            </View>
          </View>
        </View>
  
        <View style={styles.addCardContainer}>
          <View style={styles.addCardButton}>
            {/* Use the flag icons instead of the card icon */}
            <Text>{/* Country Flag 1 */}</Text>
            <View style={{width: '15%'}}>
              <Image source={require('../../images/UKFlag.png')} style={styles.countryImage}/>
            </View>
            <View style={{width: '60%', alignItems: 'flex-start'}}>
              <Text style={styles.selectionText}>United Kingdom</Text>
            </View>
            
            <View style={{width: '25%', alignItems: 'flex-end'}}>
              <TouchableOpacity
                style={[
                  styles.customChecker,
                  { backgroundColor: isCountrySelected('UnitedKingdom') ? '#ACF279' : 'transparent' },
                ]}
                onPress={() => handleCountrySelection('UnitedKingdom')}
              />
            </View>
          </View>
        </View>
  
        
        <View style={styles.textContainer}>
          <Text style={styles.linkText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={[styles.linkText, styles.link]}>Login</Text>
          </TouchableOpacity>
        </View>
  
        
          {selectedCountry === null &&
            <TouchableOpacity style={styles.selectionNull} disabled>
                <Text style={styles.nextButtonText}>Continue</Text>
            </TouchableOpacity>}
          {selectedCountry !== null &&
            <TouchableOpacity style={styles.selected} onPress={() => nextPress()}>
                <Text style={styles.nextButtonText}>Continue</Text>
            </TouchableOpacity>}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {screen === "CountrySelection" && <CountrySelection/>}
      {screen === "PhoneNumberInput" &&
      <View style={{width: '100%',}}>
        <TouchableOpacity style={styles.notificationIconHolder} onPress={() => prevPress()}>
          <MaterialIcons name="keyboard-arrow-left" size={30} />
        </TouchableOpacity>
        <Text style={styles.title}>Enter Your Number</Text>
        <Text style={styles.loremText}>
            We will be sending a four digit pin to your number so make sure you enter a number you are using
        </Text>
        <View style={{flexDirection: 'row', width: '100%', marginBottom: 10, alignItems: 'center',}}>

          {selectedCountry === 'Nigeria' ? 
            <View style={{width: '30%', flexDirection: 'row', alignItems: 'center',}}>
              <View style={{width: '45%'}}>
                <Image source={require('../../images/NigeriaFlag.png')} style={styles.countryImage}/>
              </View>
              <View style={{width: '55%'}}>
                <Text style={styles.noText}>+234</Text>
              </View>
            </View>
          : 
            <View style={{width: '30%', flexDirection: 'row',}}>
              <View style={{width: '45%'}}>
                <Image source={require('../../images/UKFlag.png')} style={styles.countryImage}/>
              </View>
              <View style={{width: '55%'}}>
                <Text style={styles.noText}>+44</Text>
              </View>
            </View>
          }
          <TextInput style={styles.input} placeholder="" value={number}
            keyboardType='numeric'
            onChangeText={(value) => {
              setNumber(value)
            }}
          />
        </View>

        {number === '' &&
          <TouchableOpacity style={styles.selectionNull} disabled>
              <Text style={styles.nextButtonText}>Continue</Text>
          </TouchableOpacity>}
        {number !== '' &&
          <TouchableOpacity style={styles.selected} onPress={() => handleSendOtp()}>
              <Text style={styles.nextButtonText}>Continue</Text>
          </TouchableOpacity>}
      </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    // alignItems: 'center',
    paddingTop: 24,
  },
  countryContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  input: {
    height: 50,
    width: '70%',
    fontSize: 17,
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey'
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  loremText: {
    fontSize: 14,
    marginBottom: 20,
  },
  noText: {
    fontSize: 16,
    fontWeight: '500',
  },
  selectionText: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
  },
  linkText: {
    marginRight: 5,
  },
  link: {
    fontWeight: 'bold',
    borderBottomWidth: 1,
    color :'#142601',
  },
  notificationIconHolder: {
    marginTop: 30,
    marginBottom: 10,
  },
  addCardContainer: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row', // Adjusted to a row layout
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
  addCardDescription: {
    marginTop: 8,
    color: 'gray',
    marginBottom: '10%',
  },
  linkedCardHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },
  linkedCardDescription: {
    marginTop: 8,
    color: 'gray',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginBottom: 16,
  },
  customChecker: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ACF279',
    marginLeft: 8,
  },
  countryImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  selected: {
    backgroundColor: '#ACF279',
    marginTop: 20,
    padding: 10,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
  },
  selectionNull: {
    backgroundColor: 'lightgray',
    marginTop: 20,
    padding: 10,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default SignUpScreen;
