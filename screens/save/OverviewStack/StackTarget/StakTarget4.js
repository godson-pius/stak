import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import Property1Inactive from "../../../../components/Property1Inactive";
import { Color, FontFamily, FontSize } from "../../../../GlobalStyles";

const StakTarget4 = ({navigation}) => {

  const handleContinue = () => {
    navigation.navigate('StakTargetFinal');
  }

  return (
    <View style={styles.stakTarget}>
      <TouchableOpacity onPress={() => {navigation.goBack()}}>
        <Image
          style={styles.arrowBackFill0Wght400Grad0Icon}
          contentFit="cover"
          source={require("../../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
        />
      </TouchableOpacity>
      <Text style={[styles.estimatedTargetCompletion, styles.targetTypo]}>
        Estimated Target Completion
      </Text>
      <Text style={[styles.targetEndDate, styles.targetTypo]}>
        Target End Date
      </Text>
      <Text style={[styles.interestRate, styles.targetTypo]}>
        Interest Rate
      </Text>
      <Text
        style={[styles.followingThisEstimate, styles.targetTypo]}
      >{`Following this estimate your target saving will
be completed in the month of July 2025. 
This assumes that you save 2,500 monthly from 
the start date, 20th of this month.`}</Text>
      <Text style={styles.july2025}>July 2025</Text>
      <Text style={[styles.june2025, styles.june2025Typo]}>20 June 2025</Text>
      <Text style={[styles.perAnnum, styles.june2025Typo]}>
        8.00% per annum
      </Text>
      <View style={[styles.stakTargetChild, styles.stakLayout]} />
      <View style={[styles.stakTargetItem, styles.stakLayout]} />

      <TouchableHighlight underlayColor="#DDDDDD" onPress={handleContinue} style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  targetTypo: {
    textAlign: "left",
    color: Color.subTextBlack,
    fontFamily: FontFamily.tags,
    left: 20,
    position: "absolute",
  },
  june2025Typo: {
    color: Color.primaryColorFill,
    fontFamily: FontFamily.headerCopyMobile201,
    fontWeight: "500",
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  stakLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.others4,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  arrowBackFill0Wght400Grad0Icon: {
    top: 32,
    width: 24,
    height: 24,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  estimatedTargetCompletion: {
    top: 210,
    lineHeight: 22,
    color: Color.subTextBlack,
    fontFamily: FontFamily.tags,
    fontSize: FontSize.subHeaderCopyMobile16_size,
  },
  targetEndDate: {
    top: 92,
    lineHeight: 22,
    color: Color.subTextBlack,
    fontFamily: FontFamily.tags,
    fontSize: FontSize.subHeaderCopyMobile16_size,
  },
  interestRate: {
    top: 296,
    lineHeight: 22,
    color: Color.subTextBlack,
    fontFamily: FontFamily.tags,
    fontSize: FontSize.subHeaderCopyMobile16_size,
  },
  followingThisEstimate: {
    top: 401,
    fontSize: FontSize.miniCopy14_size,
    lineHeight: 20,
    width: 320,
  },
  july2025: {
    top: 248,
    fontFamily: FontFamily.headerCopyMobile201,
    fontWeight: "500",
    fontSize: FontSize.headerCopyMobile20_size,
    textAlign: "left",
    color: Color.subTextBlack,
    left: 20,
    position: "absolute",
  },
  june2025: {
    top: 130,
    fontSize: FontSize.headerCopyMobile20_size,
    color: Color.primaryColorFill,
  },
  perAnnum: {
    top: 334,
    color: Color.primaryColorFill,
    fontSize: FontSize.subHeaderCopyMobile16_size,
  },
  stakTargetChild: {
    top: 369,
  },
  stakTargetItem: {
    top: 170,
  },
  stakTarget: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  button: {
    top: 513,
    backgroundColor: "#ACF279",
    width: "80%",
    padding: 10,
    // margin: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default StakTarget4;
