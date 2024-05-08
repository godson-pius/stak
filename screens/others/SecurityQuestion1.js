import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import QuestionContainer from "../../components/QuestionContainer";
import Property1Inactive1 from "../../components/Property1Inactive1";
import Section from "../../components/Section";
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";

const SecurityQuestion1 = () => {
  return (
    <View style={styles.securityQuestion}>
      <View style={[styles.securityQuestionChild, styles.securityLayout]} />
      <View style={[styles.securityQuestionItem, styles.securityLayout]} />
      <Text style={[styles.securityQuestion1, styles.securityTypo]}>
        Security question
      </Text>
      <Image
        style={styles.arrowBackFill0Wght400Grad0Icon}
        contentFit="cover"
        source={require("../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
      />
      <Text style={[styles.setYourSecurity, styles.securityTypo]}>
        Set your security question to keep your account double proof. Save your
        answer after setting!
      </Text>
      <QuestionContainer
        whatIsTheAnswerToYourQues="Your question"
        answer="What animal do you dislike?"
        propTop={152}
        propColor="#0c0f0d"
      />
      <QuestionContainer
        whatIsTheAnswerToYourQues="What is the answer to your question?"
        answer="Cats"
        propTop={247}
        propColor="#0c0f0d"
      />
      <Property1Inactive1
        getStarted="Confirm"
        property1InactivePosition="absolute"
        property1InactiveBackgroundColor="#9fe870"
        property1InactiveTop={364}
        property1InactiveLeft="50%"
        property1InactiveWidth={320}
        property1InactiveMarginLeft={-160}
        getStartedColor="#163300"
      />
      <Section
        productCode={require("../../assets/enterprise-fill0-wght400-grad0-opsz24.png")}
        dimensionCode={require("../../assets/account-balance-wallet-fill0-wght400-grad0-opsz24-1.png")}
        itemCode={require("../../assets/pending-fill0-wght400-grad0-opsz24.png")}
        showFrameView={false}
        investTop={726}
        propColor="#b5b6b4"
        propColor1="#b5b6b4"
        propColor2="#163300"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  securityLayout: {
    display: "none",
    height: 8,
    backgroundColor: Color.primaryColor,
    borderRadius: Border.br_5xs,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  securityTypo: {
    textAlign: "left",
    color: Color.subTextBlack,
    fontFamily: FontFamily.bodyCopyMobile16,
    left: "50%",
    position: "absolute",
  },
  securityQuestionChild: {
    top: 72,
    width: 152,
  },
  securityQuestionItem: {
    top: 375,
    width: 252,
  },
  securityQuestion1: {
    marginLeft: -84,
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    top: 32,
  },
  arrowBackFill0Wght400Grad0Icon: {
    width: 24,
    height: 24,
    top: 32,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  setYourSecurity: {
    marginLeft: -160,
    top: 88,
    fontSize: FontSize.miniCopy14_size,
    lineHeight: 20,
    width: 320,
  },
  securityQuestion: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SecurityQuestion1;
