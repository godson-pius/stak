import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const EmailVerificationContainer = ({ emailVerificationMessage }) => {
  return (
    <View style={[styles.verifyEmail, styles.holderIconLayout]}>
      <Text style={styles.verifyYourEmail}>{emailVerificationMessage}</Text>
      <Text style={[styles.verifyEmail1, styles.holderIconPosition]}>
        Verify email
      </Text>
      <Image
        style={[styles.holderIcon, styles.holderIconPosition]}
        contentFit="cover"
        source={require("../assets/holder.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  holderIconLayout: {
    overflow: "hidden",
    borderRadius: Border.br_5xs,
  },
  holderIconPosition: {
    left: 12,
    position: "absolute",
  },
  verifyYourEmail: {
    // marginLeft: -148,
    top: 64,
    marginHorizontal: "5%",
    // left: "50%",
    width: "90%",
    fontSize: 13,
    lineHeight: 20,
    fontFamily: FontFamily.tags,
    color: Color.subTextBlack,
    // width: 297,
    textAlign: "left",
    position: "absolute",
  },
  verifyEmail1: {
    top: 116,
    fontSize: FontSize.subHeaderCopyMobile16_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.primaryColorFill,
    width: 106,
    textAlign: "left",
  },
  holderIcon: {
    top: 12,
    width: 40,
    height: 40,
    overflow: "hidden",
    borderRadius: Border.br_5xs,
  },
  verifyEmail: {
    top: 518,
    backgroundColor: Color.others3,
    width: "90%",
    height: 150,
    alignSelf: 'center',
    position: "absolute",
  },
});

export default EmailVerificationContainer;
