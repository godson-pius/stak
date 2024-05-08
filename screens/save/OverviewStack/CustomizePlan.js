import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';

const CustomizePlan = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [selectedFundingSource, setSelectedFundingSource] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <View style={styles.notificationIconHolder}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../../../assets/holder11.png")}
          />
        </View>
        <View style={styles.saveTextHolder}>
          <Text style={styles.headerText}>Auto-Save</Text>
        </View>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.title}>Customize Your Plan</Text>

        
        <Text style={styles.title}>
            Select a plan to start saving today. You can always adjust the plan to suit you.
        </Text>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Amount</Text>
            <TextInput
            style={styles.amountInput}
            placeholder="Enter custom amount"
            keyboardType="numeric"
            value={customAmount}
            onChangeText={(text) => setCustomAmount(text)}
            />
        </View>

        <View style={styles.pickerContainer}>
            <Text style={styles.label}>Period</Text>
            <View style={styles.picker}>
                <Picker
                selectedValue={selectedPeriod}
                onValueChange={(itemValue) => setSelectedPeriod(itemValue)}
                >
                <Picker.Item label="Daily" value="daily" />
                <Picker.Item label="Weekly" value="weekly" />
                <Picker.Item label="Monthly" value="monthly" />
                <Picker.Item label="Yearly" value="yearly" />
                </Picker>
            </View>
        </View>

        <View style={styles.pickerContainer}>
            <Text style={styles.label}>Fund Your Auto-Save From</Text>
            <View style={styles.picker}>
                <Picker
                selectedValue={selectedFundingSource}
                onValueChange={(itemValue) => setSelectedFundingSource(itemValue)}
                style={styles.picker}
                >
                <Picker.Item label="Stak Bank" value="stakBank" />
                <Picker.Item label="Debit Card" value="debitCard" />
                </Picker>
            </View>
        </View>

        <View style={styles.pickerContainer}>
            <Text style={styles.label}>When to Start This Plan</Text>
            <View style={styles.picker}>
                <Picker
                selectedValue={selectedStartDate}
                onValueChange={(itemValue) => setSelectedStartDate(itemValue)}
                >
                <Picker.Item label="Today" value="today" />
                <Picker.Item label="Tomorrow" value="tomorrow" />
                </Picker>
            </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '20%',
    paddingHorizontal: '5%',
    marginBottom: 10,
  },
  saveTextHolder: {
    width: '50%',
    height: '30%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  notificationIconHolder: {
    width: '50%',
    height: '70%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
  },
  mainContent: {
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 15,
    marginBottom: 16,
    color: 'grey',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
    marginBottom: 8,
  },
  amountInput: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
  iconLayout: {
    height: 45,
    width: 45,
    marginBottom: 10,
  },
});

export default CustomizePlan;
