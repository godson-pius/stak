import React, { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType, Image } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CountryTag = ({
  emojioneflagForNigeria,
  textForMoney = "NGN",
  countryTagPosition,
  countryTagMarginLeft,
  countryTagWidth,
}) => {
  const countryTagStyle = useMemo(() => {
    return {
      ...getStyleValue("position", countryTagPosition),
      ...getStyleValue("marginLeft", countryTagMarginLeft),
      ...getStyleValue("width", countryTagWidth),
    };
  }, [countryTagPosition, countryTagMarginLeft, countryTagWidth]);

  return (
    <View style={[styles.countryTag, styles.ngnParentFlexBox, countryTagStyle]}>
      <Image
        style={styles.iconLayout}
        contentFit="cover"
        source={emojioneflagForNigeria}
      />
      <View style={[styles.ngnParent, styles.ngnParentFlexBox]}>
        <Text style={styles.ngn}>{textForMoney}</Text>
        <Image
          style={[styles.collapsedIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/collapsed.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ngnParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  ngn: {
    fontSize: FontSize.miniCopy14_size,
    lineHeight: 20,
    fontFamily: FontFamily.miniCopy141,
    color: Color.bodyCopy,
    textAlign: "left",
  },
  collapsedIcon: {
    marginLeft: 4,
  },
  ngnParent: {
    marginLeft: 8,
  },
  countryTag: {
    borderTopRightRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.inactiveMenu,
    borderWidth: 1,
    padding: Padding.p_sm,
  },
});

export default CountryTag;
