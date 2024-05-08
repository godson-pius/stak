import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";
import HouseFILL0Wght400GRAD0OpszIcon from "../../../../components/HouseFILL0Wght400GRAD0OpszIcon";
import Property1Inactive from "../../../../components/Property1Inactive";
import { Color, FontFamily, FontSize, Border } from "../../../../GlobalStyles";

const StakTarget1 = ({navigation}) => {
  return (
    <View style={styles.stakTarget}>
      <TouchableHighlight underlayColor="#DDDDDD" onPress={() => navigation.goBack()} 
        style={[
        styles.arrowBackFill0Wght400Grad0Icon,
        styles.heroiconsexclamationCircleLayout,
      {width: 54, right: "5%", height: 54,marginVertical:5, alignItems: 'center', justifyContent: 'center',}
      ]}>
        <Image
          style={[styles.backIcon, styles.backIconPosition]}
          contentFit="cover"
          source={require("../../../../assets/back.png")}
        />
      </TouchableHighlight>
      <Text style={styles.preview}>Preview</Text>
      <View style={[styles.step1Parent, styles.howMuchCanPosition]}>
        <Text style={[styles.step1, styles.stepTypo]}>Step 1</Text>
        <Text style={[styles.step2, styles.stepTypo]}>Step 2</Text>
        <Text style={[styles.step3, styles.stepTypo]}>Step 3</Text>
        <Text style={[styles.step4, styles.stepTypo]}>Step 4</Text>
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
        </View>
      </View>
      <View style={styles.rentParent}>
        <Text style={[styles.rent, styles.rentClr]}>Rent</Text>
        <Text style={[styles.text, styles.textTypo]}>₦50,000</Text>
        <Text style={[styles.savingFor, styles.savingTypo]}>Saving for</Text>
        <Text style={[styles.amount, styles.textTypo]}>Amount</Text>
      </View>
      <HouseFILL0Wght400GRAD0OpszIcon
        houseFILL0Wght400GRAD0Ops={require("../../../../assets/house-fill0-wght400-grad0-opsz24.png")}
        houseFILL0Wght400GRAD0OpsPosition="absolute"
        houseFILL0Wght400GRAD0OpsWidth={60}
        houseFILL0Wght400GRAD0OpsHeight={60}
        houseFILL0Wght400GRAD0OpsTop={197}
        houseFILL0Wght400GRAD0OpsLeft={150}
      />
      <Text style={[styles.howOften, styles.savingTypo]}>How often?</Text>
      <Text style={[styles.monthlySaving, styles.savingTypo]}>
        Monthly saving
      </Text>
      <Text style={[styles.moneyToBe, styles.savingTypo]}>
        Money to be deducted on
      </Text>
      <Text style={[styles.paymentMethod, styles.savingTypo]}>
        Payment method
      </Text>
      <Text style={styles.editPlan}>Edit plan</Text>
      <Text style={[styles.monthly, styles.thTypo]}>Monthly</Text>
      <Text style={[styles.text1, styles.thTypo]}>₦2,500(5%)</Text>
      <Text style={[styles.th, styles.thTypo]}>20th</Text>
      <Text style={[styles.debitCard, styles.thTypo]}>Debit card</Text>
      <View style={[styles.stakTargetChild, styles.stakLayout]} />
      <View style={[styles.stakTargetItem, styles.stakLayout]} />
      <View style={[styles.stakTargetInner, styles.stakLayout]} />
      <View style={[styles.lineView, styles.stakLayout]} />
      <Property1Inactive
        getStarted="Save plan"
        property1InactivePosition="absolute"
        property1InactiveTop={583}
        property1InactiveLeft={20}
        property1InactiveBackgroundColor="#9fe870"
        property1InactiveMarginLeft="unset"
        getStartedColor="#163300"
        onButtonPress={() => navigation.navigate("VerifyTarget")}
        disable={false}
      />
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
  backIconPosition: {
    left: 20,
    position: "absolute",
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
    width: 296,
    left: 0,
    borderRadius: Border.br_5xs,
    position: "absolute",
    overflow: "hidden",
  },
  rentClr: {
    color: Color.black,
    right: "5%",
  },
  textTypo: {
    top: 76,
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
    fontFamily: FontFamily.tags,
    textAlign: "left",
    position: "absolute",
  },
  savingTypo: {
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
    fontFamily: FontFamily.tags,
    textAlign: "left",
    position: "absolute",
  },
  thTypo: {
    right: "5%",
    color: Color.black,
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
    fontFamily: FontFamily.tags,
    textAlign: "left",
    position: "absolute",
  },
  stakLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.others4,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  backIcon: {
    top: 32,
    width: 24,
    height: 24,
  },
  preview: {
    top: 162,
    fontWeight: "500",
    fontFamily: FontFamily.headerCopyMobile201,
    textAlign: "left",
    fontSize: FontSize.subHeaderCopyMobile16_size,
    color: Color.subTextBlack,
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
    color: Color.inactiveText,
  },
  step4: {
    // marginLeft: 92,
    color: Color.black,
  },
  frameChild: {
    backgroundColor: Color.primaryColorFill,
    top: 0,
    width: 296,
    left: 0,
  },
  frameWrapper: {
    top: 34,
    backgroundColor: Color.colorSilver_100,
  },
  step1Parent: {
    top: 88,
    width: "100%",
    height: 42,
  },
  rent: {
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
    fontFamily: FontFamily.tags,
    textAlign: "left",
    position: "absolute",
    top: 37,
  },
  text: {
    color: Color.black,
    right: "5%",
  },
  savingFor: {
    top: 37,
    fontSize: FontSize.miniCopy14_size,
    color: Color.subTextBlack,
    left: "5%",
  },
  amount: {
    color: Color.subTextBlack,
    left: "5%",
  },
  rentParent: {
    top: 235,
    alignSelf: 'center',
    backgroundColor: Color.neutralBase,
    width: 251,
    height: 104,
    borderRadius: Border.br_5xs,
    position: "absolute",
    overflow: "hidden",
  },
  howOften: {
    top: 363,
    color: Color.subTextBlack,
    left: "5%",
  },
  monthlySaving: {
    top: 411,
    color: Color.subTextBlack,
    left: "5%",
  },
  moneyToBe: {
    top: 459,
    color: Color.subTextBlack,
    left: "5%",
  },
  paymentMethod: {
    top: 507,
    color: Color.subTextBlack,
    left: "5%",
  },
  editPlan: {
    // marginLeft: -33,
    alignSelf: 'center',
    top: 654,
    textDecoration: "underline",
    color: Color.primaryColorFill,
    fontFamily: FontFamily.tags,
    lineHeight: 22,
    // left: "50%",
    textAlign: "left",
    fontSize: FontSize.subHeaderCopyMobile16_size,
    position: "absolute",
  },
  monthly: {
    top: 363,
  },
  text1: {
    top: 411,
  },
  th: {
    top: 459,
  },
  debitCard: {
    top: 507,
  },
  stakTargetChild: {
    top: 399,
  },
  stakTargetItem: {
    top: 447,
  },
  stakTargetInner: {
    top: 495,
  },
  lineView: {
    top: 543,
  },
  stakTarget: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    paddingHorizontal: "5%",
    overflow: "hidden",
  },
});

export default StakTarget1;
