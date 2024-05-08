import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import Property1Inactive from "../../../../components/Property1Inactive";
import { Color, FontFamily, FontSize, Padding, Border } from "../../../../GlobalStyles";

const StakTarget2 = ({navigation}) => {
  // State to keep track of selected amount and period
  const [selectedAmount, setSelectedAmount] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');

  
  // Function to handle amount selection
  const handleAmountSelection = (amount) => {
    setSelectedAmount(amount);
  };

  // Function to handle period selection
  const handlePeriodSelection = (period) => {
    setSelectedPeriod(period);
  };

  // Function to get style for amount based on selection
  const getAmountStyle = (amount) => {
    return amount === selectedAmount ? styles.selectedItem : styles.item;
  };

  // Function to get style for period based on selection
  const getPeriodStyle = (period) => {
    return period === selectedPeriod ? styles.selectedItem : styles.item;
  };

  const isOptionsFilled = selectedAmount !== '' && selectedPeriod !== '';

  const handleContinue = () => {
    navigation.navigate('StakTarget3');
  }

  return (
    <View style={styles.stakTarget}>
      <TouchableOpacity onPress={() => {navigation.goBack()}}>
        <Image
          style={[styles.arrowBackFill0Wght400Grad0Icon, styles.parentPosition]}
          contentFit="cover"
          source={require("../../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
        />
      </TouchableOpacity>
      <Text
        style={[styles.howMuchDo, styles.howTypo]}
              >{`How much do you need to save to reach this goal?`}</Text>
      <TouchableHighlight underlayColor="#DDDDDD"
      style={[styles.wrapper, styles.framePosition, getAmountStyle('₦500,000')]} onPress={() => handleAmountSelection('₦500,000')}>
        <Text style={[styles.text, styles.textTypo]}>₦500,000</Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="#DDDDDD"
      style={[styles.container, styles.containerPosition, getAmountStyle('₦100,000')]} onPress={() => handleAmountSelection('₦100,000')}>
        <Text style={[styles.text, styles.textTypo]}>₦100,000</Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="#DDDDDD"
      style={[styles.frame, styles.framePosition, getAmountStyle('₦200,000')]} onPress={() => handleAmountSelection('₦200,000')}>
        <Text style={[styles.text, styles.textTypo]}>₦200,000</Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="#DDDDDD"
      style={[styles.frameView, styles.containerPosition, getAmountStyle('₦50,000')]} onPress={() => handleAmountSelection('₦50,000')}>
        <Text style={[styles.text, styles.textTypo]}>₦50,000</Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="#DDDDDD"
      style={[styles.wrapper1, styles.wrapperPosition1, getAmountStyle('₦1,000,000')]} onPress={() => handleAmountSelection('₦1,000,000')}>
        <Text style={[styles.text, styles.textTypo]}>₦1,000,000</Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="#DDDDDD"
      style={[styles.giveAnAmountWrapper, styles.wrapperPosition1]}>
        <Text style={[styles.giveAnAmount, styles.textTypo]}>
          Give an amount
        </Text>
      </TouchableHighlight>
      <View style={[styles.step1Parent, styles.parentPosition]}>
        <TouchableHighlight>
          <Text style={[styles.step1, styles.stepPosition]}>Step 1</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[styles.step2, styles.stepPosition]}>Step 2</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[styles.step3, styles.stepPosition]}>Step 3</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[styles.step4, styles.stepPosition]}>Step 4</Text>
        </TouchableHighlight>
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
        </View>
      </View>
      <View
        style={[styles.howOftenDoYouWantToSaveParent, styles.parentPosition]}
      >
        <Text style={[styles.howOftenDo, styles.howTypo]}>
          How often do you want to save?
        </Text>
        <TouchableHighlight underlayColor="#DDDDDD" onPress={() => handlePeriodSelection('Weekly')}
        style={[styles.weeklyWrapper, styles.wrapperPosition, getPeriodStyle('Weekly')]}>
          <Text style={[styles.weekly, styles.textTypo]}>Weekly</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="#DDDDDD" onPress={() => handlePeriodSelection('Monthly')}
        style={[styles.monthlyWrapper, styles.wrapperPosition, getPeriodStyle('Monthly')]}>
          <Text style={[styles.monthly, styles.textTypo]}>Monthly</Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight disabled={!isOptionsFilled}
        underlayColor="#DDDDDD" onPress={handleContinue} style={isOptionsFilled? styles.button : styles.buttonNotSelected}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: "absolute",
    alignSelf: 'center'
  },
  howTypo: {
    textAlign: "left",
    color: Color.bodyCopy,
    fontFamily: FontFamily.headerCopyMobile201,
    fontWeight: "500",
    fontSize: FontSize.subHeaderCopyMobile16_size,
    position: "absolute",
  },
  framePosition: {
    padding: Padding.p_5xs,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    top: 268,
    backgroundColor: Color.inactiveComponent,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    color: Color.subTextBlack,
    fontFamily: FontFamily.tags,
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
  },
  containerPosition: {
    top: 216,
    padding: Padding.p_5xs,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  wrapperPosition1: {
    top: 320,
    padding: Padding.p_5xs,
    alignItems: "center",
    backgroundColor: Color.inactiveComponent,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  stepPosition: {
    width: 62,
    lineHeight: 22,
    // left: "50%",
    // top: 0,
    fontFamily: FontFamily.tags,
    textAlign: "left",
    fontSize: FontSize.subHeaderCopyMobile16_size,
    // position: "absolute",
  },
  frameLayout: {
    height: 8,
    // left: 0,
    borderRadius: Border.br_5xs,
    position: "absolute",
    overflow: "hidden",
  },
  wrapperPosition: {
    top: 35,
    padding: Padding.p_5xs,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  arrowBackFill0Wght400Grad0Icon: {
    top: 32,
    width: 24,
    height: 24,
    left: 20,
    overflow: "hidden",
  },
  howMuchDo: {
    top: 162,
    left: 20,
  },
  text: {
    width: 73,
  },
  wrapper: {
    left: 133,
  },
  container: {
    backgroundColor: Color.inactiveComponent,
    left: 133,
  },
  frame: {
    left: 20,
  },
  frameView: {
    backgroundColor: Color.colorLightgreen_100,
    left: 20,
  },
  wrapper1: {
    left: 20,
  },
  giveAnAmount: {
    width: 108,
  },
  giveAnAmountWrapper: {
    left: 133,
  },
  step1: {
    // marginLeft: -154,
    color: Color.inactiveText,
    width: 62,
    lineHeight: 22,
    // left: "50%",
  },
  step2: {
    // marginLeft: -72,
    color: Color.black,
    width: 62,
    lineHeight: 22,
    // left: "50%",
  },
  step3: {
    // marginLeft: 10,
    color: Color.inactiveText,
    width: 62,
    lineHeight: 22,
    // left: "50%",
  },
  step4: {
    // marginLeft: 92,
    color: Color.inactiveText,
    width: 62,
    lineHeight: 22,
    // left: "50%",
  },
  frameChild: {
    backgroundColor: Color.primaryColorFill,
    width: 67,
    top: 0,
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
  howOftenDo: {
    left: 0,
    top: 0,
  },
  weekly: {
    width: 51,
  },
  weeklyWrapper: {
    left: 0,
    backgroundColor: Color.inactiveComponent,
  },
  monthly: {
    width: 55,
  },
  monthlyWrapper: {
    left: 83,
    backgroundColor: Color.colorLightgreen_100,
  },
  howOftenDoYouWantToSaveParent: {
    top: 388,
    width: 279,
    height: 85,
    left: 20,
  },
  stakTarget: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    paddingHorizontal: "5%",
    // paddingLeft: 30
  },
  item: {
    // Default style for items
    backgroundColor: Color.inactiveComponent,
  },
  selectedItem: {
    // Style for selected item
    backgroundColor: '#9fe870', // Example selected background color
    backgroundColor: Color.colorLightgreen_100,
  },
  button: {
    top: 513,
    backgroundColor: "#ACF279",
    width: "100%",
    padding: 10,
    // margin: 10,
    borderRadius: 5,
  },
  buttonNotSelected: {
    top: 513,
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
});

export default StakTarget2;
