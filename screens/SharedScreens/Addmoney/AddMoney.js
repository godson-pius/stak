import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableHighlight } from "react-native";
// import SectionWithOthers from "../components/SectionWithOthers";
import SectionWithOthers from "../../../components/SectionWithOthers";
import Property1Inactive2 from "../../../components/Property1Inactive";
import Nigeria from "../../../components/Nigeria";
import EmailVerificationContainer from "../../../components/EmailVerificationContainer";
import { FontSize, Color, FontFamily } from "../../../GlobalStyles";

const AddMoney = ({navigation, route}) => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const {funding} = route.params;

  const handleContinue = () => {
    navigation.navigate('AddMoney1', { selectedCurrency, funding }); 
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency); // Update the selected currency state
  };

  
  const isOptionsFilled = selectedCurrency !== '';
  return (
    <View style={styles.addMoney}>
      {/* <SectionWithOthers
        iconId={require("../../../assets/account-balance-wallet-fill0-wght400-grad0-opsz24-1.png")}
        iconCode={require("../../../assets/pending-fill0-wght400-grad0-opsz24.png")}
        othersColor="#163300"
        propColor="#b5b6b4"
      /> */}
      <Text style={[styles.addMoney1, styles.addMoney1Position]}>
        Add money
      </Text>
      <TouchableHighlight onPress={() => navigation.goBack()} style={{width: 54, height: 54,marginVertical:5, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={[
            styles.arrowBackFill0Wght400Grad0Icon,
            styles.heroiconsexclamationCircleLayout,
          ]}
          contentFit="cover"
          source={require("../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
        />
      </TouchableHighlight>
      <View style={styles.interestRate}>
        <Image
          style={styles.heroiconsexclamationCircleLayout}
          contentFit="cover"
          source={require("../../../assets/heroiconsexclamationcircle.png")}
        />
        <Text style={styles.interestRateAtContainer}>
          <Text
            style={[styles.interestRateAt, styles.interestRateAtTypo]}
          >{`Interest rate at `}</Text>
          <Text style={styles.forDollarCurrencySwapBelow}>
            <Text style={styles.text}>{`20% `}</Text>
            <Text style={styles.forDollarCurrency}>
              for dollar currency swap below 1000
            </Text>
          </Text>
        </Text>
      </View>
      
      <TouchableHighlight underlayColor="#DDDDDD" onPress={handleContinue} style={isOptionsFilled? styles.button : styles.buttonNotSelected}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableHighlight>

      <Text
        style={[styles.selectTheNational, styles.interestRateAtTypo]}
      >{`Select the National currency to add money into your local account.`}</Text>
      <Nigeria
        emojioneflagForNigeria={require("../../../assets/circleflagsus.png")}
        nigeria="Dollar $"
        inactive={selectedCurrency === 'Dollar'?require("../../../assets/radio-button-checked-fill0-wght400-grad0-opsz24.png"):require("../../../assets/circle-fill0-wght400-grad0-opsz24.png")}
        showEmojioneflagForNigeriaIco
        nigeriaPosition="absolute"
        nigeriaTop={252}
        nigeriaWidth={320}
        nigeriaBorderColor="#b5b6b4"
        nigeriaColor="#5d5f5e"
        inactiveIconMarginLeft={177}
        inactiveIconOverflow="hidden"
        onButtonPress={() => selectCurrency("Dollar")}
        selected={selectedCurrency === 'Dollar'}
      />
      <Nigeria
        emojioneflagForNigeria={require("../../../assets/circleflagsuk.png")}
        nigeria="Pound £"
        inactive={selectedCurrency === 'Pound'?require("../../../assets/radio-button-checked-fill0-wght400-grad0-opsz24.png"):require("../../../assets/circle-fill0-wght400-grad0-opsz24.png")}
        showEmojioneflagForNigeriaIco
        nigeriaPosition="absolute"
        nigeriaTop={316}
        nigeriaWidth={320}
        nigeriaBorderColor="#b5b6b4"
        nigeriaColor="#3b3939"
        inactiveIconMarginLeft={173}
        inactiveIconOverflow="hidden"
        onButtonPress={() => selectCurrency("Pound")}
        selected={selectedCurrency === 'Pound'}
      />
      <Nigeria
        emojioneflagForNigeria={require("../../../assets/emojioneflagfornigeria.png")}
        nigeria="Naira ₦"
        inactive={selectedCurrency === 'Naira'?require("../../../assets/radio-button-checked-fill0-wght400-grad0-opsz24.png"):require("../../../assets/circle-fill0-wght400-grad0-opsz24.png")}
        showEmojioneflagForNigeriaIco
        nigeriaPosition="absolute"
        nigeriaTop={188}
        nigeriaWidth={320}
        nigeriaBorderColor="#b5b6b4"
        nigeriaColor="#5d5f5e"
        // inactiveIconMarginLeft={179}
        inactiveIconOverflow="hidden"
        onButtonPress={() => selectCurrency("Naira")}
        selected={selectedCurrency === 'Naira'}
      />
      <EmailVerificationContainer
        emailVerificationMessage={`Verify your email address to add more than 126 USD = 100,000,00 NGN to your account.`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addMoney1Position: {
    textAlign: "left",
    width: "100%",
    paddingHorizontal: "5%",
    position: "absolute",
  },
  heroiconsexclamationCircleLayout: {
    height: 24,
    width: 24,
  },
  interestRateAtTypo: {
    fontSize: FontSize.miniCopy14_size,
    color: Color.subtextBlack,
  },
  addMoney1: {
    top: 80,
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    fontFamily: FontFamily.miniCopyMedium,
    color: Color.black,
  },
  arrowBackFill0Wght400Grad0Icon: {
    top: 32,
    left: 20,
    position: "absolute",
    width: 24,
    overflow: "hidden",
  },
  interestRateAt: {
    color: Color.subtextBlack,
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
  selectTheNational: {
    top: 116,
    lineHeight: 20,
    color: Color.subtextBlack,
    fontFamily: FontFamily.miniCopy141,
    textAlign: "left",
    // marginLeft: -160,
    // left: "50%",
    position: "absolute",
    width: "100%",
    paddingHorizontal: "5%",
  },
  addMoney: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  button: {
    top: 344,
    backgroundColor: "#ACF279",
    width: "80%",
    padding: 14,
    // margin: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
  buttonNotSelected: {
    top: 344,
    backgroundColor: Color.inactiveComponent,
    width: "80%",
    padding: 14,
    // margin: 10,
    alignSelf: 'center',
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

export default AddMoney;
