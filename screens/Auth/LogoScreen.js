import React, { useEffect, useRef } from "react";
import { View, Text, Animated, Easing, StyleSheet  } from 'react-native';
import LottieView from 'lottie-react-native';


const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const Logo = ({onAnimationFinish}) => {
    const animationProgress = useRef(new Animated.Value(0));

    useEffect(() => {
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => {
        // Animation has finished, invoke the callback
        onAnimationFinish();
      });
    }, [onAnimationFinish]);
    
    
    return (
        <AnimatedLottieView
        source={require("../../components/Splash_Screen.json")}
        progress={animationProgress.current}
        style={{width: "100%", height: "100%", backgroundColor: '#1E4006'}}
        />
    );
}

const LogoScreen = ({navigation, showSplash}) => {
    const handleAnimationFinish = () => {
        if (showSplash) {
            // If showSplash is true, navigate to the SplashScreen
            navigation.navigate('SplashScreen');
        } else {
            // If showSplash is false, navigate to the SignUpScreen directly
            navigation.navigate('SignUp');
        }
    };
    
    
    return (
        <View>
            <Logo onAnimationFinish={handleAnimationFinish} />
        </View>
    );
}

const styles = StyleSheet.create({

});
export default LogoScreen
