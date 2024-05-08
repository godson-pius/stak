import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import QuestionContainer from "../../components/QuestionContainer";
import Property1Inactive1 from "../../components/Property1Inactive1";
import Section from "../../components/Section";
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import Property1Inactive from "../../components/Property1Inactive";

const SecurityQuestion2 = ({question, answer, setConfirmVisible}) => {
  const handleContinue = () => {
    console.log(`Your question is ${question} and your answer is ${answer}`);
  }
  return (
    <View style={styles.securityQuestion}>
      {/* <View style={[styles.securityQuestionChild, styles.securityLayout]} />
      <View style={[styles.securityQuestionItem, styles.securityLayout]} />
      <Text style={[styles.securityQuestion1, styles.yourTypo]}>
        Security question
      </Text>
      <Image
        style={[styles.arrowBackFill0Wght400Grad0Icon, styles.fill0IconLayout]}
        contentFit="cover"
        source={require("../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
      />
      <Text style={[styles.setYourSecurity, styles.yourTypo]}>
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
        showFrameView
        investTop={726}
        propColor="#b5b6b4"
        propColor1="#b5b6b4"
        propColor2="#163300"
      /> */}
      <TouchableOpacity onPress={() => {setConfirmVisible(false)}} style={{flex: 1}}></TouchableOpacity>
      <View style={styles.confirmYourSecurityQuestionParent}>
        <Text style={[styles.confirmYourSecurity, styles.yourTypo]}>
          Confirm your security question
        </Text>
        <Property1Inactive
          getStarted="Set your security question"
          property1InactivePosition="absolute"
          property1InactiveBackgroundColor="#9fe870"
          property1InactiveTop={283}
          property1InactiveLeft={20}
          property1InactiveWidth={320}
          property1InactiveMarginLeft="unset"
          getStartedColor="#163300"
          onButtonPress={() => {handleContinue()}}
        />
        
        <TouchableHighlight underlayColor={'#DDDDDD'} onPress={() => {setConfirmVisible(false)}} style={[
              styles.cancelPresentationFill0WghtIcon, {width: 50, height: 50}]}>
          <Image
            style={[
              styles.fill0IconLayout,
            ]}
            contentFit="cover"
            source={require("../../assets/cancel-presentation-fill0-wght400-grad0-opsz24-1.png")}
          />
        </TouchableHighlight>
        <View style={styles.lastName}>
          <Text style={[styles.yourQuestion, styles.yourQuestionTypo]}>
            Your question
          </Text>
          <Text style={[styles.whatAnimalDo, styles.yourQuestionTypo]}>
            {question}
          </Text>
        </View>
        <View style={styles.lastName1}>
          <Text style={[styles.yourQuestion, styles.yourQuestionTypo]}>
            What is the answer to your question?
          </Text>
          <Text style={[styles.whatAnimalDo, styles.yourQuestionTypo]}>
            {answer}
          </Text>
        </View>
      </View>
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
  yourTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyCopyMobile16,
    position: "absolute",
  },
  fill0IconLayout: {
    height: 24,
    width: 24,
  },
  yourQuestionTypo: {
    fontSize: FontSize.bodyCopyMobile16_size,
    textAlign: "left",
    fontFamily: FontFamily.bodyCopyMobile16,
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
    color: Color.subTextBlack,
    fontWeight: "500",
    fontSize: FontSize.headerCopyMobile20_size,
    fontFamily: FontFamily.bodyCopyMobile16,
    left: "50%",
    top: 32,
  },
  arrowBackFill0Wght400Grad0Icon: {
    top: 32,
    left: 20,
  },
  setYourSecurity: {
    marginLeft: -160,
    top: 88,
    fontSize: FontSize.miniCopy14_size,
    lineHeight: 20,
    width: 320,
    color: Color.subTextBlack,
    left: "50%",
  },
  confirmYourSecurity: {
    top: 73,
    color: Color.bodyCopy,
    fontWeight: "500",
    fontSize: FontSize.headerCopyMobile20_size,
    fontFamily: FontFamily.bodyCopyMobile16,
    alignSelf: 'center'
    // left: 20,
  },
  cancelPresentationFill0WghtIcon: {
    top: 14,
    right: "5%",
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
    overflow: "hidden",
  },
  yourQuestion: {
    color: Color.subTextBlack,
    fontWeight: "500",
  },
  whatAnimalDo: {
    lineHeight: 22,
    color: Color.black,
    marginTop: 12,
  },
  lastName: {
    top: 121,
    left: 20,
    position: "absolute",
  },
  lastName1: {
    top: 190,
    left: 20,
    position: "absolute",
  },
  confirmYourSecurityQuestionParent: {
    top: 372,
    left: 0,
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    backgroundColor: Color.white,
    width: "100%",
    height: 428,
    position: "absolute",
    overflow: "hidden",
  },
  securityQuestion: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SecurityQuestion2;
