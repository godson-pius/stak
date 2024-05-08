import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Pressable } from "react-native";
import Property1OthersP from "../../components/Property1OthersP";
import VerificationFormContainer from "../../components/VerificationFormContainer";
import Property1Inactive2 from "../../components/Property1Inactive2";
import { Color, FontFamily, FontSize, Border, Padding } from "../../GlobalStyles";
import Property1Inactive from "../../components/Property1Inactive";

const NINVerification = ({ navigation }) => {
  const [NIN, setNIN] = useState('');
  var variableLength = NIN.length;

  const isDisabled = NIN.length !== 15

  const handleVerify = async() => {
    navigation.navigate('KycQuestions')
  }

  return (
    <View style={[styles.ninVerification, styles.footerHolderBg]}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../../assets/back.png")}
        />
      </Pressable>
      <Text style={[styles.verifyYourIdentity, styles.textTypo]}>
        Verify your identity
      </Text>
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
        style={[
          styles.yourNinWillOnlyBeUsedToWrapper,
          styles.yourWrapperFlexBox,
        ]}
      >
        <Text
          style={[styles.yourNinWill, styles.yourTypo]}
        >{`Your NIN will only be used to verify 
your identity!`}</Text>
      </View>
      <View
        style={[
          styles.forgottenYourNinDial346Wrapper,
          styles.yourWrapperFlexBox,
        ]}
      >
        <Text style={styles.forgottenYourNinContainer}>
          <Text style={styles.yourTypo}>{`Forgotten your NIN? Dial `}</Text>
          <Text style={[styles.text, styles.textTypo]}>*346*1#</Text>
          <Text style={styles.yourTypo}>{` with the 
number you enrolled with.`}</Text>
        </Text>
      </View>

      <View
        style={[
          styles.driversLicenseContainer,
          styles.dlWrapperFlexBox,
        ]}
      >
        <View style={{ width: "100%", alignItems: 'flex-end' }}>
          <Text
            style={[styles.completeYourVerification, styles.dlText]}
          >{`NIN`}</Text>

          <TextInput placeholder='Your 15 digit ID number'
            placeholderTextColor={{ color: Color.subTextBlack, }}
            style={[styles.dlCard, styles.cardFlexBox]}
            value={NIN}
            maxLength={15}
            onChangeText={(value) => {
              setNIN(value)
            }} />

          <Text style={[styles.text, styles.textTypo]}>'{variableLength > 0 ? variableLength : 0}/15'</Text>
        </View>
      </View>
      <Property1Inactive
        getStarted="Verify"
        property1InactivePosition="absolute"
        property1InactiveTop={346}
        property1InactiveBackgroundColor="#eee"
        property1InactiveMarginLeft={-160}
        getStartedColor="#bdbdbd"
        onButtonPress={handleVerify}
        disable={isDisabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footerHolderBg: {
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  textTypo: {
    fontFamily: FontFamily.miniCopyMedium,
    fontWeight: "500",
  },
  yourWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  yourTypo: {
    color: Color.subtextBlack,
    fontFamily: FontFamily.tags,
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
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
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    fontFamily: FontFamily.miniCopyMedium,
    color: Color.black,
    textAlign: "left",
    alignSelf: "center",
    top: 32,
  },
  completeYourVerification: {
    textAlign: "left",
    alignSelf: 'flex-start'
  },
  completeYourVerificationByWrapper: {
    top: 80,
    width: "90%",
    alignSelf: "center",
  },
  yourNinWill: {
    textAlign: "center",
  },
  yourNinWillOnlyBeUsedToWrapper: {
    marginLeft: -160,
    top: 409,
    width: 320,
    justifyContent: "center",
    left: "50%",
  },
  text: {
    fontSize: FontSize.bodyCopyMobile16_size,
    color: Color.primaryColorFill,
  },
  forgottenYourNinContainer: {
    textAlign: "left",
  },
  forgottenYourNinDial346Wrapper: {
    top: 265,
    width: 315,
    flexDirection: "row",
    left: 20,
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

export default NINVerification;
