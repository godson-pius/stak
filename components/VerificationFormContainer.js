import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const VerificationFormContainer = ({ nIN, your11DigitIDNumber, prop }) => {
  return (
    <View style={styles.frameParent}>
      <View>
        <Text style={styles.nin}>{nIN}</Text>
        <View style={[styles.card, styles.cardFlexBox]}>
          <View style={styles.cardFlexBox}>
            <Text style={[styles.your11Digit, styles.textTypo]}>
              {your11DigitIDNumber}
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.text, styles.textTypo]}>{prop}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    color: Color.subTextBlack,
    textAlign: "left",
    fontFamily: FontFamily.tags,
  },
  nin: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.tags,
    lineHeight: 22,
    fontSize: FontSize.subHeaderCopyMobile16_size,
  },
  your11Digit: {
    lineHeight: 22,
    fontSize: FontSize.subHeaderCopyMobile16_size,
    color: Color.subTextBlack,
  },
  card: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.inactiveMenu,
    borderWidth: 1,
    width: 320,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_sm,
    marginTop: 8,
  },
  text: {
    fontSize: FontSize.tags_size,
    lineHeight: 17,
    marginTop: 8,
  },
  frameParent: {
    position: "absolute",
    top: 144,
    // left: 20,
    alignItems: "flex-end",
  },
});

export default VerificationFormContainer;
