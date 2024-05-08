import React, { useMemo } from "react";
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Active = ({
  buttonText,
  property1InactivePosition,
  property1InactiveTop,
  property1InactiveLeft,
  property1InactiveBackgroundColor,
  property1InactiveMarginLeft,
  getStartedColor,
  onButtonPress,
  disable
}) => {
  const property1InactiveStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1InactivePosition),
      ...getStyleValue("top", property1InactiveTop),
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

  return (
    <TouchableHighlight underlayColor="#DDDDDD" style={[styles.property1inactive, property1InactiveStyle,
    {backgroundColor: disable? Color.inactiveComponent: '#ACF279',}]}
    onPress={onButtonPress}>
      <Text style={styles.getStarted}>{buttonText}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  getStarted: {
    fontSize: FontSize.subHeaderCopyMobile16_size,
    fontWeight: "500",
    fontFamily: FontFamily.headerCopyMobile201,
    textAlign: "left",
  },
  property1inactive: {
    borderRadius: Border.br_5xs,
    // backgroundColor: Color.inactiveComponent,
    width: "90%", 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "5%",
    paddingVertical: Padding.p_sm,
    alignSelf: 'center',
  },
});

export default Property1Active;
