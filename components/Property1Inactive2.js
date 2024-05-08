import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Inactive2 = ({
  getStarted,
  property1InactivePosition,
  property1InactiveTop,
  property1InactiveLeft,
  property1InactiveBackgroundColor,
  property1InactiveMarginLeft,
  getStartedColor,
}) => {
  const property1Inactive2Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1InactivePosition),
      ...getStyleValue("top", property1InactiveTop),
      ...getStyleValue("left", property1InactiveLeft),
      ...getStyleValue("backgroundColor", property1InactiveBackgroundColor),
      ...getStyleValue("marginLeft", property1InactiveMarginLeft),
    };
  }, [
    property1InactivePosition,
    property1InactiveTop,
    property1InactiveLeft,
    property1InactiveBackgroundColor,
    property1InactiveMarginLeft,
  ]);

  const getStarted3Style = useMemo(() => {
    return {
      ...getStyleValue("color", getStartedColor),
    };
  }, [getStartedColor]);

  return (
    <View style={[styles.property1inactive, property1Inactive2Style]}>
      <Text style={[styles.getStarted, getStarted3Style]}>{getStarted}</Text>
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
    backgroundColor: Color.inactiveComponent,
    width: 320,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_sm,
  },
});

export default Property1Inactive2;
