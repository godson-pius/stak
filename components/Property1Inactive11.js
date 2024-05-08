import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Inactive11 = ({
  getStarted,
  property1InactivePosition,
  property1InactiveTop,
  property1InactiveLeft,
  property1InactiveBackgroundColor,
  getStartedColor,
  property1InactiveWidth,
}) => {
  const property1Inactive3Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1InactivePosition),
      ...getStyleValue("top", property1InactiveTop),
      ...getStyleValue("left", property1InactiveLeft),
      ...getStyleValue("backgroundColor", property1InactiveBackgroundColor),
      ...getStyleValue("width", property1InactiveWidth),
    };
  }, [
    property1InactivePosition,
    property1InactiveTop,
    property1InactiveLeft,
    property1InactiveBackgroundColor,
    property1InactiveWidth,
  ]);

  const getStarted4Style = useMemo(() => {
    return {
      ...getStyleValue("color", getStartedColor),
    };
  }, [getStartedColor]);

  return (
    <View style={[styles.property1inactive, property1Inactive3Style]}>
      <Text style={[styles.getStarted, getStarted4Style]}>{getStarted}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  getStarted: {
    fontSize: FontSize.bodyCopyMobile16_size,
    fontWeight: "500",
    fontFamily: FontFamily.miniCopyMedium,
    color: Color.inactiveText,
    textAlign: "left",
  },
  property1inactive: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.strokeColor,
    width: 320,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_sm,
  },
});

export default Property1Inactive11;
