import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Property1Nigeria from "../../components/Property1Nigeria";
import BVNContainer from "../../components/BVNContainer";
import Property1Others from "../../components/Property1Others";
import { FontSize, FontFamily, Color } from "../../GlobalStyles";

const Kyc1 = ({navigation}) => {
  return (
    <View style={styles.kyc}>
      <Property1Nigeria
        emojioneflagForNigeria={require("../../assets/emojioneflagfornigeria3.png")}
        property1NigeriaPosition="absolute"
        property1NigeriaTop={32}
        property1NigeriaLeft={253}
      />
      <Image
        style={styles.arrowBackFill0Wght400Grad0Icon}
        contentFit="cover"
        source={require("../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
      />
      <Text style={styles.selectAMeans}>Select a means of verification</Text>
      <BVNContainer
        verificationMethod="NIN"
        propTop={134}
        propMarginLeft={248}
        viaBVNFontFamily="InstrumentSans-Regular"
        onButtonPress={() => {navigation.navigate('NINVerification')}}
      />
      <BVNContainer
        verificationMethod="International Passport"
        propTop={202}
        propMarginLeft={114}
        viaBVNFontFamily="InstrumentSans-Regular"
        onButtonPress={() => {navigation.navigate('NINVerification1')}}
      />
      <BVNContainer
        verificationMethod="Voters ID"
        propTop={270}
        propMarginLeft={208}
        viaBVNFontFamily="InstrumentSans-Regular"
        onButtonPress={() => {navigation.navigate('VotersIDVerification')}}
      />
      <BVNContainer
        verificationMethod="Drivers License"
        propTop={338}
        propMarginLeft={164}
        viaBVNFontFamily="InstrumentSans-Regular"
        onButtonPress={() => {navigation.navigate('DriversLicenseVerification')}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  arrowBackFill0Wght400Grad0Icon: {
    top: 32,
    left: '5%',
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  selectAMeans: {
    top: 98,
    left: '5%',
    fontSize: FontSize.miniCopy14_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodyCopyMobile16,
    color: Color.subtextBlack,
    textAlign: "left",
    position: "absolute",
  },
  footerHolder: {
    backgroundColor: Color.white1,
    width: 360,
    height: 74,
    overflow: "hidden",
  },
  footerHolderWrapper: {
    top: 726,
    left: 0,
    position: "absolute",
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

export default Kyc1;
