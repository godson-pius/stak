import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import AppProvider, { useAuth } from './components/AppProvider';

import AuthNavigator from './navigation/authStack/AuthNavigator';
import HomeTab from './navigation/HomeTab';
import InvestDetails from './screens/invest/InvestDetails';
import PreviewScreen from './screens/invest/PreviewScreen';
import ConfirmPinScreen from './screens/invest/ConfirmPinScreen';
import ConfirmPinScreenFinal from './screens/others/ConfirmPinScreenFinal';
import StakBankScreen from './screens/wallet/StakBankScreen';
import StartTargetSteps from './screens/save/OverviewStack/StartTargetSteps';
import CreateStakLock from './screens/save/OverviewStack/Inner/CreateStakLock';
import TestScreen from './screens/TestScreen';
import StakTarget from './screens/save/OverviewStack/StackTarget/StakTarget';
import StakTarget1 from './screens/save/OverviewStack/StackTarget/StakTarget1';
import StakTarget2 from './screens/save/OverviewStack/StackTarget/StakTarget2';
import StakTarget3 from './screens/save/OverviewStack/StackTarget/StakTarget3';
import StakTarget4 from './screens/save/OverviewStack/StackTarget/StakTarget4';
import StakTarget5 from './screens/save/OverviewStack/StackTarget/StakTarget5';
import Swap from './screens/wallet/stackbank/Swap';
import Swap1 from './screens/wallet/stackbank/Swap1';
import Swap2 from './screens/wallet/stackbank/Swap2';
// import Swap3 from './screens/wallet/stackbank/Swap3';
import Swap3 from './screens/wallet/stackbank/Swap3';
import Swap4 from './screens/wallet/stackbank/Swap4';
import AddMoney from './screens/SharedScreens/Addmoney/AddMoney';
import AddMoney1 from './screens/SharedScreens/Addmoney/AddMoney1';
import AddMoney2 from './screens/SharedScreens/Addmoney/AddMoney2';
import CreditYourWallet from './screens/SharedScreens/Addmoney/CreditYourWallet';
import ConfirmAmount from './screens/SharedScreens/Addmoney/ConfirmAmount';
import CardDetails from './screens/SharedScreens/Addmoney/CardDetails';
import CardDetails1 from './screens/SharedScreens/Addmoney/CardDetails1';
import Withdraw from './screens/SharedScreens/Withdraw/Withdraw';
import Withdraw1 from './screens/SharedScreens/Withdraw/Withdraw1';
import Verify2 from './screens/SharedScreens/Verify/Verify2';
import TransferScreen from './screens/wallet/stackbank/transfer/TransferScreen';
import HowDidYouHearAboutUs from './screens/Auth/HowDidYouHearAboutUs';
import Verify from './screens/SharedScreens/Verify/Verify';
import Verify1 from './screens/SharedScreens/Verify/Verify1';
import YouAreIn from './screens/Auth/YouAreIn';
import Kyc from './screens/others/Kyc';
import Kyc1 from './screens/others/Kyc1';
import Kyc2 from './screens/others/Kyc2';
import DriversLicenseVerification from './screens/others/DriversLicenseVerification';
import NINVerification from './screens/others/NINVerification';
import NINVerification1 from './screens/others/NINVerification1';
import VotersIDVerification from './screens/others/VotersIDVerification';
import VerifyFinal from './screens/others/VerifyFinal';
import SwapMain from './screens/wallet/stackbank/SwapMain';
import TransferScreen2 from './screens/wallet/stackbank/transfer/TransferScreen2';
import Referral from './screens/others/Referral';
import SecurityQuestion from './screens/others/SecurityQuestion';
import SecurityQuestion1 from './screens/others/SecurityQuestion1';
import OverviewScreen from './screens/save/OverviewStack/OverviewScreen';
import StakFlex from './screens/save/OverviewStack/StakFlex';
import StakLock from './screens/save/OverviewStack/StakLock';
import InvestScreen from './screens/invest/InvestScreen';
import PreviewLock from './screens/save/OverviewStack/Inner/PreviewLock';
import VerifyLock from './screens/save/OverviewStack/Inner/VerifyLock';
import Send from './screens/wallet/Send';
import KycQuestions from './screens/others/KycQuestions';
// import Referral from './screens/others/Referral';
// import Swap5 from './screens/wallet/stackbank/Swap';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

