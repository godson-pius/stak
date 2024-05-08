import React, { useMemo } from "react";
import { StyleSheet, View, ImageSourcePropType, Image } from "react-native";
import { Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeTab = ({
  iconKeyboardTab,
  typeTabPosition,
  typeTabBorderRadius,
  typeTabBackgroundColor,
  typeTabMarginLeft,
}) => {
  const typeTabStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeTabPosition),
      ...getStyleValue("borderRadius", typeTabBorderRadius),
      ...getStyleValue("backgroundColor", typeTabBackgroundColor),
      ...getStyleValue("marginLeft", typeTabMarginLeft),
    };
  }, [
    typeTabPosition,
    typeTabBorderRadius,
    typeTabBackgroundColor,
    typeTabMarginLeft,
  ]);

  return (
    <View style={[styles.typetab, typeTabStyle]}>
      <Image
        style={styles.iconKeyboardTab}
        contentFit="cover"
        source={iconKeyboardTab}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconKeyboardTab: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  typetab: {
    borderRadius: 30,
    backgroundColor: Color.defaultAccentLightAccent3,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    flex: 1,
  },
});

export default TypeTab;
