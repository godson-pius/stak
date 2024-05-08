import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";
import Property1Nigeria from "../../../../components/Property1Nigeria";
import BVNContainer from "../../../../components/BVNContainer";
import Property1Others from "../../../../components/Property1Others";
import { FontSize, FontFamily, Color, Border } from "../../../../GlobalStyles";

import { Ionicons, MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const TransferScreen = ({navigation}) => {
  return (
    <View style={styles.kyc}>
      
      <Text style={[styles.withdraw1, styles.withdraw1Position]}>Transfer</Text>
      <TouchableHighlight onPress={() => {navigation.goBack()}} 
          style={[
            styles.arrowBackFill0Wght400Grad0Icon,
            styles.heroiconsexclamationCircleLayout,
          ]}>
        <Image
          contentFit="cover"
          source={require("../../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
        />
      </TouchableHighlight>
      <Text
        style={[styles.selectTheNational, styles.interestRateAtTypo]}
      >{`Where do you want to send your stak fund to?`}</Text>
      {/* <Text style={styles.selectAMeans}>Select a means of verification</Text> */}
      <BVNContainer
        verificationMethod="Savings"
        propTop={214}
        propMarginLeft={248}
        viaBVNFontFamily="InstrumentSans-Regular"
        onButtonPress={() => {navigation.navigate('TransferScreen2')}}
      />
      <BVNContainer
        verificationMethod="Investments"
        propTop={282}
        propMarginLeft={114}
        viaBVNFontFamily="InstrumentSans-Regular"
        onButtonPress={() => {navigation.navigate('TransferScreen2')}}
      />

      
      <Image
        style={[styles.holderIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../../../../assets/holder2.png")}
      />
      {/* <View style={{backgroundColor: '#554850', padding: 10, width: 40, borderRadius: 10}}>
        <MaterialCommunityIcons name="open-in-new" size={20} color={'#fff'}/>
      </View> */}

    </View>
  );
}

const styles = StyleSheet.create({
  // arrowBackFill0Wght400Grad0Icon: {
  //   top: 32,
  //   left: '5%',
  //   width: 24,
  //   height: 24,
  //   position: "absolute",
  //   overflow: "hidden",
  // },
  arrowBackFill0Wght400Grad0Icon: {
    top: 32,
    left: "5%",
    position: "absolute",
    width: 24,
    overflow: "hidden",
  },
  withdraw1Position: {
    textAlign: "left",
    width: "100%",
    // paddingHorizontal: "5%",
    position: "absolute",
  },
  withdraw1: {
    top: 138,
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    fontFamily: FontFamily.headerCopyMobile201,
    color: Color.black,
  },
  heroiconsexclamationCircleLayout: {
    height: 24,
    width: 24,
  },
  interestRateAtTypo: {
    fontSize: FontSize.miniCopy14_size,
    color: Color.subTextBlack,
  },
  selectTheNational: {
    top: 174,
    lineHeight: 20,
    color: Color.subTextBlack,
    fontFamily: FontFamily.tags,
    textAlign: "left",
    width: "100%",
    // paddingHorizontal: "5%",
    position: "absolute",
  },
  selectAMeans: {
    top: 128,
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
  holderIcon: {
    top: 88,
    borderRadius: Border.br_4xs_7,
    width: 40,
    height: 40,
  },
  iconPosition: {
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
});

export default TransferScreen;