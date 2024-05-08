import React, { useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Nigeria1 from "../../components/Nigeria1";
import Property1Inactive1 from "../../components/Property1Inactive1";
import Property1Others from "../../components/Property1Others";
import { FontSize, FontFamily, Color } from "../../GlobalStyles";
import Property1Inactive from "../../components/Property1Inactive";

const Kyc = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const handleContinue = () => {
    // selectedCountry === 'Nigeria'? navigation.navigate('Kyc1') : navigation.navigate('Kyc2');
    selectedCountry === 'Nigeria'? navigation.navigate('KycQuestions') : navigation.navigate('Kyc2');
  };

  const selectCountry = (country) => {
    console.log("button predsfdfsdsdssed")
    setSelectedCountry(country); // Update the selected currency state
  };
  return (
    <View style={styles.kyc}>
      <Text style={[styles.kycVerification, styles.kycVerificationHeaderPosition]}>
        KYC Verification
      </Text>
      <Nigeria1
        emojioneflagForNigeria={require("../../assets/circleflagsuk.png")}
        nigeria="UK"
        inactive={selectedCountry === 'UK'?require("../../assets/radio-button-checked-fill0-wght400-grad0-opsz24.png") :require("../../assets/circle-fill0-wght400-grad0-opsz24.png")}
        nigeriaPosition="absolute"
        nigeriaTop={180}
        nigeriaLeft={20}
        nigeriaWidth={'100%'}
        inactiveIconMarginLeft={207}
        inactiveIconOverflow="hidden"
        onButtonPress={() => {selectCountry('UK')}}
        selected={selectedCountry === 'UK'}
      />
      <Nigeria1
        emojioneflagForNigeria={require("../../assets/emojioneflagfornigeria2.png")}
        nigeria="Nigeria   "
        inactive={selectedCountry === 'Nigeria'?require("../../assets/radio-button-checked-fill0-wght400-grad0-opsz24.png") :require("../../assets/circle-fill0-wght400-grad0-opsz24.png")}
        nigeriaPosition="absolute"
        nigeriaTop={116}
        nigeriaLeft={20}
        nigeriaWidth={320}
        inactiveIconMarginLeft={175}
        inactiveIconOverflow="hidden"
        onButtonPress={() => {selectCountry('Nigeria')}}
        selected={selectedCountry === 'Nigeria'}
      />
      <Text style={[styles.confirmCountryTo, styles.kycVerificationPosition]}>
        Confirm country to proceed with KYC verification.
      </Text>
      <Property1Inactive1
        getStarted="Confirm"
        property1InactivePosition="absolute"
        property1InactiveTop={268}
        property1InactiveLeft={20}
        property1InactiveBackgroundColor="#eeeded"
        getStartedColor="#bdbdbd"
        onButtonPress={() => {handleContinue()}}
        disable={selectedCountry === ''}
      />
      <Image
        style={styles.arrowBackFill0Wght400Grad0Icon}
        contentFit="cover"
        source={require("../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  kycVerificationPosition: {
    textAlign: "left",
    left: '5%',
    position: "absolute",
  },
  kycVerificationHeaderPosition: {
    textAlign: "left",
    alignSelf: 'center',
    position: "absolute",
  },
  kycVerification: {
    marginLeft: -76,
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    fontFamily: FontFamily.subHeaderCopyMobile16,
    color: Color.black,
    top: 32,
  },
  confirmCountryTo: {
    top: 72,
    fontSize: FontSize.miniCopy14_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodyCopyMobile16,
    color: Color.subtextBlack,
    width: '100%'
  },
  arrowBackFill0Wght400Grad0Icon: {
    left: '5%',
    width: 24,
    height: 24,
    top: 32,
    position: "absolute",
    overflow: "hidden",
  },
  kyc: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    padding: '5%',
    alignItems: 'center'
  },
});

export default Kyc;
