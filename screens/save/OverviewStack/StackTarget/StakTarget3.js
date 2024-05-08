import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableHighlight, Modal, Button } from "react-native";
import Property1Inactive from "../../../../components/Property1Inactive";
import Nigeria from "../../../../components/Nigeria";
import { FontFamily, FontSize, Border, Color, Padding } from "../../../../GlobalStyles";
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker"

import { StatusBar } from 'expo-status-bar';

const StakTarget3 = ({navigation}) => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [endDate, setEndDate] = useState('');

  const [selectedDate, setSelectedDate] = useState(new Date(2024, 1, 20) );
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  // Function to handle selecting a predefined amount
  const handleSelectAmount = (amount) => {
    console.log(amount);
    setSelectedAmount(amount);
    setCustomAmount(''); // Reset custom amount if a predefined amount is selected
  };

  // Function to handle custom amount input
  const handleCustomAmountChange = (amount) => {
    setCustomAmount(amount);
    setSelectedAmount(''); // Deselect any predefined amount if a custom amount is entered
  };

  // Function to check if an amount is selected for styling
  const isSelected = (amount) => {
    return selectedAmount === amount;
  };

  const isOptionsFilled = selectedAmount !== '' || customAmount !== '';

  const handleContinue = () => {
    // Only show modal if an option is filled
    if (isOptionsFilled) {
      setModalVisible(true);
    }
  };

  // Function to handle final continuation after setting the end date
  const handleFinalContinue = () => {
    console.log("Selected Amount:", selectedAmount || customAmount);
    console.log("End Date:", endDate);
    // Process the continuation logic here
    setModalVisible(false); // Close the modal
    navigation.navigate('StakTarget4');
  };

  return (
    <View style={styles.stakTarget}>
      <StatusBar translucent />
      <TouchableOpacity onPress={() => {navigation.goBack()}}>
        <Image
          style={[
            styles.arrowBackFill0Wght400Grad0Icon,
            styles.howMuchCanPosition,
          ]}
          contentFit="cover"
          source={require("../../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
        />
      </TouchableOpacity>
      <Text
        style={[styles.howMuchCan, styles.howMuchCanTypo]}
      >{`How much can you save monthly to reach this goal?`}</Text>
      <View style={[styles.step1Parent, styles.howMuchCanPosition]}>
        <Text style={[styles.step1, styles.stepTypo]}>Step 1</Text>
        <Text style={[styles.step2, styles.stepTypo]}>Step 2</Text>
        <Text style={[styles.step3, styles.stepTypo]}>Step 3</Text>
        <Text style={[styles.step4, styles.stepTypo]}>Step 4</Text>
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
        </View>
      </View>
      {/* <Property1Inactive
        getStarted="Continue"
        property1InactivePosition="absolute"
        property1InactiveTop={562}
        property1InactiveLeft={20}
        property1InactiveBackgroundColor="#9fe870"
        property1InactiveMarginLeft="unset"
        getStartedColor="#163300"
      /> */}
      <TouchableOpacity>
        <Nigeria
          emojioneflagForNigeria={require("../../../../assets/emojioneflagfornigeria1.png")}
          nigeria="₦2,500 ( 5%)"
          inactive={isSelected('₦2,500') ? require("../../../../assets/radio-button-checked-fill0-wght400-grad0-opsz241.png") : require("../../../../assets/inactive.png")}
          showEmojioneflagForNigeriaIco={false}
          nigeriaPosition="absolute"
          nigeriaTop={219}
          // nigeriaLeft={20}
          nigeriaWidth={"100%"}
          nigeriaBorderColor={isSelected('₦2,500') ? "#163300" : "#b5b6b4"}
          nigeriaColor={isSelected('₦2,500') ? "#0c0f0d" : "#5d5f5e"}
          inactiveIconMarginLeft={170}
          inactiveIconOverflow="hidden"
          onButtonPress={() => handleSelectAmount('₦2,500')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Nigeria
          emojioneflagForNigeria={require("../../../../assets/emojioneflagfornigeria1.png")}
          nigeria="₦3,000 ( 6%)"
          inactive={isSelected('₦3,000') ? require("../../../../assets/radio-button-checked-fill0-wght400-grad0-opsz241.png") : require("../../../../assets/inactive.png")}
          showEmojioneflagForNigeriaIco={false}
          nigeriaPosition="absolute"
          nigeriaTop={283}
          // nigeriaLeft={20}
          nigeriaWidth={"100%"}
          nigeriaBorderColor={isSelected('₦3,000') ? "#163300" : "#b5b6b4"}
          nigeriaColor={isSelected('₦3,000') ? "#0c0f0d" : "#5d5f5e"}
          inactiveIconMarginLeft={170}
          inactiveIconOverflow="unset"
          onButtonPress={() => handleSelectAmount('₦3,000')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Nigeria
          emojioneflagForNigeria={require("../../../../assets/emojioneflagfornigeria1.png")}
          nigeria="₦4,500 ( 9%)"
          inactive={isSelected('₦4,500') ? require("../../../../assets/radio-button-checked-fill0-wght400-grad0-opsz241.png") : require("../../../../assets/inactive.png")}
          showEmojioneflagForNigeriaIco={false}
          nigeriaPosition="absolute"
          nigeriaTop={347}
          // nigeriaLeft={20}
          nigeriaWidth={"100%"}
          nigeriaBorderColor={isSelected('₦4,500') ? "#163300" : "#b5b6b4"}
          nigeriaColor={isSelected('₦4,500') ? "#0c0f0d" : "#5d5f5e"}
          inactiveIconMarginLeft={170}
          inactiveIconOverflow="unset"
          onButtonPress={() => handleSelectAmount('₦4,500')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Nigeria
          emojioneflagForNigeria={require("../../../../assets/emojioneflagfornigeria1.png")}
          nigeria="₦7,500 ( 15%)"
          inactive={isSelected('₦7,500') ? require("../../../../assets/radio-button-checked-fill0-wght400-grad0-opsz241.png") : require("../../../../assets/inactive.png")}
          showEmojioneflagForNigeriaIco={false}
          nigeriaPosition="absolute"
          nigeriaTop={411}
          // nigeriaLeft={20}
          nigeriaWidth={"100%"}
          nigeriaBorderColor={isSelected('₦7,500') ? "#163300" : "#b5b6b4"}
          nigeriaColor={isSelected('₦7,500') ? "#0c0f0d" : "#5d5f5e"}
          inactiveIconMarginLeft={165}
          inactiveIconOverflow="unset"
          onButtonPress={() => handleSelectAmount('₦7,500')}
        />
      </TouchableOpacity>
      <View style={[styles.inputYourOwnAmountWrapper, styles.howMuchCanPosition]}>
        <TextInput
          // style={styles.input}
          onChangeText={handleCustomAmountChange}
          value={customAmount}
          placeholder="Input your own amount"
          placeholderTextColor={'#dddd'}
          keyboardType="numeric"
        />
      </View>
      
      <TouchableHighlight underlayColor="#DDDDDD" onPress={handleContinue} style={isOptionsFilled? styles.button : styles.buttonNotSelected}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableHighlight>

      <Modal visible={modalVisible} style={styles.modal}>
        <StatusBar translucent />
        <View style={{flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
          <View style={styles.modalContent}>
            <View style={styles.cancelButton}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <MaterialIcons name="cancel-presentation" size={30} style={styles.cancelButtonIcon}/>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.modalSubTittle}>When should this target end?</Text>
            <Text style={styles.modalSubTittle}>Input an end Date</Text>
            <View style={styles.divider}></View>
            <TouchableOpacity style={styles.dateInput} onPress={() => showDatePicker()}>
              <View>
                <Text style={styles.dateText}>{selectedDate.toDateString()}</Text>
              </View>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              date={selectedDate}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />

            
            <Text style={styles.fadedText}>Your target plan has to be active for a minimun of 3 months</Text>
            {/* Continue and Cancel buttons */}
            <TouchableOpacity onPress={() => {handleFinalContinue()}} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  howMuchCanPosition: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: "absolute",
    alignSelf: 'center'
  },
  howMuchCanTypo: {
    textAlign: "left",
    fontFamily: FontFamily.headerCopyMobile201,
    fontWeight: "500",
    fontSize: FontSize.subHeaderCopyMobile16_size,
  },
  stepTypo: {
    width: 62,
    fontFamily: FontFamily.tags,
    lineHeight: 22,
    // left: "50%",
    top: 0,
    textAlign: "left",
    fontSize: FontSize.subHeaderCopyMobile16_size,
    // position: "absolute",
  },
  frameLayout: {
    height: 8,
    borderRadius: Border.br_5xs,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  arrowBackFill0Wght400Grad0Icon: {
    top: 38,
    left: 20,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  howMuchCan: {
    top: 162,
    color: Color.bodyCopy,
    left: 20,
    position: "absolute",
  },
  step1: {
    // marginLeft: -154,
    color: Color.inactiveText,
  },
  step2: {
    // marginLeft: -72,
    color: Color.inactiveText,
  },
  step3: {
    // marginLeft: 10,
    color: Color.black,
  },
  step4: {
    // marginLeft: 92,
    color: Color.inactiveText,
  },
  frameChild: {
    backgroundColor: Color.primaryColorFill,
    width: 148,
    top: 0,
    borderRadius: Border.br_5xs,
    left: 0,
  },
  frameWrapper: {
    top: 34,
    backgroundColor: Color.colorSilver_100,
    width: 296,
  },
  step1Parent: {
    top: 88,
    width: "100%",
    height: 42,
  },
  inputYourOwn: {
    color: Color.inactiveText,
  },
  inputYourOwnAmountWrapper: {
    top: 475,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.inactiveText,
    borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_sm,
  },
  stakTarget: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    paddingHorizontal: "5%",
    overflow: "hidden",
  },
  button: {
    top: 562,
    backgroundColor: "#ACF279",
    width: "100%",
    padding: 10,
    // margin: 10,
    borderRadius: 5,
  },
  buttonNotSelected: {
    top: 562,
    backgroundColor: Color.inactiveComponent,
    width: "100%",
    padding: 10,
    // margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  buttonTextNotSelected: {
    fontSize: 16,
    textAlign: 'center',
  },


  centeredView: {
    flex: 1,
    justifyContent: "flex-end", // Aligns the modal content to the bottom
    alignItems: "center",
  },
  modalView: {
    height: "70%", // Sets the modal height to 60% of the screen
    width: '100%', // Ensures the modal spans the entire width of the screen
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // Ensures the modal starts from the bottom and goes up
    position: 'absolute',
    bottom: 0,
  },
  // Adjust the input style if necessary
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200, // Adjust as needed
  },



  modal: {
    justifyContent: 'flex-end',
    // backgroundColor: 'blue',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // height: 200,
  },
  cancelButton: {
    alignItems: 'flex-end',
    width: "100%",
    borderRadius: 5,
  },
  cancelButtonIcon: {
    alignItems: 'flex-end',
    borderRadius: 5,
  },
  modalButton: {
    backgroundColor: "#ACF279",
    width: "100%",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  value: {
    marginTop: 5,
    fontSize: 17,
    color: '#555',
  },
  divider: {
    borderColor: '#E7F2DC',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  modalSubTittle: {
    textAlign: "left",
    fontFamily: FontFamily.headerCopyMobile201,
    fontWeight: "600",
    fontSize: FontSize.subHeaderCopyMobile16_size,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  fadedText: {
    textAlign: "left",
    fontFamily: FontFamily.headerCopyMobile201,
    fontWeight: "600",
    fontSize: 14,
    alignSelf: 'flex-start',
    marginTop: 10,
    color: 'grey',
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
});

export default StakTarget3;
