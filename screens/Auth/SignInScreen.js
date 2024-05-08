import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useAuth } from '../../components/AppProvider';
import axios from 'axios';
import { Alert } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const authContext = useAuth();

  const SignIn = async () => {

    // Validate inputs
    if (!phoneNumber || !password) {
      Alert.alert('Validation Error', 'Please fill in all required fields.');
      return;
    }

    // Implement your sign-in logic here
    // You may want to add validation and error handling
    console.log('Sign In Data:', { phoneNumber, password });

    // await authContext.login(phoneNumber, password);
    const res = await authContext.login(phoneNumber, password);
    if (res?.data?.isSuccessful) {
      console.log("Success")
    } else {
      Alert.alert("Login failed", 'Please check fields and try again.');
    }
  }

  const ForgotPassword = async () => {
    if (phoneNumber != '') {
        if (phoneNumber.startsWith('+')) {
          try {
            const res = await authContext.resendPhoneOtp(phoneNumber);
            if (res.data?.isSuccessful) {
              Alert.alert(res.data?.message)
              navigation.navigate('ResetPasswordCode', { phoneNumber });
            }
          }
          catch (error) {
            console.log(error);
          }
        } else {
          Alert.alert('Number format not accepted! Must start with country code.')
        }
    } else {
      Alert.alert('No phone input', 'Please input phone number.');
    }
  }

  const isFieldsFull = phoneNumber !== '' && password !== '';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.loremText}>
        Let's pick up from where you stopped on your last visit
      </Text>

      <Text style={styles.subHeaders}>Phone number</Text>

      <TextInput style={styles.phoneInput} placeholder="+23482*****789" value={phoneNumber}
        onChangeText={(value) => {
          setPhoneNumber(value)
        }}
      />

      {/* Confirm Password Input */}
      <Text style={styles.subHeaders}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="lightgray"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <MaterialIcons name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.linkText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[styles.linkText, styles.link]}>Create account</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.selected, { backgroundColor: isFieldsFull ? '#ACF279' : 'lightgray' }]}
        disabled={!isFieldsFull}
        onPress={() => SignIn()}
      >
        <Text style={[styles.nextButtonText, { color: isFieldsFull ? 'black' : 'gray' }]}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.forgotPasswordHolder}>
        <TouchableOpacity onPress={() => ForgotPassword()}>
          <Text style={[styles.linkText, styles.link]}>You forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    marginTop: 10,
    width: '100%',
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
    marginTop: 30,
    width: '100%',
  },
});

export default SignInScreen;
