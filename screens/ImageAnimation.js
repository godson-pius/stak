import React, { useRef, useEffect } from 'react';
import { Image, View } from 'react-native';
import Animated, { Easing, Clock, Value, block, set, timing, startClock, stopClock } from 'react-native-reanimated';

import animationData from '../components/Loading_Anim.json';


const ImageAnimation = () => {
  const clock = useRef(new Clock());
  const imageIndex = useRef(new Value(0));

  const config = {
    duration: 500, // Adjust as needed
    toValue: animationData.length - 1,
    easing: Easing.linear,
  };

  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const onAnimate = block([
    timing(clock.current, state, config),
    set(imageIndex.current, state.position),
  ]);

  useEffect(() => {
    const animationLoop = startClock(clock.current);

    return () => {
      stopClock(clock.current);
    };
  }, []);
   
    return (
    //    <View>
    //      {/* <Animated.Code>
    //        {() => block([startClock(clock), onAnimate, stopClock(clock)])}
    //      </Animated.Code>
    //      <Animated.Image
    //        source={{ uri: animationData[imageIndex.value] }}
    //        style={{ width: 200, height: 200, ...animatedStyles }}
    //      /> */}
    //      <Text>Check the console to see the JSON data.</Text>
    //    </View>
    <View>
      <Animated.Code>
        {() => block([onAnimate])}
      </Animated.Code>
      {/* <Image
        source={{ uri: `data:image/png;base64,${animationData[Math.round(imageIndex.current)].p}` }}
        style={{ width: 200, height: 200 }}
      /> */}
      <Image
        source={{ uri: `data:image/png;base64,${animationData}` }}
        style={{ width: 200, height: 200 }}
      />
    </View>
    );
   
}

export default ImageAnimation
