import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import Property1Inactive1 from "../../../../components/Property1Inactive1";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../../../../GlobalStyles";
import Property1Inactive from "../../../../components/Property1Inactive";

const PreviewLock = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.preview, styles.iconLayout]}>
      <View style={styles.previewChild} />
      <View style={styles.previewItem} />
      <Property1Inactive
        getStarted="Create Stak lock"
        property1InactivePosition="absolute"
        property1InactiveBackgroundColor="#9fe870"
        property1InactiveTop={464}
        property1InactiveLeft={20}
        property1InactiveWidth={320}
        property1InactiveMarginLeft="unset"
        getStartedColor="#163300"
        onButtonPress={() => {navigation.navigate('VerifyLock')}}
      />
      <Text style={styles.preview1}>Preview</Text>
      <Pressable
        style={styles.arrowBackFill0Wght400Grad0}
        onPress={() => navigation.navigate("CreateStakLock1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
        />
      </Pressable>
      <Text style={[styles.ensureYourStak, styles.stakTypo]}>
        Ensure your Stak lock is ready to go!
      </Text>
      <View style={styles.stakLockNameParent}>
        <Text style={[styles.stakLockName, styles.stakTypo]}>
          Stak lock name
        </Text>
        <Text style={[styles.duration, styles.stakTypo]}>Duration</Text>
        <Text style={[styles.amount, styles.stakTypo]}>Amount</Text>
        <Text style={[styles.fundFrom, styles.stakTypo]}>Fund from</Text>
        <Text style={[styles.payback, styles.stakTypo]}>Payback</Text>
        <Text style={[styles.aCar, styles.aCarTypo]}>A car</Text>
        <Text style={[styles.days, styles.aCarTypo]}>31 - 60 days</Text>
        <Text style={[styles.text, styles.aCarTypo]}>100,000</Text>
        <Text style={[styles.mySavings, styles.aCarTypo]}>My Savings</Text>
        <Text style={[styles.sept2024, styles.aCarTypo]}>15/Sept/2024</Text>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.lineView, styles.frameLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  stakTypo: {
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
    textAlign: "left",
    color: Color.subTextBlack,
    fontFamily: FontFamily.bodyCopyMobile16,
    position: "absolute",
  },
  aCarTypo: {
    color: Color.black,
    right: 20,
    width: '100%',
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
    textAlign: "right",
    fontFamily: FontFamily.bodyCopyMobile16,
    fontWeight: "500",
    position: "absolute",
  },
  frameLayout: {
    height: 1,
    width: '100%',
    borderTopWidth: 1,
    borderColor: Color.others4,
    borderStyle: "solid",
    // left: 0,
    position: "absolute",
  },
  previewChild: {
    top: 72,
    width: 152,
    display: "none",
    height: 8,
    backgroundColor: Color.primaryColor,
    borderRadius: Border.br_5xs,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  previewItem: {
    top: 375,
    width: 252,
    display: "none",
    height: 8,
    backgroundColor: Color.primaryColor,
    borderRadius: Border.br_5xs,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  preview1: {
    fontSize: FontSize.headerCopyMobile20_size,
    textAlign: "left",
    color: Color.subTextBlack,
    fontFamily: FontFamily.bodyCopyMobile16,
    fontWeight: "500",
    left: "50%",
    top: 88,
    marginLeft: -160,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  arrowBackFill0Wght400Grad0: {
    top: 32,
    width: 24,
    height: 24,
    left: 20,
    position: "absolute",
  },
  ensureYourStak: {
    top: 128,
    left: "50%",
    marginLeft: -160,
    fontSize: FontSize.miniCopy14_size,
    width: 252,
  },
  stakLockName: {
    top: 0,
    left: 20,
  },
  duration: {
    top: 52,
    left: 20,
  },
  amount: {
    top: 104,
    left: 20,
  },
  fundFrom: {
    top: 156,
    left: 20,
  },
  payback: {
    top: 208,
    left: 20,
  },
  aCar: {
    top: 0,
  },
  days: {
    top: 52,
  },
  text: {
    top: 104,
  },
  mySavings: {
    top: 156,
  },
  sept2024: {
    top: 208,
  },
  frameChild: {
    top: 36,
  },
  frameItem: {
    top: 88,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.others4,
    borderStyle: "solid",
  },
  frameInner: {
    top: 140,
  },
  lineView: {
    top: 192,
  },
  stakLockNameParent: {
    top: 180,
    width: '100%',
    height: 228,
    left: 0,
    position: "absolute",
  },
  preview: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
  },
});

export default PreviewLock;
