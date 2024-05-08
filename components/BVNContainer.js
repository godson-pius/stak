import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image, TouchableHighlight } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BVNContainer = ({ verificationMethod, propTop, propMarginLeft, onButtonPress, }) => {
  const bVNStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const navigateNextFILL0Wght400GRIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <TouchableHighlight onPress={onButtonPress} underlayColor="#DDDDDD" style={[styles.bvn, styles.bvnFlexBox, bVNStyle]}>
      <View style={{flexDirection: "row", width: "100%", alignSelf: 'center', justifyContent: 'space-between',}}>
        <View style={styles.bvnFlexBox}>
          <Text style={styles.viaBvn}>{verificationMethod}</Text>
        </View>
        <Image
          style={[
            styles.navigateNextFill0Wght400GrIcon,
            navigateNextFILL0Wght400GRIconStyle,
          ]}
          contentFit="cover"
          source={require("../assets/navigate-next-fill0-wght400-grad0-opsz24.png")}
        />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  bvnFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  viaBvn: {
    fontSize: FontSize.subHeaderCopyMobile16_size,
    lineHeight: 22,
    fontFamily: FontFamily.tags,
    color: Color.black,
    textAlign: "left",
  },
  navigateNextFill0Wght400GrIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
    marginLeft: 215,
  },
  bvn: {
    position: "absolute",
    top: 216,
    // left: 20,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.inactiveMenu,
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_sm,
  },
});

export default BVNContainer;
