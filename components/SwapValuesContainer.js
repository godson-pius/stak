import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType, Image } from "react-native";
import CountryTag from "./CountryTag";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SwapValuesContainer = ({
  priceText,
  productCodeText,
  currencyCodeText,
  propTop,
  propWidth,
}) => {
  const valuesStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const countryTagStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.values, valuesStyle]}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{priceText}</Text>
      </View>
      <CountryTag
        emojioneflagForNigeria={require("../assets/emojioneflagfornigeria4.png")}
        textForMoney="NGN"
        countryTagPosition="unset"
        countryTagMarginLeft={12}
        countryTagWidth="35%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.bodyCopyMobile16_size,
    lineHeight: 22,
    fontFamily: FontFamily.miniCopy141,
    color: Color.black,
    textAlign: "left",
  },
  wrapper: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.inactiveText,
    borderWidth: 1,
    width: "60%",
    height: 48,
    alignItems: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
  },
  values: {
    position: "absolute",
    top: 232,
    left: 20,
    flexDirection: "row",
  },
});

export default SwapValuesContainer;
