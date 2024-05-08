import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Pressable } from "react-native";
import Property1OthersP from "../../components/Property1OthersP";
import VerificationFormContainer from "../../components/VerificationFormContainer";
import Property1Inactive2 from "../../components/Property1Inactive2";
import { Color, FontFamily, FontSize, Border, Padding } from "../../GlobalStyles";
import Property1Inactive from "../../components/Property1Inactive";
import { TouchableOpacity } from 'react-native-gesture-handler';

const NINVerification1 = ({navigation}) => {
  const [internationalPassportID, setInternationalPassportID] = useState(''); // Initialize as string if it's meant to store text
  var variableLength = internationalPassportID.length;

  const isDisabled = internationalPassportID.length !== 9;

  return (
    <View style={[styles.ninVerification, styles.footerHolderBg]}>
      <Pressable onPress={() => console.log('dd')}>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../../assets/back.png")}
        />
      </Pressable>
      <Text style={styles.verifyYourIdentity}>Verify your identity</Text>
      <View
        style={[
          styles.completeYourVerificationByWrapper,
          styles.yourWrapperFlexBox,
        ]}
      >
        <Text
          style={[styles.completeYourVerification, styles.yourTypo]}
        >{`Complete your verification by providing your National Identity Number.`}</Text>
      </View>
      <View
        style={[styles.yourInternationalPassportNuWrapper, styles.yourFlexBox]}
      >
        <Text
          style={[styles.yourInternationalPassport, styles.yourTypo]}
        >{`Your International Passport Number will only 
be used to verify your identity!`}</Text>
      </View>
      <View
        style={[
          styles.yourInternationalPassportNuContainer,
          styles.yourFlexBox,
        ]}
      >
        <Text
          style={[styles.yourInternationalPassportContainer, styles.yourTypo]}
        >
          <Text
            style={styles.yourInternationalPassport1}
          >{`Your International Passport Number is located at the `}</Text>
          <Text style={styles.topRightCorner}>top right corner</Text>
          <Text style={styles.yourInternationalPassport1}>
            {" "}
            of your booklet
          </Text>
        </Text>
      </View>
      <View
        style={[
          styles.driversLicenseContainer,
          styles.dlWrapperFlexBox,
        ]}
      >
        <View style={{width: "100%", alignItems: 'flex-end'}}>
          <Text
            style={[styles.completeYourVerification, styles.dlText]}
          >{`International passport`}</Text>

          < TextInput placeholder='Your 8 digit ID number and a letter'
          placeholderTextColor={{color: Color.subTextBlack,}}
          style={[styles.dlCard, styles.cardFlexBox]}
          value={internationalPassportID}
          // disable={disableText}
          maxLength={9}
          onChangeText={(value) => {
            setInternationalPassportID(value)
          }}/>
          <Text style={[styles.text, styles.textTypo]}>'{variableLength>0?variableLength: 0}/9'</Text>
        </View>
      </View>
      <Property1Inactive
        getStarted="Verify"
        property1InactivePosition="absolute"
        property1InactiveTop={346}
        property1InactiveBackgroundColor="#eee"
        property1InactiveMarginLeft={-160}
        getStartedColor="#bdbdbd"
        onButtonPress={() => navigation.navigate('NINVerification1')}
        disable={isDisabled} // Pass the disable state to the button component
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footerHolderBg: {
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  yourTypo: {
    fontFamily: FontFamily.tags,
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
  },
  yourFlexBox: {
    justifyContent: "center",
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    position: "absolute",
  },
  footerHolder: {
    width: 360,
    height: 74,
    zIndex: 0,
  },
  footerHolderParent: {
    top: 726,
    left: 0,
    position: "absolute",
  },
  backIcon: {
    width: 24,
    height: 24,
    left: 20,
    top: 32,
    position: "absolute",
  },
  verifyYourIdentity: {
    marginLeft: -91,
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    fontFamily: FontFamily.miniCopyMedium,
    color: Color.black,
    textAlign: "left",
    left: "50%",
    top: 32,
    position: "absolute",
  },
  completeYourVerification: {
    color: Color.subtextBlack,
    textAlign: "left",
    alignSelf: 'flex-start'
  },
  completeYourVerificationByWrapper: {
    top: 80,
    width: "90%",
    alignSelf: "center",
  },
  yourInternationalPassport: {
    textAlign: "center",
    color: Color.subtextBlack,
  },
  yourInternationalPassportNuWrapper: {
    top: 408,
  },
  yourInternationalPassport1: {
    color: Color.subtextBlack,
  },
  topRightCorner: {
    color: Color.primaryColorFill,
  },
  yourInternationalPassportContainer: {
    textAlign: "center",
  },
  yourInternationalPassportNuContainer: {
    top: 265,
  },
  ninVerification: {
    flex: 1,
    width: "100%",
    height: 800,
  },
  dlText: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.tags,
    lineHeight: 22,
    fontSize: FontSize.subHeaderCopyMobile16_size,
  },
  dlCard: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.inactiveMenu,
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_sm,
    marginTop: 8,
    lineHeight: 22,
    fontSize: FontSize.subHeaderCopyMobile16_size,
    color: Color.black,
    fontFamily: FontFamily.tags,
  },
  driversLicenseContainer: {
    position: "absolute",
    top: 144,
    alignItems: "flex-end",
    width: "90%",
    alignSelf: "center",
  },
  yourDriversLicense: {
    textAlign: "center",
  },
  yourDriversLicenseWillOnlWrapper: {
    top: 352,
    width: "100%",
    justifyContent: "center",
  },
  driversLicenseVerification: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  dlWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
});

export default NINVerification1;
