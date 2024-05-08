import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SecurityQuestionFormContainer = ({
  questionText,
  dislikedAnimalQuestion,
  propTop,
}) => {
  const lastNameStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.lastName, lastNameStyle]}>
      <Text style={[styles.yourQuestion, styles.yourQuestionTypo]}>
        {questionText}
      </Text>
      <View style={styles.whatAnimalDoYouDislikeWrapper}>
        <Text style={[styles.whatAnimalDo, styles.yourQuestionTypo]}>
          {dislikedAnimalQuestion}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yourQuestionTypo: {
    textAlign: "left",
    fontSize: FontSize.subHeaderCopyMobile16_size,
  },
  yourQuestion: {
    fontWeight: "500",
    fontFamily: FontFamily.headerCopyMobile201,
    color: Color.subTextBlack,
  },
  whatAnimalDo: {
    lineHeight: 22,
    fontFamily: FontFamily.tags,
    color: Color.black,
  },
  whatAnimalDoYouDislikeWrapper: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.inactiveText,
    borderWidth: 1,
    width: 320,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_sm,
    marginTop: 8,
  },
  lastName: {
    position: "absolute",
    top: 152,
    left: 20,
  },
});

export default SecurityQuestionFormContainer;
