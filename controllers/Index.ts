import axios from "axios";
import { User } from '../interfaces/user';

const AUTHBASEURL = 'https://dev.api.payment.stakfinance.com/api';
const PAYMENTBASEURL = 'https://dev.api.auth.stakfinance.com/api';

export const sendOtp = async (data: { phoneNumber: string }) => {
  try {
    const res = await axios.post(`${AUTHBASEURL}/Auth/ResendPhoneOtp`, data)
    return res
  } catch (error) {
    return error
  }
}

//  Controller to confirm phone number
export const confirmPhoneNumber = async (data: { phoneNumber: string, opt: string }) => {
  try {
    const res = await axios.post(`${AUTHBASEURL}/Auth/ConfirmPhoneNumber`, data)
    return res
  } catch (error) {
    return error
  }
}

// Controller to register user
export const registerUser = async(data: User) => {
  try {
    const res = await axios.post(`${AUTHBASEURL}/Auth/Register`, data)
    return res
  } catch (error) {
    return error
  }
}

// Controller to login user
export const loginUser = async(data: { phoneNumber: string, password: string }) => {
  try {
    const res = await axios.post(`${AUTHBASEURL}/Auth/Login`, data)
    return res
  } catch (error) {
    return error
  }
}
