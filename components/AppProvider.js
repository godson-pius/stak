import React, { createContext, useContext, useState, useEffect, } from 'react';
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import App from '../App';
//npm i @react-native-community/async-storage

// Define the base URL for the API
const BASE_URL = 'https://dev.api.auth.stakfinance.com/api';
const PAYMENT_BASE_URL = 'https://dev.api.payment.stakfinance.com/api'

// Create a context for authentication
const AppContext = createContext();

// Custom hook to use the AppContext
export const useAuth = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadOnboarding, setLoadOnboarding] = useState(true);
  const [dummyUser, setDummyUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const test = await AsyncStorage.getItem('loadOnboarding');
    // console.log(test)
    // setLoadOnboarding(JSON.parse(test));
    const loadOnboardingStatus = async () => {
        try {
            const value = await AsyncStorage.getItem('loadOnboarding');
            if (value !== null) {
                // Value previously stored
                setLoadOnboarding(JSON.parse(value));
            }
        } catch (e) {
            // Error reading value
            console.log(e);
        }
    };
    
    loadOnboardingStatus();
  }, []);

  // Function to handle registration
  const register = async (userData) => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/Auth/Register`, userData);
      console.log(response)
      setDummyUser(response.data);
      setLoading(false);
      return response;
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
      return error
    }
  };

  const userUpdateState = async (userData) => {
    try {
      await setUser(dummyUser);
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };

  // Function to handle login
  const login = async (phoneNumber, password) => {
    try {
      const loginData = {phoneNumber, password};
      console.log('Sign In Data Third test wdassa:', { phoneNumber, password });
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/Auth/Login`, loginData);
      
      setLoading(false);
      // Check if the response indicates a successful login
      setUser(response.data);

      return response;
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };

  // Function to confirm phone number with OTP
  const confirmPhoneNumber = async (phoneNumber, otp) => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/Auth/ConfirmPhoneNumber`, { phoneNumber, otp });
      // setUser(response.data);
      console.log(user);
      // setUser(dummyUser);
      setLoading(false);
      return response;
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };

  // Function to update password
  const updatePassword = async (phoneNumber, currentPassword, newPassword, confirmPassword) => {
    try {
      setLoading(true);
      const requestData = {
        phoneNumber,
        currentPassword,
        newPassword,
        confirmPassword,
      };
      const response = await axios.post(`${BASE_URL}/Auth/UpdatePassword`, requestData);
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.code);
      console.log(error);
      setLoading(false);
    }
  };

  // Function to resend OTP
  const resendPhoneOtp = async (phoneNumber) => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/Auth/ResendPhoneOtp`, { phoneNumber });
      setLoading(false);
      return response;
    } catch (error) {
      setError(error);
      setLoading(false);
      return error
    }
  };

  const resetPassword = async (phoneNumber, otp, password) => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/Auth/ResetPassword`, { phoneNumber, otp, password });
      setLoading(false);
      return response;
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
      return error
    }
  };

  // Function to log out
  const logout = () => {
    setUser(null);
  };

  
  // Function to log out
  const setOnboarding = async (state) => {
    try {
        await AsyncStorage.setItem('loadOnboarding', JSON.stringify(state));
        setLoadOnboarding(state);
    } catch (error) {
        console.log(error);
    }
  };



  //  USER

  const updateEmail = async (userId, newEmail) => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/User/UpdateEmail`, { userId, newEmail });
      // Handle the response as needed
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };

  const confirmEmail = async (userId, emailOtp) => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/User/ConfirmEmail`, { userId, emailOtp });
      // Handle the response as needed
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };

  const resendEmailOtp = async (userId) => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/User/ResendEmailOtp`, { userId });
      // Handle the response as needed
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };
  
  const updateSecurityQuestion = async (userId, securityQuestion, securityQuestionAnswer) => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/User/UpdateSecurityQuestion`, {
        userId,
        securityQuestion,
        securityQuestionAnswer,
      });
      // Handle the response as needed (e.g., setUser(response.data))
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };  

  const confirmPin = async (userId, pin) => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/User/ConfirmPin`, { userId, pin });
      setUser(response.data);
      setLoading(false);
      return response
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
      return error
    }
  };

  const confirmStakUser = async (userId, stakUserId) => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/User/ConfirmStakUser`, { userId, stakUserId });
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };
  
  const getAllUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/User/AllUsers`);
      // Handle the response as needed (e.g., setUser(response.data))
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };

  // Payment Services
  const getUserBalance = async (data) => {
    try {
      setLoading(true);
      const response = await axios.get(`${PAYMENT_BASE_URL}/Wallet?totalWalletBalCurrency=${data.currency}`, {
        headers: { 'Authorization': `Bearer ${data.token}` }
      });

      // Handle the response as needed (e.g., setUser(response.data))
      setLoading(false);
      return response;
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };

  const getUserSavingsBalance = async (token) => {
    try {
      setLoading(true);
      const response = await axios.get(`${PAYMENT_BASE_URL}/Wallet/Savings`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      // Handle the response as needed (e.g., setUser(response.data))
      setLoading(false);
      return response;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const creditNairaWallet = async (data, token) => {
    try {
      setLoading(true);
      const response = await axios.post(`${PAYMENT_BASE_URL}/Wallet/CreditNgnWallet`, data, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      // Handle the response as needed (e.g., setUser(response.data))
      setLoading(false);
      return response;
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };

  const creditDollarWallet = async (data, token) => {
    try {
      setLoading(true);
      const response = await axios.post(`${PAYMENT_BASE_URL}/Wallet/Wallet/CreditGbpWallet`, data, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      // Handle the response as needed (e.g., setUser(response.data))
      setLoading(false);
      return response;
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };
  
  const transferToUser = async (data, token) => {
    try {
      setLoading(true);
      const response = await axios.post(`${PAYMENT_BASE_URL}/Wallet/Wallet/TransferToStakUser`, data, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      // Handle the response as needed (e.g., setUser(response.data))
      setLoading(false);
      return response;
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };

  const paystackPayment = async (data, token) => {
    try {
      setLoading(true);
      const response = await axios.post(`${PAYMENT_BASE_URL}/Paystack/InitiateIntent`, data, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      // Handle the response as needed (e.g., setUser(response.data))
      setLoading(false);
      return response;
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };

  // Provide the authentication context
  return (
    <>
      <AppContext.Provider
        value={{
          user,
          loading,
          error,
          loadOnboarding,
          register,
          userUpdateState,
          login,
          confirmPhoneNumber,
          updatePassword,
          resendPhoneOtp,
          resetPassword,
          logout,
          setOnboarding,
          confirmPin, // Add confirmPin function
          confirmStakUser, // Add confirmStakUser function
          getAllUsers, // Add getAllUsers function
          getUserBalance, // Getting user balance
          creditNairaWallet, // Credit naira wallet
          creditDollarWallet, // Credit dollar wallet
          transferToUser, // Transfer to user on stak
          paystackPayment,
          getUserSavingsBalance,
        }}
      >
        {children}
      </AppContext.Provider>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  loadingContainer: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: 'rgba(255,255,255,0.7)', // Semi-transparent white background
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure the loader is above everything
  },
});

export default AppProvider;
