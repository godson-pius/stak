import React, { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType, Image, TouchableHighlight } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Nigeria = ({
  emojioneflagForNigeria,
  nigeria = "Nigeria   ",
  inactive,
  showEmojioneflagForNigeriaIco,
  nigeriaPosition,
  nigeriaTop,
  nigeriaLeft,
  nigeriaWidth,
  nigeriaBorderColor,
  nigeriaColor,
  inactiveIconMarginLeft,
  inactiveIconOverflow,
  onButtonPress,
  borderWidth,
  selected,
}) => {
  const nigeriaStyle = useMemo(() => {
    return {
      ...getStyleValue("position", nigeriaPosition),
      ...getStyleValue("top", nigeriaTop),
      ...getStyleValue("left", nigeriaLeft),
      // ...getStyleValue("width", nigeriaWidth),
      ...getStyleValue("borderColor", nigeriaBorderColor),
    };
  }, [
    nigeriaPosition,
    nigeriaTop,
    nigeriaLeft,
    nigeriaWidth,
    nigeriaBorderColor,
  ]);

  const nigeria1Style = useMemo(() => {
    return {
      ...getStyleValue("color", nigeriaColor),
    };
  }, [nigeriaColor]);

  const inactiveIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", inactiveIconMarginLeft),
      ...getStyleValue("overflow", inactiveIconOverflow),
    };
  }, [inactiveIconMarginLeft, inactiveIconOverflow]);

  return (
    <TouchableHighlight underlayColor="#DDDDDD" style={[styles.nigeria, nigeriaStyle, {borderWidth: selected? 1:1, borderColor:selected? '#142601':Color.inactiveMenu,}]} onPress={onButtonPress}>
      <View style={{flexDirection: "row", width: "100%", alignSelf: 'center', justifyContent: 'space-between',}}>
        <View style={styles.nigeriaFlexBox}>
          {showEmojioneflagForNigeriaIco && (
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={emojioneflagForNigeria}
            />
          )}
          <View style={[styles.nigeriaWrapper, styles.nigeriaFlexBox]}>
            <Text style={[styles.nigeria2, nigeria1Style]}>{nigeria}</Text>
          </View>
        </View>
        <Image
          style={[styles.inactiveIcon, styles.iconLayout]}
          contentFit="cover"
          source={inactive}
        />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  nigeriaFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  nigeria2: {
    fontSize: FontSize.subHeaderCopyMobile16_size,
    lineHeight: 22,
    fontFamily: FontFamily.tags,
    color: Color.bodyCopy,
    textAlign: "left",
  },
  nigeriaWrapper: {
    marginLeft: 10,
  },
  inactiveIcon: {
    // marginLeft: 175,
    right: 0,
    // alignSelf: 'center',
  },
  nigeria: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    // borderColor: Color.inactiveMenu,
    width: "90%",
    // paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    alignSelf: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: "5%",
  },
});

export default Nigeria;
