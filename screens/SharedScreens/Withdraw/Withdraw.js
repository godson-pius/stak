import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableHighlight } from "react-native";
import SectionWithOthers from "../../../components/SectionWithOthers";
import Property1Inactive from "../../../components/Property1Inactive";
import Nigeria from "../../../components/Nigeria";
import { FontSize, Color, FontFamily } from "../../../GlobalStyles";

const Withdraw = ({navigation}) => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const handleContinue = () => {
    console.log("button pressed")
    console.log("Selected currency:", selectedCurrency);
    navigation.navigate('Withdraw1');
  };

  const selectCurrency = (currency) => {
    console.log("button predsfdfsdsdssed")
    setSelectedCurrency(currency); // Update the selected currency state
  };

  
  const isOptionsFilled = selectedCurrency !== '';
  return (
    <View style={styles.withdraw}>
      <SectionWithOthers
        iconId={require("../../../assets/account-balance-wallet-fill0-wght400-grad0-opsz24-1.png")}
        iconCode={require("../../../assets/pending-fill0-wght400-grad0-opsz24.png")}
        othersColor="#163300"
        propColor="#b5b6b4"
      />
      <Text style={[styles.withdraw1, styles.withdraw1Position]}>Withdraw</Text>
      <TouchableHighlight onPress={() => {navigation.goBack()}}>
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
      <Property1Inactive
        getStarted="Continue"
        property1InactivePosition="absolute"
        property1InactiveTop={412}
        property1InactiveLeft={20}
        property1InactiveBackgroundColor="#eee"
        property1InactiveMarginLeft="unset"
        getStartedColor="#bdbdbd"
        onButtonPress={() => {handleContinue()}}
        disable={!isOptionsFilled}

      />
      <Text
        style={[styles.selectTheNational, styles.interestRateAtTypo]}
      >{`Select the National currency to withdraw into your local account.`}</Text>
      <Nigeria
        emojioneflagForNigeria={require("../../../assets/circleflagsus.png")}
        nigeria="Dollar $"
        inactive={selectedCurrency === 'Dollar'?require("../../../assets/radio-button-checked-fill0-wght400-grad0-opsz24.png"):require("../../../assets/circle-fill0-wght400-grad0-opsz24.png")}
        showEmojioneflagForNigeriaIco
        nigeriaPosition="absolute"
        nigeriaTop={260}
        nigeriaLeft={20}
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
        nigeriaTop={324}
        nigeriaLeft={20}
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
        nigeria="Naira ₦   "
        inactive={selectedCurrency === 'Naira'?require("../../../assets/radio-button-checked-fill0-wght400-grad0-opsz24.png"):require("../../../assets/circle-fill0-wght400-grad0-opsz24.png")}
        showEmojioneflagForNigeriaIco
        nigeriaPosition="absolute"
        nigeriaTop={196}
        nigeriaLeft={20}
        nigeriaWidth={320}
        nigeriaBorderColor="#b5b6b4"
        nigeriaColor="#5d5f5e"
        inactiveIconMarginLeft={179}
        inactiveIconOverflow="hidden"
        onButtonPress={() => selectCurrency("Naira")}
        selected={selectedCurrency === 'Naira'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  withdraw1Position: {
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
    color: Color.subTextBlack,
  },
  withdraw1: {
    top: 88,
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    fontFamily: FontFamily.headerCopyMobile201,
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
    color: Color.subTextBlack,
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
    flexDirection: "row",
    display: "none",
    left: "50%",
    position: "absolute",
  },
  selectTheNational: {
    top: 124,
    lineHeight: 20,
    color: Color.subTextBlack,
    fontFamily: FontFamily.tags,
    textAlign: "left",
    width: "100%",
    paddingHorizontal: "5%",
    position: "absolute",
  },
  withdraw: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Withdraw;
