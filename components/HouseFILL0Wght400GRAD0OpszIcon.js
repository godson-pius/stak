import React, { useMemo } from "react";
import { Image } from "react-native";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HouseFILL0Wght400GRAD0OpszIcon = ({
  houseFILL0Wght400GRAD0Ops,
  houseFILL0Wght400GRAD0OpsPosition,
  houseFILL0Wght400GRAD0OpsWidth,
  houseFILL0Wght400GRAD0OpsHeight,
  houseFILL0Wght400GRAD0OpsTop,
  houseFILL0Wght400GRAD0OpsLeft,
}) => {
  const houseFILL0Wght400GRAD0OpszIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", houseFILL0Wght400GRAD0OpsPosition),
      ...getStyleValue("width", houseFILL0Wght400GRAD0OpsWidth),
      ...getStyleValue("height", houseFILL0Wght400GRAD0OpsHeight),
      ...getStyleValue("top", houseFILL0Wght400GRAD0OpsTop),
      // ...getStyleValue("left", houseFILL0Wght400GRAD0OpsLeft),
    };
  }, [
    houseFILL0Wght400GRAD0OpsPosition,
    houseFILL0Wght400GRAD0OpsWidth,
    houseFILL0Wght400GRAD0OpsHeight,
    houseFILL0Wght400GRAD0OpsTop,
    houseFILL0Wght400GRAD0OpsLeft,
  ]);

  return (
    <Image
      style={[
        styles.houseFill0Wght400Grad0OpszIcon,
        houseFILL0Wght400GRAD0OpszIconStyle,
      ]}
      contentFit="cover"
      source={houseFILL0Wght400GRAD0Ops}
    />
  );
};

const styles = StyleSheet.create({
  houseFill0Wght400Grad0OpszIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
    alignSelf: 'center'
  },
});

export default HouseFILL0Wght400GRAD0OpszIcon;