function AppContent() {
  return (
    // <YouAreIn/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Maingf" component={Send} /> */}
        <Stack.Screen name="Main" component={MainNavigator} />
        <Stack.Screen name="InvestDetails" component={InvestDetails} />
        <Stack.Screen name="PreviewScreen" component={PreviewScreen} />
        <Stack.Screen name="ConfirmPinScreen" component={ConfirmPinScreen} />
        <Stack.Screen name="StakBankScreen" component={StakBankScreen} />
        <Stack.Screen name="SwapMain" component={SwapMain} />
        <Stack.Screen name="Swap1" component={Swap1} />
        <Stack.Screen name="Swap2" component={Swap2} />
        <Stack.Screen name="Swap3" component={Swap3} />
        <Stack.Screen name="StartTargetSteps" component={StartTargetSteps} />
        <Stack.Screen name="StakTargetFinal" component={StakTarget1} />
        <Stack.Screen name="StakTarget2" component={StakTarget2} />
        <Stack.Screen name="StakTarget3" component={StakTarget3} />
        <Stack.Screen name="StakTarget4" component={StakTarget4} />
        <Stack.Screen name="BankStakTarget" component={StakTarget} />
        <Stack.Screen name="FInalStakTarget" component={StakTarget5} />
        <Stack.Screen name="CreateStakLock" component={CreateStakLock} />
        <Stack.Screen name="PreviewLock" component={PreviewLock} />
        <Stack.Screen name="PreviewScreenStakLock" component={PreviewLock} />
        <Stack.Screen name="AddMoney" component={AddMoney} />
        <Stack.Screen name="AddMoney1" component={AddMoney1} />
        <Stack.Screen name="CreditYourWallet" component={CreditYourWallet} />
        <Stack.Screen name="CardDetails" component={CardDetails} />
        <Stack.Screen name="CardDetails1" component={CardDetails1} />
        <Stack.Screen name="ConfirmAmount" component={ConfirmAmount} />
        <Stack.Screen name="Send" component={Send} />
        <Stack.Screen name="Withdraw" component={Withdraw} />
        <Stack.Screen name="Withdraw1" component={Withdraw1} />
        <Stack.Screen name="VerifyTarget" component={Verify} />
        <Stack.Screen name="Verify2" component={Verify2} />
        <Stack.Screen name="TransferScreen" component={TransferScreen} />
        <Stack.Screen name="TransferScreen2" component={TransferScreen2} />
        <Stack.Screen name="HowDidYouHearAboutUs" component={HowDidYouHearAboutUs} />
        <Stack.Screen name="Referral" component={Referral} />
        <Stack.Screen name="SecurityQuestion" component={SecurityQuestion} />
        <Stack.Screen name="Kyc" component={Kyc} />
        <Stack.Screen name="Kyc1" component={Kyc1} />
        <Stack.Screen name="Kyc2" component={Kyc2} />
        <Stack.Screen name="DriversLicenseVerification" component={DriversLicenseVerification} />
        <Stack.Screen name="NINVerification" component={NINVerification} />
        <Stack.Screen name="NINVerification1" component={NINVerification1} />
        <Stack.Screen name="KycQuestions" component={KycQuestions} />
        <Stack.Screen name="VotersIDVerification" component={VotersIDVerification} />
        <Stack.Screen name="dssd" component={ConfirmPinScreen } />
        <Stack.Screen name="ConfirmPinScreenFinal" component={ConfirmPinScreenFinal } />
        <Stack.Screen name="VerifyFinal" component={VerifyFinal } />
        <Stack.Screen name="VerifyLock" component={VerifyLock } />
      </Stack.Navigator>
      <StatusBar translucent />
    </NavigationContainer>
  );
}

function MainNavigator() {
  const { user } = useAuth();
  return user ? <HomeTab /> : <AuthNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
