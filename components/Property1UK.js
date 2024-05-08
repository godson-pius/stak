import React, { useMemo } from "react";
import { StyleSheet, Text, View , Image} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1UK = ({
  property1UKPosition,
  property1UKTop,
  property1UKLeft,
}) => {
  const property1UKStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1UKPosition),
      ...getStyleValue("top", property1UKTop),
      ...getStyleValue("right", property1UKLeft),
    };
  }, [property1UKPosition, property1UKTop, property1UKLeft]);

  return (
    <View style={[styles.ukWrapperFlexBox, property1UKStyle]}>
      <Image
        style={styles.circleFlagsukIcon}
        contentFit="cover"
        source={require("../assets/circleflagsuk.png")}
      />
      <View style={[styles.ukWrapper, styles.ukWrapperFlexBox]}>
        <Text style={styles.uk}>UK</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ukWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  circleFlagsukIcon: {
    width: 24,
    height: 24,
  },
  uk: {
    fontSize: FontSize.subHeaderCopyMobile16_size,
    lineHeight: 22,
    fontFamily: FontFamily.tags,
    color: Color.bodyCopy,
    textAlign: "left",
  },
  ukWrapper: {
    marginLeft: 10,
  },
});

export default Property1UK;
