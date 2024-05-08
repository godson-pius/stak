import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SectionWithOthers from "../../components/SectionWithOthers";
import Property1UK from "../../components/Property1UK";
import BVNContainer from "../../components/BVNContainer";
import { FontSize, FontFamily, Color } from "../../GlobalStyles";

const Kyc2 = () => {
  return (
    <View style={styles.kyc}>
      <SectionWithOthers
        iconId={require("../../assets/account-balance-wallet-fill0-wght400-grad0-opsz24-11.png")}
        iconCode={require("../../assets/pending-fill0-wght400-grad0-opsz241.png")}
        othersColor="#b5b6b4"
        propColor="#163300"
      />
      <Property1UK
        property1UKPosition="absolute"
        property1UKTop={32}
        property1UKLeft={'5%'}
      />
      <Image
        style={styles.arrowBackFill0Wght400Grad0Icon}
        contentFit="cover"
        source={require("../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
      />
      <Text style={styles.selectAMeans}>Select a means of verification</Text>
      <BVNContainer
        verificationMethod="BRP"
        propTop={124}
        propMarginLeft={245}
        viaBVNFontFamily="Inter-Regular"
        onButtonPress={() => {}}
      />
      <BVNContainer
        verificationMethod="British Passport"
        propTop={192}
        propMarginLeft={156}
        viaBVNFontFamily="Inter-Regular"
        onButtonPress={() => {}}
      />
      <BVNContainer
        verificationMethod="Drivers License"
        propTop={260}
        propMarginLeft={159}
        viaBVNFontFamily="Inter-Regular"
        onButtonPress={() => {}}
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
    // marginLeft: -160,
    top: 88,
    left: '5%',
    fontSize: FontSize.miniCopy14_size,
    lineHeight: 20,
    fontFamily: FontFamily.tags,
    color: Color.subtextBlack,
    textAlign: "left",
    position: "absolute",
  },
  kyc: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    padding: '5%',
    overflow: "hidden",
    alignItems: 'center'
  },
});

export default Kyc2;
