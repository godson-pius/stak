import React, { useMemo } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value,) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const QuestionContainer = ({
  whatIsTheAnswerToYourQues,
  answer,
  propTop,
  propColor,
  questionAnswer,
  setQuestionAnswer,
}) => {
  const lastNameStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const answerStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={[styles.lastName, lastNameStyle]}>
      <Text style={[styles.whatIsThe, styles.answerTypo]}>
        {whatIsTheAnswerToYourQues}
      </Text>
      <View style={styles.answerWrapper}>
        <TextInput style={[styles.answer, styles.answerTypo, answerStyle]} placeholder={answer}
        value={questionAnswer} onChangeText={(value => {
          setQuestionAnswer(value)
        })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  answerTypo: {
    textAlign: "left",
    width: '100%',
    // height: '100%',
    color: Color.subTextBlack,
    fontFamily: FontFamily.bodyCopyMobile16,
    fontSize: FontSize.bodyCopyMobile16_size,
  },
  whatIsThe: {
    fontWeight: "500",
  },
  answer: {
    lineHeight: 22,
  },
  answerWrapper: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.inactiveText,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_sm,
    marginTop: 8,
  },
  lastName: {
    position: "absolute",
    top: 247,
    // left: 20,
    width: "90%",
    alignSelf: 'center',
  },
});

export default QuestionContainer;
