import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateStakLock = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [amount, setAmount] = useState('');
  const [fundSource, setFundSource] = useState('');
  const [selectedFundingSource, setSelectedFundingSource] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [returnDate, setReturnDate] = useState(new Date(2024, 1, 20) );
  const [showDatePicker, setShowDatePicker] = useState(false);

  const isFormValid = () => {
    return (
      title.trim() !== '' &&
      duration.trim() !== '' &&
      amount.trim() !== '' &&
      selectedFundingSource.trim() !== ''
    );
  };
  
  return (
    <ScrollView style={styles.container}>
    
      <View style={styles.header}>
        <TouchableOpacity style={styles.notificationIconHolder} onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} />
        </TouchableOpacity>
        <View style={styles.iconHolder}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../../../../assets/holder10.png")}
          />
        </View>
        <View style={styles.saveTextHolder}>
          <Text style={styles.headerText}>Create a Stak lock</Text>
        </View>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.title}>
            Ready to set-up your stak lock?
        </Text>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Give this stak lock a name</Text>
            <TextInput
            style={styles.amountInput}
            placeholder="Avoiding sapa"
            value={title}
            onChangeText={(text) => setTitle(text)}
            />
        </View>

        <View style={styles.pickerContainer}>
            <Text style={styles.label}>Duration of StakLock</Text>
            <View style={styles.picker}>
                <Picker
                selectedValue={duration}
                onValueChange={(itemValue) => setDuration(itemValue)}
                >
                <Picker.Item label="31 - 60 days" value="31 - 60 days" />
                <Picker.Item label="70 - 150 days" value="70 - 150 days" />
                <Picker.Item label="200 - 360 days" value="200 - 360 days" />
                <Picker.Item label="360 - 720 days" value="360 - 720 days" />
                </Picker>
            </View>
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Amount to lock</Text>
            <TextInput
            style={styles.amountInput}
            placeholder="5000"
            keyboardType="numeric"
            value={amount}
            onChangeText={(text) => setAmount(text)}
            />
        </View>

        <View style={styles.pickerContainer}>
            <Text style={styles.label}>Fund Your Stak lock from?</Text>
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
            <Text style={styles.label}>When Do u want to get ur money back?</Text>

            <View style={styles.dateInput}>
                {/* Date of Birth Picker */}
                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Text style={styles.dateText}>{returnDate.toDateString()}</Text>
                </TouchableOpacity>
            </View>

            
            {showDatePicker && (
                <DateTimePicker
                value={returnDate}
                mode="date"
                display="spinner"
                onChange={(event, selectedDate) => {
                    setShowDatePicker(false);
                    setReturnDate(selectedDate || returnDate);
                }}
                />
            )}

            <TouchableOpacity
              onPress={() => navigation.navigate('PreviewLock')}
              style={[styles.previewStakLock, !isFormValid() && styles.disabledButton]}
              disabled={!isFormValid()}
            >
              <Text style={styles.buttonText}>Preview Stak lock</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
    },
    header: {
      height: 200,
      paddingHorizontal: '5%',
      marginBottom: 10,
    },
    saveTextHolder: {
      width: '100%',
      height: '30%',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
    },
    notificationIconHolder: {
      marginTop: 30,
    //   width: '50%',
    //   height: '70%',
    //   alignItems: 'flex-start',
    //   justifyContent: 'flex-end',
    },
    iconHolder: {
      width: '50%',
      height: '40%',
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
    dateInput: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
    },
    dateText: {
      fontSize: 15,
      marginTop: 5,
      marginBottom: 8,
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
    previewStakLock: {
      backgroundColor: '#ACF279',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 16,
      marginBottom: 100,
    },
    disabledButton: {
        backgroundColor: 'lightgray',
    },
    iconLayout: {
      height: 50,
      width: 50,
      marginBottom: 10,
    },
});
export default CreateStakLock
