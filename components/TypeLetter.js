import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeLetter = ({
  a,
  typeLetterPosition,
  typeLetterBorderRadius,
  typeLetterBackgroundColor,
  typeLetterPaddingTop,
  typeLetterMarginLeft,
  aFontSize,
  aColor,
}) => {
  const typeLetterStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeLetterPosition),
      ...getStyleValue("borderRadius", typeLetterBorderRadius),
      ...getStyleValue("backgroundColor", typeLetterBackgroundColor),
      ...getStyleValue("paddingTop", typeLetterPaddingTop),
      ...getStyleValue("marginLeft", typeLetterMarginLeft),
    };
  }, [
    typeLetterPosition,
    typeLetterBorderRadius,
    typeLetterBackgroundColor,
    typeLetterPaddingTop,
    typeLetterMarginLeft,
  ]);

  const aStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", aFontSize),
      ...getStyleValue("color", aColor),
    };
  }, [aFontSize, aColor]);

  return (
    <View style={[styles.typeletter, styles.aFlexBox, typeLetterStyle]}>
      <View style={[styles.key, styles.aFlexBox]}>
        <View style={[styles.letter, styles.aFlexBox]}>
          <Text style={[styles.a, styles.aFlexBox, aStyle]}>{a}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  a: {
    fontSize: 22,
    fontFamily: FontFamily.robotoRegular,
    color: Color.neutralPrimary,
    textAlign: "center",
    display: "flex",
    width: 15,
  },
  letter: {
    paddingBottom: Padding.p_11xs,
  },
  key: {
    width: 30,
    height: 37,
    flexDirection: "row",
  },
  typeletter: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.neutralBase,
    alignSelf: "stretch",
    flex: 1,
  },
});

export default TypeLetter;
