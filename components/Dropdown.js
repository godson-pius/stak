import * as React from "react";
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { StatusBar } from "expo-status-bar";

const Dropdown = ({onSelectQuestion, toggleModal}) => {
  const onTapQuestion = (value) => {
    onSelectQuestion(value);
    toggleModal();
  }
  return (
    <View style={styles.dropdown}>
      <TouchableHighlight underlayColor="#DDDDDD" onPress={() => onTapQuestion('What year did you enter college?')}
        style={[
          styles.whatYearDidYouEnterCollegWrapper,
          styles.whatWrapperFlexBox,
        ]}
      >
        <Text style={styles.whatYearDid}>What year did you enter college?</Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="#DDDDDD" onPress={() => onTapQuestion('What was the name of your childhood friend?')}
        style={[
          styles.whatWasTheNameOfYourChilWrapper,
          styles.whatWrapperFlexBox,
        ]}
      >
        <Text style={styles.whatYearDid}>{`What was the name of your childhood friend?`}</Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="#DDDDDD" onPress={() => onTapQuestion('What animal do you dislike?')}
        style={[
          styles.whatAnimalDoYouDislikeWrapper,
          styles.whatWrapperFlexBox,
        ]}
      >
        <Text style={styles.whatYearDid}>What animal do you dislike?</Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="#DDDDDD" onPress={() => onTapQuestion('What is your dream city?')}
        style={[
          styles.whatIsYourDreamCityWrapper,
          styles.whatWrapperFlexBox,
        ]}
      >
        <Text style={styles.whatYearDid}>What is your dream city?</Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="#DDDDDD" onPress={() => onTapQuestion('What is your grandfather’s name?')}
        style={[
          styles.whatIsYourGrandfathersNamWrapper,
          styles.whatWrapperFlexBox,
        ]}
      >
        <Text style={styles.whatYearDid}>What is your grandfather’s name?</Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="#DDDDDD" onPress={() => onTapQuestion('What is your mother’s favorite show?')}
        style={[
          styles.whatIsYourMothersFavoriteWrapper,
          styles.whatWrapperFlexBox,
        ]}
      >
        <Text style={styles.whatYearDid}>
          What is your mother’s favorite show?
        </Text>
      </TouchableHighlight>
      <View style={[styles.dropdownChild, styles.dropdownChildLayout]} />
      <View style={[styles.dropdownItem, styles.dropdownChildLayout]} />
      <View style={[styles.dropdownInner, styles.dropdownChildLayout]} />
      <View style={[styles.lineView, styles.dropdownChildLayout]} />
      <View style={[styles.dropdownChild1, styles.dropdownChildLayout]} />
      
      
      <StatusBar translucent={true} backgroundColor="transparent" />
    </View>
  );
};

const styles = StyleSheet.create({
  whatWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    // left: 12,
    paddingVertical: 5,
    width: '90%',
    alignSelf: 'center',
    position: "absolute",
  },
  dropdownChildLayout: {
    height: 1,
    width: 321,
    borderTopWidth: 1,
    borderColor: Color.others4,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  whatYearDid: {
    fontSize: FontSize.subHeaderCopyMobile16_size,
    lineHeight: 22,
    fontFamily: FontFamily.tags,
    color: Color.black,
    textAlign: "left",
  },
  whatYearDidYouEnterCollegWrapper: {
    top: 16,
  },
  whatWasTheNameOfYourChilWrapper: {
    top: 66,
  },
  whatAnimalDoYouDislikeWrapper: {
    top: 138,
  },
  whatIsYourDreamCityWrapper: {
    top: 188,
  },
  whatIsYourGrandfathersNamWrapper: {
    top: 238,
  },
  whatIsYourMothersFavoriteWrapper: {
    top: 288,
  },
  dropdownChild: {
    top: 54,
  },
  dropdownItem: {
    top: 126,
  },
  dropdownInner: {
    top: 176,
  },
  lineView: {
    top: 226,
  },
  dropdownChild1: {
    top: 276,
  },
  dropdown: {
    backgroundColor: Color.white,
    width: 320,
    height: 326,
  },
});

export default Dropdown;
