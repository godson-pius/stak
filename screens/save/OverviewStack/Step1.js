import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const Step1 = ({ onStepComplete }) => {
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
        onStepComplete();
      }
    };

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.title}>What are you saving for?</Text>

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
  );
}

const styles = StyleSheet.create({
    container: {
        height: '80%',
      },
      mainContent: {
        paddingHorizontal: '5%',
      },
      title: {
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
    
  });
export default Step1
