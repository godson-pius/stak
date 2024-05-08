import React, { useMemo } from "react";
import { StyleSheet, View, ImageSourcePropType, Image } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeIcon = ({
  iconShiftOn,
  typeIconPosition,
  typeIconBorderRadius,
  typeIconBackgroundColor,
  typeIconFlex,
  typeIconMarginLeft,
  iconShiftOnPosition,
}) => {
  const typeIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeIconPosition),
      ...getStyleValue("borderRadius", typeIconBorderRadius),
      ...getStyleValue("backgroundColor", typeIconBackgroundColor),
      ...getStyleValue("flex", typeIconFlex),
      ...getStyleValue("marginLeft", typeIconMarginLeft),
    };
  }, [
    typeIconPosition,
    typeIconBorderRadius,
    typeIconBackgroundColor,
    typeIconFlex,
    typeIconMarginLeft,
  ]);

  const iconShiftOnStyle = useMemo(() => {
    return {
      ...getStyleValue("position", iconShiftOnPosition),
    };
  }, [iconShiftOnPosition]);

  return (
    <View style={[styles.typeicon, typeIconStyle]}>
      <Image
        style={[styles.iconShiftOn, iconShiftOnStyle]}
        contentFit="cover"
        source={iconShiftOn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconShiftOn: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  typeicon: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.defaultAccentLightAccent1,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default TypeIcon;
