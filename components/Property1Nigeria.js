import React, { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType, Image } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Nigeria = ({
  emojioneflagForNigeria,
  property1NigeriaPosition,
  property1NigeriaTop,
  property1NigeriaLeft,
}) => {
  const property1NigeriaStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1NigeriaPosition),
      ...getStyleValue("top", property1NigeriaTop),
      // ...getStyleValue("left", property1NigeriaLeft),
    };
  }, [property1NigeriaPosition, property1NigeriaTop, property1NigeriaLeft]);

  return (
    <View style={[styles.nigeriaWrapperFlexBox, property1NigeriaStyle]}>
      <Image
        style={styles.emojioneflagForNigeriaIcon}
        contentFit="cover"
        source={emojioneflagForNigeria}
      />
      <View style={[styles.nigeriaWrapper, styles.nigeriaWrapperFlexBox]}>
        <Text style={styles.nigeria}>{`Nigeria   `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nigeriaWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    right: '5%',
  },
  emojioneflagForNigeriaIcon: {
    width: 24,
    height: 24,
  },
  nigeria: {
    fontSize: FontSize.bodyCopyMobile16_size,
    lineHeight: 22,
    fontFamily: FontFamily.bodyCopyMobile16,
    color: Color.bodyCopy,
    textAlign: "left",
  },
  nigeriaWrapper: {
    marginLeft: 10,
  },
});

export default Property1Nigeria;
