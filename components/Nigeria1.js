import React, { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType, Image, TouchableHighlight } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Nigeria1 = ({
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
    };
  }, [nigeriaPosition, nigeriaTop, nigeriaLeft, nigeriaWidth]);

  const inactiveIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", inactiveIconMarginLeft),
      ...getStyleValue("overflow", inactiveIconOverflow),
    };
  }, [inactiveIconMarginLeft, inactiveIconOverflow]);

  return (
    <TouchableHighlight underlayColor="#DDDDDD" onPress={onButtonPress} style={[styles.nigeria, nigeriaStyle, {borderWidth: selected? 1:1, borderColor:selected? '#142601':Color.inactiveMenu,}]}>
      <View style={{flexDirection: "row", width: "100%", alignSelf: 'center', justifyContent: 'space-between',}}>
        <View style={styles.nigeriaFlexBox}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={emojioneflagForNigeria}
          />
          <View style={[styles.nigeriaWrapper, styles.nigeriaFlexBox]}>
            <Text style={styles.nigeria2}>{nigeria}</Text>
          </View>
        </View>
        <Image
          style={[styles.inactiveIcon, styles.iconLayout, inactiveIconStyle]}
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
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  nigeria2: {
    fontSize: FontSize.bodyCopyMobile16_size,
    lineHeight: 22,
    fontFamily: FontFamily.bodyCopyMobile16,
    color: Color.bodyCopy,
    textAlign: "left",
  },
  nigeriaWrapper: {
    marginLeft: 10,
  },
  inactiveIcon: {
    marginLeft: 175,
  },
  nigeria: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.inactiveMenu,
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
  },
});

export default Nigeria1;
