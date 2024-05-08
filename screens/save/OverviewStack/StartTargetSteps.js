import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons, Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const StartTargetSteps = ({navigation}) => {
    const [selectedView, setSelectedView] = useState('Step1');
    const [completedSteps, setCompletedSteps] = useState([]);

    const [selectedOption, setSelectedOption] = useState('');

    const savingOptions = [
      { label: 'Housing', icon: 'home' },
      { label: 'Education', icon: 'school' },
      { label: 'Health', icon: 'medical-outline' },
      { label: 'Travel', icon: 'airplane-outline' },
      { label: 'Car', icon: 'car-outline' },
      { label: 'Others', icon: 'ellipsis-horizontal' },
    ];
  
    const renderOption = (option) => (
      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === option.label && styles.selectedOption,
        ]}
        onPress={() => handleOptionPress(option.label)}
      >
        <Ionicons name={option.icon} size={24} color="#333" />
        <Text style={styles.optionText}>{option.label}</Text>
      </TouchableOpacity>
    );
  
    const handleOptionPress = (option) => {
      setSelectedOption(option);
      // Additional logic if needed
    };
  
    const handleContinuePress = () => {
      if (selectedOption) {
        // Call the callback function to indicate that this step is complete
        // onStepComplete();
        navigation.navigate('StakTarget2');
      }
    };

  
    const switchView = (view) => {
      // Check if the current step is completed
      const currentIndex = completedSteps.indexOf(selectedView);
      if (currentIndex === -1 || currentIndex === completedSteps.length - 1) {
        setSelectedView(view);
      } else {
        // Display a message or handle it in any way you prefer
        alert('Complete the current step before moving to the next one.');
      }
    };
  
    const markStepAsComplete = () => {
      if (!completedSteps.includes(selectedView)) {
        setCompletedSteps((prevCompletedSteps) => [...prevCompletedSteps, selectedView]);
      }
    };
  
    return (
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.notificationIconHolder} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} />
        </TouchableOpacity>
  
        {/* Target Icon */}
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../../../assets/holder12.png")}
        />
        <Text style={styles.title}>Stak Target</Text>
  
        {/* Lorem Ipsum Text */}
        <Text style={styles.loremText}>
          Set a savings target for yourself today to reach your goals
        </Text>
  
        <View style={styles.buttonContainer}>
          <View style={styles.buttonHandler}>
            <TouchableOpacity
              style={[styles.button, selectedView === 'Step1' && styles.selectedButton]}
              // onPress={() => switchView('Step1')}
            >
              <Text style={[styles.buttonText, selectedView !== 'Step1' && styles.notSelectedButtonText]}>Step 1</Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.buttonHandler}>
            <TouchableOpacity
              style={[styles.button, selectedView === 'Step2' && styles.selectedButton]}
              // onPress={() => {
              //   switchView('Step2');
              //   markStepAsComplete();
              // }}
            >
              <Text style={[styles.buttonText, selectedView !== 'Step2' && styles.notSelectedButtonText]}>Step 2</Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.buttonHandler}>
            <TouchableOpacity
              style={[styles.button, selectedView === 'Step3' && styles.selectedButton]}
              // onPress={() => {
              //   switchView('Step3');
              //   markStepAsComplete();
              // }}
            >
              <Text style={[styles.buttonText, selectedView !== 'Step3' && styles.notSelectedButtonText]}>Step 3</Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.buttonHandler}>
            <TouchableOpacity
              style={[styles.button, selectedView === 'Step4' && styles.selectedButton]}
              // onPress={() => {
              //   switchView('Step4');
              //   markStepAsComplete();
              // }}
            >
              <Text style={[styles.buttonText, selectedView !== 'Step4' && styles.notSelectedButtonText]}>Step 4</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={styles.contentContainer}>
          {/* {selectedView === 'Step1' && <Step1 onStepComplete={markStepAsComplete} />}
          {selectedView === 'Step2' && <Step2 onStepComplete={markStepAsComplete} />}
          {selectedView === 'Step3' && <Step3 onStepComplete={markStepAsComplete} />}
          {selectedView === 'Step4' && <Step4 onStepComplete={markStepAsComplete} />} */}

          <View style={{height: '80%',}}>
            <View style={styles.mainContent}>
              <Text style={styles.subTitle}>What are you saving for?</Text>

              <View style={styles.optionsContainer}>
                {savingOptions.map((option, index) => (
                  <View key={index} style={styles.optionRow}>
                    {renderOption(option)}
                  </View>
                ))}
              </View>

              <TouchableOpacity
                style={[styles.beginPlanButton, { backgroundColor: selectedOption ? '#ACF279' : 'lightgray' }]}
                disabled={!selectedOption}
                onPress={handleContinuePress}
              >
                <Text style={[styles.beginPlanButtonText, { color: selectedOption ? 'black' : 'gray' }]}>
                  Continue
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.customizePlanLink}
                onPress={() => navigation.navigate('CustomizePlan')}
              >
                <Text style={styles.customizePlanLinkText}>Customize your own plan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 40,
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
      marginBottom: 10,
    },
    notificationIconHolder: {
      marginBottom: 20,
    },
    targetIcon: {
      backgroundColor: '#567339',
      padding: 10,
      width: 50,
      borderRadius: 10,
      marginBottom: 10,
    },
    loremText: {
      fontSize: 14,
      marginBottom: 20,
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 20,
      borderRadius: 10,
      alignSelf: 'center'
    },
    imageInfo: {
      marginBottom: 20,
      alignSelf: 'center'
    },
    imageTitle: {
      fontSize: 18,
      color: 'gray',
      fontWeight: '500',
      marginBottom: 5,
      alignSelf: 'center'
    },
    imageSubtitle: {
      fontSize: 16,
      color: 'gray',
      alignSelf: 'center'
    },
    createButton: {
      backgroundColor: '#ACF279',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    createButtonText: {
      fontSize: 18,
      fontWeight: '500',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        height: '6%',
      },
      buttonHandler: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
        borderRadius: 5,
      },
      button: {
        borderRadius: 5,
      },
      selectedButton: {
        borderBottomWidth: 1,
    
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      
      notSelectedButtonText: {
        color: 'lightgray',
      },


      mainContent: {
        paddingHorizontal: '5%',
      },
      subTitle: {
        fontSize: 15,
        marginBottom: 16,
      },
      optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 16,
      },
      optionRow: {
        width: '33.33%',
        paddingHorizontal: 8,
        marginBottom: 16,
      },
      option: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
      },
      selectedOption: {
        borderColor: '#ACF279',
        backgroundColor: '#F0FFF0', // Light green
      },
      optionText: {
        marginTop: 8,
        fontSize: 14,
      },
      beginPlanButton: {
        backgroundColor: '#ACF279',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
      },
      beginPlanButtonText: {
        fontSize: 16,
        fontWeight: '600',
      },
      customizePlanLink: {
        marginTop: 8,
        alignSelf: 'center',
      },
      customizePlanLinkText: {
        fontSize: 14,
        borderBottomWidth: 1,
      },
      iconLayout: {
        height: 45,
        width: 45,
        marginBottom: 10,
      },
});

export default StartTargetSteps
