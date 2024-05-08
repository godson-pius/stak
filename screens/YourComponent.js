import React, { useEffect, useRef } from "react";
import { View, Text, Animated, Easing  } from 'react-native';
import LottieView from 'lottie-react-native';


const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const YourComponent = () => {
    const animationProgress = useRef(new Animated.Value(0));

    useEffect(() => {
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }, []);
  
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <LottieView
//         source={require('../components/Loading_Anim.json')} // Update the path accordingly
//         autoPlay
//         loop
//       />
//       <Text>afjdhasdfhis</Text>
//     </View>
//   );
// return (
//     <AnimatedLottieView
//       source={require("../components/Loading_Anim.json")}
//       progress={animationProgress.current}
//       style={{width: "100%", height: "100%"}}
//     />
//   );
// };
return (
    <AnimatedLottieView
      source={require("../components/Splash_Screen.json")}
      progress={animationProgress.current}
      style={{width: "100%", height: "100%", backgroundColor: '#1E4006'}}
    />
  );
};

export default YourComponent;
