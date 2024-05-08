import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useAuth } from '../../components/AppProvider';

const ResetPassword = ({ navigation, route }) => {
    const { phoneNumber, otp } = route.params;

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };
  
    const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword((prev) => !prev);
    };
  
    const hasMinimumLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+={}[\]:;<>,.?~\\/-]/.test(password);
  
    const isPasswordValid = hasMinimumLength && hasUppercase && hasSpecialCharacter;
  
    const isPasswordsSame = password === confirmPassword;

    const authContext = useAuth();

    const resetPassword = async () => {
      const data = { phoneNumber, otp, password }
      console.log(data);
        try{
          const res = await authContext.resetPassword(phoneNumber, otp, password);
          console.log(res);
          if (res?.data?.isSuccessful) {
            navigation.navigate('Verify2');
          } else {
            Alert.alert('Please check OTP or phone number')
          }
        }catch(error){
          console.log(error);
        }
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.notificationIconHolder} onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-left" size={30} />
        </TouchableOpacity>
        <Text style={styles.title}>Reset password</Text>
        <Text style={styles.loremText}>
          Set up a unique password to sequre your account
        </Text>
  
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
  
        {/* Confirm Password Input */}
        <Text style={styles.subHeaders}>Confirm password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="lightgray"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeIcon}>
            <MaterialIcons
              name={showConfirmPassword ? 'visibility-off' : 'visibility'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
  
        
        
        <Text style={styles.loremTextHeader}>Your password must contain:</Text>
        <View style={styles.checkersContainer}>
          <View style={styles.checker}>
            {password.length >= 8 ?
             <AntDesign name='checkcircle' size={18} color={'#ACF279'}/>
            : 
            <AntDesign name='checkcircle' size={18} color={'gray'}/>}
            <Text style={styles.loremText2}>Minimum 8 characters</Text>
          </View>
  
          <View style={styles.checker}>
            {hasUppercase ?
              <AntDesign name='checkcircle' size={18} color={'#ACF279'}/>
              :
              <AntDesign name='checkcircle' size={18} color={'gray'}/>}
            <Text style={styles.loremText2}>At least one UPPERCASE letter</Text>
          </View>
  
          <View style={styles.checker}>
            {hasSpecialCharacter ?
            <AntDesign name='checkcircle' size={18} color={'#ACF279'}/>
            :
            <AntDesign name='checkcircle' size={18} color={'gray'}/>}
            <Text style={styles.loremText2}>At least one special character</Text>
          </View>
        </View>
  
        <TouchableOpacity
          style={[styles.selected, { backgroundColor: isPasswordValid && isPasswordsSame ? '#ACF279' : 'lightgray' }]}
          disabled={!isPasswordValid || !isPasswordsSame}
          onPress={() => resetPassword()}
        >
          <Text style={[styles.nextButtonText, { color: isPasswordValid ? 'black' : 'gray' }]}>Continue</Text>
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
        paddingTop: 24,
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

});

export default ResetPassword
