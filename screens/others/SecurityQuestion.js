import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableHighlight, TouchableWithoutFeedback, Modal } from "react-native";
import QuestionContainer from "../../components/QuestionContainer";
import Property1Inactive1 from "../../components/Property1Inactive1";
import Section from "../../components/Section";
import { Color, Border, FontFamily, FontSize, Padding } from "../../GlobalStyles";
import Property1Inactive from "../../components/Property1Inactive";
import Dropdown from "../../components/Dropdown";


import SecurityQuestion2 from "./SecurityQuestion2";

import { StatusBar } from "expo-status-bar";

const SecurityQuestion = ({navigation}) => {
  const [selectedQuestion, setSelectedQuestion] = React.useState('');
  const [questionAnswer, setQuestionAnswer] = React.useState('');

  const [modalVisible, setModalVisible] = React.useState(false);
  const [confirmVisible, setConfirmVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

  const onSelectQuestion = (value) => {
    setSelectedQuestion(value);
  }

  const handleContinue = () => {
    console.log(selectedQuestion)
    console.log(questionAnswer)
    
    setConfirmVisible(true);
  }

  const shouldDisable = selectedQuestion != '' && questionAnswer != null && questionAnswer != '';

  return (
    <View style={styles.securityQuestion}>
      <View style={[styles.securityQuestionChild, styles.securityLayout]} />
      <View style={[styles.securityQuestionItem, styles.securityLayout]} />
      <Text style={[styles.securityQuestion1, styles.securityTypo]}>
        Security question
      </Text>
      <Image
        style={[styles.arrowBackFill0Wght400Grad0Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
      />
      <Text style={[styles.setYourSecurity, styles.securityTypo]}>
        Set your security question to keep your account double proof. Save your
        answer after setting!
      </Text>
      <TouchableHighlight onPress={() => {toggleModal()}}>
        <View style={[styles.lastName, styles.lastNamePosition]}>
          <Text style={[styles.yourQuestion, styles.questionTypo]}>
            Your question
          </Text>
          <View style={styles.selectQuestionParent}>
            <Text style={[styles.selectQuestion, styles.questionTypo]}>
              {selectedQuestion === '' || null? 'Select question': selectedQuestion}
            </Text>
            <Image
              style={[styles.mingcutedownLineIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../../assets/mingcutedownline1.png")}
            />
          </View>
        </View>
      </TouchableHighlight>
      <QuestionContainer
        whatIsTheAnswerToYourQues="What is the answer to your question?"
        answer="Answer"
        propTop={247}
        propColor="#5d5f5e"
        questionAnswer={questionAnswer}
        setQuestionAnswer={setQuestionAnswer}
      />
      {/* <View style={[styles.lastName, styles.lastNameStyle]}>
        <Text style={[styles.whatIsThe, styles.answerTypo]}>
          whatIsTheAnswerToYourQues
        </Text>
        <View style={styles.answerWrapper}>
          <Text style={[styles.answer, styles.answerTypo, styles.answerStyle]}>
            answer
          </Text>
        </View>
      </View> */}
      <Property1Inactive
        getStarted="Confirm"
        property1InactivePosition="absolute"
        property1InactiveBackgroundColor="#eee"
        property1InactiveTop={364}
        property1InactiveLeft="50%"
        property1InactiveWidth={320}
        property1InactiveMarginLeft={-160}
        getStartedColor="#bdbdbd"
        onButtonPress={handleContinue}
        disable={!shouldDisable}
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

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Dropdown onSelectQuestion={onSelectQuestion} toggleModal={toggleModal}/>
              <TouchableHighlight onPress={toggleModal}>
                <Image
                  style={[styles.arrowBackFill0Wght400Grad0Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
                />
              </TouchableHighlight>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        visible={confirmVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setConfirmVisible(false)}
      >
        <SecurityQuestion2 question={selectedQuestion} answer={questionAnswer} setConfirmVisible={setConfirmVisible}/>
      </Modal>

      <StatusBar translucent={true} backgroundColor="transparent" />
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
    // left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  lastNamePosition: {
    // left: 20,
    width: '90%',
    alignSelf: 'center',
    position: "absolute",
  },
  questionTypo: {
    fontSize: FontSize.bodyCopyMobile16_size,
    textAlign: "left",
    color: Color.subTextBlack,
    fontFamily: FontFamily.bodyCopyMobile16,
  },
  securityQuestionChild: {
    top: 72,
    width: 152,
  },
  securityQuestionItem: {
    top: 375,
    width: 52,
  },
  securityQuestion1: {
    // marginLeft: -84,
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    top: 32,
    alignSelf: "center",
  },
  arrowBackFill0Wght400Grad0Icon: {
    top: 32,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  setYourSecurity: {
    // marginLeft: -160,
    top: 88,
    fontSize: FontSize.miniCopy14_size,
    lineHeight: 20,
    width: "90%",
    alignSelf: "center",
  },
  yourQuestion: {
    fontWeight: "500",
  },
  selectQuestion: {
    lineHeight: 22,
  },
  mingcutedownLineIcon: {
    right: 0,
  },
  selectQuestionParent: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.inactiveText,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_sm,
    marginTop: 8,
    width: "100%",
    justifyContent: 'space-between'
  },
  lastName: {
    top: 152,
  },
  securityQuestion: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  securityQuestion: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for the modal
  },
  modalContent: {
    // backgroundColor: Color.white,
    width: "80%",
    padding: 20,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },

});

export default SecurityQuestion;
