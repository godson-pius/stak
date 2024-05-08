import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Property1Inactive1 from "../../../components/Property1Inactive1";
import { FontFamily, FontSize, Color, Border, Padding } from "../../../GlobalStyles";
import Property1Inactive from "../../../components/Property1Inactive";

const Withdraw1 = ({navigation}) => {
  const isOptionsFilled = true;
  const handleContinue = () => {
    console.log("button pressed")
    navigation.navigate('ConfirmPinScreenFinal');
  };
  return (
    <View style={styles.withdraw}>
      <Text style={[styles.withdraw1, styles.text1Typo]}>Withdraw</Text>
      <TouchableHighlight onPress={() => {navigation.goBack()}}>
        <Image
          style={[styles.arrowBackFill0Wght400Grad0Icon, styles.fill0IconLayout]}
          contentFit="cover"
          source={require("../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
        />
      </TouchableHighlight>
      <View style={styles.interestRate}>
        <Image
          style={styles.fill0IconLayout}
          contentFit="cover"
          source={require("../../../assets/heroiconsexclamationcircle.png")}
        />
        <Text style={styles.interestRateAtContainer}>
          <Text style={styles.interestRateAt}>{`Interest rate at `}</Text>
          <Text style={styles.forDollarCurrencySwapBelow}>
            <Text style={styles.text}>{`20% `}</Text>
            <Text style={styles.forDollarCurrency}>
              for dollar currency swap below 1000
            </Text>
          </Text>
        </Text>
      </View>
      <Text style={[styles.withdrawIntoYour, styles.faIsRequiredTypo]}>
        Withdraw into your local account instantly!
      </Text>
      <View
        style={[styles.twoFactorAuthentication2Wrapper, styles.wrapperFlexBox]}
      >
        <Text style={styles.twoFactorContainer}>
          <Text
            style={[styles.twoFactor, styles.text1Typo]}
          >{`Two - Factor Authentication!
`}</Text>
          <Text
            style={styles.faIsRequiredTypo}
          >{`2FA is required to complete this transaction. 
Tap to generate OTP for your withdrawal
for better security.`}</Text>
        </Text>
      </View>
      <View style={[styles.cardNumber, styles.cardPosition]}>
        <Text style={[styles.inputAmountTo, styles.text1Typo]}>
          Input amount to withdraw
        </Text>
        <View style={[styles.wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.text1, styles.text1Typo]}>10000</Text>
        </View>
      </View>
      <View style={[styles.cardNumber1, styles.cardPosition]}>
        <Text style={[styles.inputAmountTo, styles.text1Typo]}>
          Where are you withdrawing to?
        </Text>
        <View style={[styles.wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.text1, styles.text1Typo]}>GTB Bank</Text>
          <Image
            style={[
              styles.expandMoreFill0Wght400GradIcon,
              styles.fill0IconLayout,
            ]}
            contentFit="cover"
            source={require("../../../assets/expand-more-fill0-wght400-grad0-opsz24.png")}
          />
        </View>
      </View>
      <View style={[styles.cardNumber2, styles.cardPosition]}>
        <Text style={[styles.inputAmountTo, styles.text1Typo]}>
          Description
        </Text>
        <View style={[styles.wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.text1, styles.text1Typo]}>For Groceries</Text>
        </View>
      </View>
      <View style={[styles.cardNumber3, styles.cardPosition]}>
        <Text style={[styles.inputAmountTo, styles.text1Typo]}>
          Enter Generated OTP
        </Text>
        <View style={[styles.wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.text1, styles.text1Typo]}>OTP here</Text>
        </View>
      </View>
      
      <Property1Inactive
        getStarted="Withdraw"
        property1InactivePosition="absolute"
        property1InactiveTop={702}
        property1InactiveLeft={20}
        property1InactiveBackgroundColor="#eee"
        property1InactiveMarginLeft="unset"
        getStartedColor="#bdbdbd"
        onButtonPress={() => {handleContinue()}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text1Typo: {
    fontFamily: FontFamily.headerCopyMobile201,
    fontWeight: "500",
  },
  fill0IconLayout: {
    height: 24,
    width: 24,
  },
  faIsRequiredTypo: {
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
    fontFamily: FontFamily.tags,
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  cardPosition: {
    left: 20,
    position: "absolute",
  },
  withdraw1: {
    top: 88,
    fontSize: FontSize.headerCopyMobile20_size,
    color: Color.black,
    textAlign: "left",
    width: "100%",
    paddingHorizontal: "5%",
    position: "absolute",
  },
  arrowBackFill0Wght400Grad0Icon: {
    top: 32,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  interestRateAt: {
    color: Color.subTextBlack,
    fontSize: FontSize.miniCopy14_size,
  },
  text: {
    color: Color.primaryColorFill,
  },
  forDollarCurrency: {
    color: Color.subTextBlack,
  },
  forDollarCurrencySwapBelow: {
    fontSize: FontSize.subHeaderCopyMobile16_size,
  },
  interestRateAtContainer: {
    textAlign: "center",
    width: 274,
    marginLeft: 6,
    fontFamily: FontFamily.tags,
  },
  interestRate: {
    marginLeft: -152,
    top: 280,
    display: "none",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  withdrawIntoYour: {
    top: 124,
    color: Color.subTextBlack,
    textAlign: "left",
    left: "50%",
    marginLeft: -160,
    position: "absolute",
  },
  twoFactor: {
    fontSize: FontSize.subHeaderCopyMobile16_size,
  },
  twoFactorContainer: {
    color: Color.white1,
    textAlign: "left",
  },
  twoFactorAuthentication2Wrapper: {
    top: 176,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.others7,
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: Padding.p_base,
    left: 20,
    position: "absolute",
  },
  inputAmountTo: {
    color: Color.bodyCopy,
    fontSize: FontSize.subHeaderCopyMobile16_size,
    textAlign: "left",
  },
  text1: {
    color: Color.inactiveText,
    fontSize: FontSize.subHeaderCopyMobile16_size,
    textAlign: "left",
  },
  wrapper: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.inactiveText,
    borderWidth: 1,
    width: 320,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_sm,
    marginTop: 8,
  },
  cardNumber: {
    top: 313,
  },
  expandMoreFill0Wght400GradIcon: {
    marginLeft: 199,
    overflow: "hidden",
  },
  cardNumber1: {
    top: 403,
  },
  cardNumber2: {
    top: 498,
  },
  cardNumber3: {
    top: 588,
  },
  withdraw: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 863,
    overflow: "hidden",
  },
});

export default Withdraw1;
