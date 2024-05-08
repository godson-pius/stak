import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { useAuth } from '../../components/AppProvider';


const Splash1 = () => {
    return (
        <View style={{width: '100%',}}>
            <Text style={styles.title}>Experience tailored for you</Text>

            {/* Lorem Ipsum Text */}
            <Text style={styles.loremText}>
            Save and invest with options unique to your region or goals
            </Text>
            <Image source={require('../../images/Splash_1.png')} style={styles.image} />
        </View>
    )
}

const Splash2 = () => {
    return (
        <View style={{width: '100%',}}>
            <Text style={styles.title}>Exceeding the boundaries</Text>

            {/* Lorem Ipsum Text */}
            <Text style={styles.loremText}>
            Save and invest with options unique to your region or goals
            </Text>
            <Image source={require('../../images/Splash_2.png')} style={styles.image2} />
        </View>
    )
}

const Splash3 = () => {
    return (
        <View style={{width: '100%',}}>
            <Text style={styles.title}>More cash inflow</Text>

            {/* Lorem Ipsum Text */}
            <Text style={styles.loremText}>
            Save and invest with options unique to your region or goals
            </Text>
            <Image source={require('../../images/Splash_3.png')} style={styles.image2} />
        </View>
    )
}

const SplashScreen = ({navigation}) => {
  
  const [currentView, setCurrentView] = useState('Splash1');
  
  const switchView = view => {
    setCurrentView(view);
  };

  const nextPress = () => {
    console.log("Next button pressed");
    if(currentView == 'Splash1') {
        setCurrentView('Splash2');
    }else if (currentView == 'Splash2') {
        setCurrentView('Splash3');
    }
  };

  
  const authContext = useAuth();

  const loadOnboarding = authContext.loadOnboarding;

  const endSplash = async() => {
    try{
        console.log('on oarding before press is: ',loadOnboarding);
        authContext.setOnboarding(!loadOnboarding);
        navigation.navigate('SignUpSplash')
    }
    catch(error){
        console.log(error);
    }finally{
        console.log('on oarding after press is: ',loadOnboarding);
    }
  }

  return (
    <View style={styles.container}>
        {/* <Splash1 /> */}
        
        
        {/* Splashes */}
        {currentView === 'Splash1' &&
            <Splash1 />}
        {currentView === 'Splash2' && 
            <Splash2 />}

        {/* Splashes */}
        {currentView === 'Splash1' &&
            <TouchableOpacity style={styles.skipbutton} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>}
        {/* {currentView === 'Splash2' && 
            <TouchableOpacity style={styles.skipbutton} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>}
        {currentView === 'Splash3' && 
            <Splash3 />} */}

        <View style={styles.buttonContainer}>
            <TouchableOpacity
            style={[styles.button, currentView === 'Splash1' && styles.selectedButton]}
            onPress={() => switchView('Splash1')} />
            <TouchableOpacity
            style={[styles.button, currentView === 'Splash2' && styles.selectedButton]}
            onPress={() => switchView('Splash2')} />
            {/* <TouchableOpacity
            style={[styles.button, currentView === 'Splash3' && styles.selectedButton]}
            onPress={() => switchView('Splash3')} /> */}
        </View>

        {/* Next / Continue */}
        {currentView === 'Splash1' &&
            <TouchableOpacity style={styles.nextButton} onPress={() => nextPress()}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>}
        {currentView === 'Splash2' &&
            <TouchableOpacity style={styles.nextButton} onPress={() => endSplash()}>
                <Text style={styles.nextButtonText}>Continue</Text>
            </TouchableOpacity>}
        {/* {currentView === 'Splash3' &&
            <TouchableOpacity style={styles.nextButton} onPress={() => endSplash()}>
                <Text style={styles.nextButtonText}>Continue</Text>
            </TouchableOpacity>} */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: '35%',
        padding: 20,
    },
    image: {
        alignSelf: 'center',
        width: '100%',
        height: 200,
    },
    image2: {
        alignSelf: 'center',
        width: '60%',
        height: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    loremText: {
      fontSize: 16,
      marginBottom: 20,
    },
    nextButton: {
        backgroundColor: '#ACF279',
        marginTop: 50,
        padding: 10,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
    },
    nextButtonText: {
        fontSize: 18,
        fontWeight: '500',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 30,
        width: '13%',
      },
      buttonHandler: {
        flexDirection: 'row',
        width: '40%',
        borderRadius: 5,
      },
      button: {
        borderRadius: 5,
        width: 13,
        height: 5,
        backgroundColor: 'grey'
      },
      selectedButton: {
        // borderBottomWidth: 1,
        backgroundColor: '#ACF279',
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      
      notSelectedButtonText: {
        color: 'lightgray',
    },
    skipbutton: {
        borderBottomWidth: 1,
        position: 'absolute',
        right: 50,
        top: 80,
    },
    skipText: {
        fontSize: 16,
    },
});

export default SplashScreen
