import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const VerificationContainer = () => {
  return (
    <View style={styles.votersIdCardParent}>
      <Text style={styles.votersIdCard}>Voter’s ID card</Text>
      <View style={styles.cardParent}>
        <View style={[styles.card, styles.cardFlexBox]}>
          <View style={styles.cardFlexBox}>
            <Text style={[styles.your20Digit, styles.textTypo]}>
              Your 20 digit ID number
            </Text>
          </View>
        </View>
        <Text style={[styles.text, styles.textTypo]}>0/20</Text>
      </View>
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
  votersIdCard: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.tags,
    lineHeight: 22,
    fontSize: FontSize.subHeaderCopyMobile16_size,
  },
  your20Digit: {
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
  },
  text: {
    fontSize: FontSize.tags_size,
    lineHeight: 17,
    marginTop: 8,
  },
  cardParent: {
    alignItems: "flex-end",
    marginTop: 8,
  },
  votersIdCardParent: {
    position: "absolute",
    top: 144,
    left: 20,
  },
});

export default VerificationContainer;
