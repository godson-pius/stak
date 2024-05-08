import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import OtherSection from "../../components/OtherSection";
import VerificationFormContainer from "../../components/VerificationFormContainer";
import Property1Inactive2 from "../../components/Property1Inactive2";
import { Color, FontFamily, FontSize, Border, Padding } from "../../GlobalStyles";
import Property1Inactive from "../../components/Property1Inactive";

const DriversLicenseVerification = () => {
  const [driverLicense, setDriverLicense] = useState(false);
  var variableLength = driverLicense.length;

  const isDisabled = driverLicense.length !== 15;

  return (
    <View style={styles.driversLicenseVerification}>
      {/* <OtherSection /> */}
      <Image
        style={[styles.backIcon, styles.backIconPosition]}
        contentFit="cover"
        source={require("../../assets/back.png")}
      />
      <Text style={[styles.verifyYourIdentity, styles.backIconPosition]}>
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
        >{`Complete your verification by providing your License Number.`}</Text>
      </View>
      <View
        style={[
          styles.yourDriversLicenseWillOnlWrapper,
          styles.yourWrapperFlexBox,
        ]}
      >
        <Text
          style={[styles.yourDriversLicense, styles.yourTypo]}
        >{`Your Driver’s License will only be used to verify 
your identity!`}</Text>
      </View>
      {/* <VerificationFormContainer
        nIN="Driver’s License"
        your11DigitIDNumber="Your 15 digit ID number"
        prop="0/15"
      /> */}

      
      <View
        style={[
          styles.driversLicenseContainer,
          styles.dlWrapperFlexBox,
        ]}
      >
        <View style={{width: "100%", alignItems: 'flex-end'}}>
          <Text
            style={[styles.completeYourVerification, styles.dlText]}
          >{`Driver's License`}</Text>

          <TextInput placeholder='Your 15 digit ID number'
          placeholderTextColor={{color: Color.subTextBlack,}}
          style={[styles.dlCard, styles.cardFlexBox]}
          value={driverLicense}
          maxLength={15}
          onChangeText={(value) => {
            setDriverLicense(value)
          }}/>
          <Text style={[styles.text, styles.textTypo]}>'{variableLength>0?variableLength: 0}/15'</Text>
        </View>
      </View>
      <Property1Inactive
        getStarted="Verify"
        property1InactivePosition="absolute"
        property1InactiveTop={289}
        property1InactiveBackgroundColor="#eee"
        property1InactiveMarginLeft={-160}
        getStartedColor="#bdbdbd"
        onButtonPress={() => {}}
        disable={isDisabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backIconPosition: {
    top: 32,
    position: "absolute",
  },
  yourWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  dlWrapperFlexBox: {
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
  backIcon: {
    width: 24,
    height: 24,
    left: 20,
  },
  verifyYourIdentity: {
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    fontFamily: FontFamily.miniCopyMedium,
    color: Color.black,
    textAlign: "left",
    alignSelf: "center",
  },
  completeYourVerification: {
    textAlign: "left",
    alignSelf: "flex-start",
  },
  completeYourVerificationByWrapper: {
    top: 80,
    width: "90%",
    alignSelf: "center",
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
});

export default DriversLicenseVerification;
