import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useAuth } from '../../components/AppProvider';
import axios from 'axios';
import { Alert } from 'react-native';


const ResetPasswordCode = ({ navigation, route }) => {
  const { phoneNumber } = route.params;

  const [otp, setOtp] = useState('');
  const [showCode, setShowCode] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const toggleCodeVisibility = () => {
    setShowCode((prev) => !prev);
  };

  const authContext = useAuth();

  const Confirm = async () => {
    setIsLoading(true);

    navigation.navigate('ResetPassword', { phoneNumber, otp });
    setIsLoading(false);
  }

  const lostAccessTOPhoneNumber = () => {
    //   navigation.navigate('ResetPassword', {phoneNumber});
  }

  const resendCode = async () => {
    const res = await authContext.resendPhoneOtp(phoneNumber);
    if (res.data?.isSuccessful) {
      Alert.alert(res.data?.message)
    }
  }

  const isFieldsFull = otp.length === 4;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.loremText}>
        Enter the code sent to your phone number. The code expires in 5 mins
      </Text>

      {/* Confirm Password Input */}
      <Text style={styles.subHeaders}>Code</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="xxxx"
          placeholderTextColor="lightgray"
          secureTextEntry={!showCode}
          value={otp}
          maxLength={4}
          keyboardType="numeric"
          onChangeText={(text) => setOtp(text)}
        />
        <TouchableOpacity onPress={toggleCodeVisibility} style={styles.eyeIcon}>
          <MaterialIcons name={showCode ? 'visibility-off' : 'visibility'} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.linkText}>Missed it?</Text>
        <TouchableOpacity onPress={() => resendCode()}>
          <Text style={[styles.linkText, styles.link]}>Resend</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.selected, { backgroundColor: isFieldsFull ? '#ACF279' : 'lightgray' }]}
        disabled={!isFieldsFull}
        onPress={() => Confirm()}
      >
        <Text style={[styles.nextButtonText, { color: isFieldsFull ? 'black' : 'gray' }]}>Confirm</Text>
      </TouchableOpacity>

      <View style={styles.forgotPasswordHolder}>
        <TouchableOpacity onPress={() => lostAccessTOPhoneNumber()}>
          <Text style={[styles.linkText, styles.link]}>You Lost access to your phone number?</Text>
        </TouchableOpacity>
      </View>
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
  input: {
    height: 50,
    width: '100%',
    fontSize: 17,
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 10,
    marginBottom: 15,
  },
  checkersContainer: {
    marginBottom: 10,
  },
  selected: {
    backgroundColor: '#ACF279',
    marginTop: 25,
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
  },
  subHeaders: {
    fontSize: 17,
    fontWeight: '500',
  },
  loremText: {
    fontSize: 16,
    marginVertical: 15,
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
    marginTop: 5,
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
  phoneInput: {
    height: 50,
    width: '100%',
    fontSize: 17,
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 15,
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 0,
    width: '100%',
    justifyContent: 'center',
  },
  linkText: {
    marginRight: 5,
  },
  link: {
    fontWeight: 'bold',
    borderBottomWidth: 1,
    color: '#142601',
  },
  forgotPasswordHolder: {
    alignItems: 'center',
    marginTop: 25,
    width: '100%',
  },
});

export default ResetPasswordCode
