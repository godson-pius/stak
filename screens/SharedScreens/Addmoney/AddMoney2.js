import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableHighlight, TextInput } from "react-native";
import Property1Inactive2 from "../../../components/Property1Inactive";
import TypeNumbersThemeDark from "../../../components/TypeNumbersThemeDark";
import { FontFamily, FontSize, Color } from "../../../GlobalStyles";

const AddMoney2 = () => {
  const isOptionsFilled = true;
  const handleContinue = () => {
    
  };
  return (
    <View style={styles.addMoney}>
      <Text style={[styles.creditYourWallet, styles.text1Typo]}>
        Credit your walletsad
      </Text>
      <Image
        style={[
          styles.arrowBackFill0Wght400Grad0Icon,
          styles.heroiconsexclamationCircleLayout,
        ]}
        contentFit="cover"
        source={require("../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
      />
      <View style={styles.interestRate}>
        <Image
          style={styles.heroiconsexclamationCircleLayout}
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
      <Text style={[styles.text1, styles.text1Typo]}>
        <Text style={styles.text2}>₦</Text>
        <Text style={styles.text3}>0.00</Text>
      </Text>
      <Text style={styles.fundingLimit}>Funding limit</Text>
      <Text style={styles.ngn}>100,000 NGN</Text>
      <Text style={[styles.ngn1, styles.ngn1Typo]}>0.00 NGN</Text>
      <Text style={[styles.currentWalletBalance, styles.ngn1Typo]}>
        Current Wallet Balance
      </Text>
      <Property1Inactive2
        getStarted="Add ₦0.00"
        property1InactivePosition="absolute"
        property1InactiveTop={331}
        property1InactiveLeft={20}
        property1InactiveBackgroundColor="#eee"
        property1InactiveMarginLeft="unset"
        getStartedColor="#bdbdbd"
      />
      
      <TouchableHighlight underlayColor="#DDDDDD" onPress={handleContinue} style={isOptionsFilled? styles.button : styles.buttonNotSelected}>
        <Text style={styles.buttonText}>Add ₦2,030</Text>
      </TouchableHighlight>

      {/* <TypeNumbersThemeDark
        showNavigation={false}
        typeNumbersThemeDarkPosition="absolute"
        typeNumbersThemeDarkBackgroundColor="#0c0f0d"
        typeNumbersThemeDarkTop={402}
        typeNumbersThemeDarkLeft={0}
        keyPrimaryBorderRadius={8}
        keyPrimaryBackgroundColor="#5d5f5e"
        keyPrimaryBorderRadius1={8}
        keyPrimaryBackgroundColor1="#5d5f5e"
        keyPrimaryBorderRadius2={8}
        keyPrimaryBackgroundColor2="#5d5f5e"
        keyFunctionBorderRadius={8}
        keyPrimaryBorderRadius3={8}
        keyPrimaryBackgroundColor3="#5d5f5e"
        keyPrimaryBorderRadius4={8}
        keyPrimaryBackgroundColor4="#5d5f5e"
        keyPrimaryBorderRadius5={8}
        keyPrimaryBackgroundColor5="#5d5f5e"
        keyFunctionBorderRadius1={8}
        keyPrimaryBorderRadius6={8}
        keyPrimaryBackgroundColor6="#5d5f5e"
        keyPrimaryBorderRadius7={8}
        keyPrimaryBackgroundColor7="#5d5f5e"
        keyPrimaryBorderRadius8={8}
        keyPrimaryBackgroundColor8="#5d5f5e"
        keyFunctionBorderRadius2={8}
        keyFunctionBackgroundColor="#23262a"
        keyPrimaryBorderRadius9={8}
        keyPrimaryBackgroundColor9="#5d5f5e"
        keyPrimaryBorderRadius10={8}
        keyPrimaryBackgroundColor10="#5d5f5e"
        keyPrimaryBorderRadius11={8}
        keyPrimaryBackgroundColor11="#5d5f5e"
        keySpecialFunctionBorderRadius={8}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.miniCopyMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  heroiconsexclamationCircleLayout: {
    height: 24,
    width: 24,
  },
  ngn1Typo: {
    top: 88,
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
    fontFamily: FontFamily.miniCopy141,
    textAlign: "left",
    position: "absolute",
  },
  creditYourWallet: {
    marginLeft: -85,
    fontSize: FontSize.headerCopyMobile20_size,
    color: Color.black,
    top: 32,
  },
  arrowBackFill0Wght400Grad0Icon: {
    left: 20,
    top: 32,
    position: "absolute",
    overflow: "hidden",
  },
  interestRateAt: {
    color: Color.subtextBlack,
    fontSize: FontSize.miniCopy14_size,
  },
  text: {
    color: Color.primaryColorFill,
  },
  forDollarCurrency: {
    color: Color.subtextBlack,
  },
  forDollarCurrencySwapBelow: {
    fontSize: FontSize.bodyCopyMobile16_size,
  },
  interestRateAtContainer: {
    textAlign: "center",
    width: 274,
    marginLeft: 6,
    fontFamily: FontFamily.miniCopy141,
  },
  interestRate: {
    marginLeft: -152,
    top: 280,
    flexDirection: "row",
    display: "none",
    left: "50%",
    position: "absolute",
  },
  text2: {
    letterSpacing: 5.1,
    fontSize: FontSize.bodyCopyMobile16_size,
    color: Color.subtextBlack,
  },
  text3: {
    fontSize: FontSize.size_13xl,
    color: Color.inactiveText,
  },
  text1: {
    marginLeft: -44,
    top: 156,
  },
  fundingLimit: {
    top: 243,
    fontSize: FontSize.bodyCopyMobile16_size,
    color: Color.subtextBlack,
    left: 20,
    textAlign: "left",
    fontFamily: FontFamily.miniCopyMedium,
    fontWeight: "500",
    position: "absolute",
  },
  ngn: {
    marginLeft: 41,
    width: 114,
    lineHeight: 20,
    top: 243,
    color: Color.subtextBlack,
    fontSize: FontSize.miniCopy14_size,
    fontFamily: FontFamily.miniCopy141,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  ngn1: {
    marginLeft: 61,
    width: 99,
    color: Color.subtextBlack,
    left: "50%",
  },
  currentWalletBalance: {
    left: 20,
    color: Color.black,
  },
  addMoney: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  button: {
    top: 362,
    backgroundColor: "#ACF279",
    width: "80%",
    padding: 10,
    // margin: 10,
    alignSelf: 'center',
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
});

export default AddMoney2;
