import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../components/AppProvider';
import { ActivityIndicator } from 'react-native';

import SignInScreen from '../../screens/Auth/SignInScreen';
import SignUpScreen from '../../screens/Auth/SignUpScreen';
import LogoScreen from '../../screens/Auth/LogoScreen';
import SplashScreen from '../../screens/Auth/SplashScreen';
import CreatePassword from '../../screens/Auth/CreatePassword';
import UserName from '../../screens/Auth/UserName';
import SetupPinScreen from '../../screens/Auth/SetupPinScreen';
import ConfirmPinScreen from '../../screens/Auth/ConfirmPinScreen';
import ConfirmPhoneNumber from '../../screens/Auth/ConfirmPhoneNumber';
import ResetPassword from '../../screens/Auth/ResetPassword';
import ResetPasswordCode from '../../screens/Auth/ResetPasswordCode';
import Verify2 from '../../screens/SharedScreens/Verify/Verify2';
import HowDidYouHearAboutUs from '../../screens/Auth/HowDidYouHearAboutUs';
import YouAreIn from '../../screens/Auth/YouAreIn';

const AuthStack = createStackNavigator();

const AuthNavigator = ({}) => {
    const { loadOnboarding } = useAuth();
    const [isOnboarding, setIsOnboarding] = useState(null); // Corrected variable name and initialization to null

    useEffect(() => {

        console.log('should show')
        const loadOnboardingStatus = async () => {
            const value = await AsyncStorage.getItem('loadOnboarding');

            console.log(value)
            setIsOnboarding(JSON.parse(value)); // Directly use setIsOnboarding

            if (value === null) {
                setIsOnboarding(true);
            }
        };
        loadOnboardingStatus();
    }, []);

    if (isOnboarding === null) {
        // Show loading indicator while checking onboarding status
        return <ActivityIndicator size="large" />;
    }

    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            {/* <AuthStack.Screen name="Splash" component={SplashNavigator} /> */}
            {isOnboarding ? (
                <>
                    <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
                    <AuthStack.Screen name="SignUpSplash" component={SignUpScreen} />
                    <AuthStack.Screen name="ConfirmPhoneNumber" component={ConfirmPhoneNumber} />
                    <AuthStack.Screen name="UserName" component={UserName} />
                    <AuthStack.Screen name="CreatePassword" component={CreatePassword} />
                </>
            ) : (
                <>
                    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
                    <AuthStack.Screen name="SignIn" component={SignInScreen} />
                    <AuthStack.Screen name="ConfirmPhoneNumber" component={ConfirmPhoneNumber} />
                    <AuthStack.Screen name="CreatePassword" component={CreatePassword} />
                    <AuthStack.Screen name="ResetPasswordCode" component={ResetPasswordCode} />
                    <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
                    <AuthStack.Screen name="Verify2" component={Verify2} />
                    <AuthStack.Screen name="UserName" component={UserName} />
                    <AuthStack.Screen name="SetupPinScreen" component={SetupPinScreen} />
                    <AuthStack.Screen name="ConfirmPinScreen" component={ConfirmPinScreen} />
                    <AuthStack.Screen name="HowDidYouHearAboutUs" component={HowDidYouHearAboutUs} />
                    <AuthStack.Screen name="YouAreIn" component={YouAreIn} />
                </>
            )}
        </AuthStack.Navigator>
    );
};

const SplashNavigator = () => {
    const { loadOnboarding } = useAuth();
    return loadOnboarding? <SplashScreen /> : <SignUpScreen/>
}


    export default AuthNavigator
