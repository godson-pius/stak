import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../../../GlobalStyles";

const StakTarget = ({navigation}) => {
  const handleContinue = () => {
    navigation.navigate('FInalStakTarget');
  }
  return (
    <View style={styles.stakTarget}>
      <TouchableOpacity onPress={() => {navigation.goBack()}}>
        <Image
          style={[styles.arrowBackFill0Wght400Grad0Icon, styles.fill0IconLayout]}
          contentFit="cover"
          source={require("../../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
        />
      </TouchableOpacity>
      <Text style={styles.selectPaymentMethod}>Select payment method</Text>
      <View style={styles.step1Parent}>
        <Text style={[styles.step1, styles.stepPosition]}>Step 1</Text>
        <Text style={[styles.step2, styles.stepPosition]}>Step 2</Text>
        <Text style={[styles.step3, styles.stepPosition]}>Step 3</Text>
        <Text style={[styles.step4, styles.step4Typo]}>Step 4</Text>
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
        </View>
      </View>
      <Text style={[styles.youHaveTo, styles.youHaveToTypo]}>
        You have to manually credit this goal
      </Text>
      <Text style={[styles.yourGoalWill, styles.youHaveToTypo]}>
        Your goal will be credited automatically
      </Text>
      <Image
        style={[styles.creditCardFill0Wght400GradIcon, styles.fill0IconLayout]}
        contentFit="cover"
        source={require("../../../../assets/credit-card-fill0-wght400-grad0-opsz24.png")}
      />
      <TouchableHighlight underlayColor="#DDDDDD" onPress={handleContinue}>
        <View
          style={[styles.creditdebitCardWrapper, styles.bankTransferPosition]}
        >
          <Text style={styles.step4Typo}>Credit/Debit card</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="#DDDDDD" onPress={handleContinue}>
        <Text style={[styles.bankTransfer, styles.bankTransferPosition]}>
          Bank Transfer
        </Text>
      </TouchableHighlight>
      <Image
        style={[
          styles.navigateNextFill0Wght400GrIcon,
          styles.navigateIconPosition,
        ]}
        contentFit="cover"
        source={require("../../../../assets/navigate-next-fill0-wght400-grad0-opsz241.png")}
      />
      <Image
        style={[
          styles.navigateNextFill0Wght400GrIcon1,
          styles.navigateIconPosition,
        ]}
        contentFit="cover"
        source={require("../../../../assets/navigate-next-fill0-wght400-grad0-opsz241.png")}
      />
      <Image
        style={[styles.accountBalanceFill0Wght400Icon, styles.fill0IconLayout]}
        contentFit="cover"
        source={require("../../../../assets/account-balance-fill0-wght400-grad0-opsz24.png")}
      />
      <View style={styles.stakTargetChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  fill0IconLayout: {
    height: 24,
    width: 24,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  stepPosition: {
    width: 62,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  step4Typo: {
    color: Color.black,
    fontFamily: FontFamily.tags,
    lineHeight: 22,
    textAlign: "left",
    fontSize: FontSize.subHeaderCopyMobile16_size,
  },
  frameLayout: {
    height: 8,
    borderRadius: Border.br_5xs,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  youHaveToTypo: {
    color: Color.subTextBlack,
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
    fontFamily: FontFamily.tags,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  bankTransferPosition: {
    left: 56,
    position: "absolute",
  },
  navigateIconPosition: {
    left: 316,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  arrowBackFill0Wght400Grad0Icon: {
    top: 32,
  },
  selectPaymentMethod: {
    top: 162,
    fontWeight: "500",
    fontFamily: FontFamily.headerCopyMobile201,
    color: Color.bodyCopy,
    textAlign: "left",
    fontSize: FontSize.subHeaderCopyMobile16_size,
    left: 20,
    position: "absolute",
  },
  step1: {
    marginLeft: -154,
    color: Color.inactiveText,
    fontFamily: FontFamily.tags,
    lineHeight: 22,
    width: 62,
    left: "50%",
    textAlign: "left",
    fontSize: FontSize.subHeaderCopyMobile16_size,
  },
  step2: {
    marginLeft: -72,
    color: Color.inactiveText,
    fontFamily: FontFamily.tags,
    lineHeight: 22,
    width: 62,
    left: "50%",
    textAlign: "left",
    fontSize: FontSize.subHeaderCopyMobile16_size,
  },
  step3: {
    marginLeft: 10,
    color: Color.inactiveText,
    fontFamily: FontFamily.tags,
    lineHeight: 22,
    width: 62,
    left: "50%",
    textAlign: "left",
    fontSize: FontSize.subHeaderCopyMobile16_size,
  },
  step4: {
    marginLeft: 92,
    width: 62,
    left: "50%",
    top: 0,
    position: "absolute",
    color: Color.black,
  },
  frameChild: {
    backgroundColor: Color.primaryColorFill,
    width: 238,
    top: 0,
    borderRadius: Border.br_5xs,
  },
  frameWrapper: {
    top: 34,
    backgroundColor: Color.colorSilver_100,
    width: 296,
  },
  step1Parent: {
    top: 88,
    width: 308,
    height: 42,
    left: 20,
    position: "absolute",
  },
  youHaveTo: {
    marginLeft: -123,
    top: 245,
  },
  yourGoalWill: {
    marginLeft: -124,
    top: 327,
  },
  creditCardFill0Wght400GradIcon: {
    top: 298,
  },
  creditdebitCardWrapper: {
    top: 297,
    flexDirection: "row",
    alignItems: "center",
  },
  bankTransfer: {
    top: 215,
    color: Color.black,
    fontFamily: FontFamily.tags,
    lineHeight: 22,
    textAlign: "left",
    fontSize: FontSize.subHeaderCopyMobile16_size,
  },
  navigateNextFill0Wght400GrIcon: {
    top: 213,
  },
  navigateNextFill0Wght400GrIcon1: {
    top: 298,
  },
  accountBalanceFill0Wght400Icon: {
    top: 213,
  },
  stakTargetChild: {
    top: 281,
    borderStyle: "solid",
    borderColor: Color.others4,
    borderTopWidth: 1,
    width: 361,
    height: 1,
    left: 0,
    position: "absolute",
  },
  stakTarget: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default StakTarget;
