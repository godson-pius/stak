import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Section from "../../components/Section";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";

const Referral = () => {
  return (
    <View style={styles.referral}>
      <View style={[styles.referralChild, styles.referralLayout]} />
      <View style={[styles.referralItem, styles.referralLayout]} />
      <Text style={[styles.referral1, styles.referral1Clr]}>Referral</Text>
      <Text style={[styles.referAndIncrease, styles.referAndIncreaseTypo]}>
        Refer and Increase your Connections!
      </Text>
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../../assets/back.png")}
      />
      <Text style={[styles.sendAnInvite, styles.sendAnInvitePosition]}>
        Send an invite to a friend or two to get 1000 and increase your chances
        of getting money sent to faster with the Stak send and request feature!
      </Text>
      <Section
        productCode={require("../../assets/enterprise-fill0-wght400-grad0-opsz24.png")}
        dimensionCode={require("../../assets/account-balance-wallet-fill0-wght400-grad0-opsz24-1.png")}
        itemCode={require("../../assets/pending-fill0-wght400-grad0-opsz241.png")}
        showFrameView={false}
      />
      <View style={[styles.copyReferralCodeParent, styles.referralPosition]}>
        <Text style={styles.referAndIncreaseTypo}>{`Copy Referral code `}</Text>
        <View style={styles.srhoda93Parent}>
          <Text style={[styles.srhoda93, styles.srhoda93Typo]}>SRHODA93</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../../assets/frame-195.png")}
          />
        </View>
      </View>
      <Image
        style={styles.emojiIcon}
        contentFit="cover"
        source={require("../../assets/emoji.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  referralLayout: {
    display: "none",
    height: 8,
    backgroundColor: Color.primaryColor,
    borderRadius: Border.br_5xs,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  referral1Clr: {
    color: Color.subtextBlack,
    textAlign: "left",
  },
  referAndIncreaseTypo: {
    fontSize: FontSize.bodyCopyMobile16_size,
    textAlign: "left",
    color: Color.subtextBlack,
    fontFamily: FontFamily.miniCopyMedium,
    fontWeight: "500",
  },
  sendAnInvitePosition: {
    // marginLeft: -160,
    // left: "50%",
    alignSelf: "center",
    position: "absolute",
  },
  referralPosition: {
    // left: "50%",
    position: "absolute",
  },
  srhoda93Typo: {
    fontFamily: FontFamily.miniCopyMedium,
    fontWeight: "500",
    fontSize: FontSize.headerCopyMobile20_size,
  },
  referralChild: {
    top: 72,
    width: 152,
  },
  referralItem: {
    top: 375,
    width: 252,
  },
  referral1: {
    marginLeft: -38,
    textAlign: "left",
    fontFamily: FontFamily.miniCopyMedium,
    fontWeight: "500",
    fontSize: FontSize.headerCopyMobile20_size,
    left: "50%",
    position: "absolute",
    top: 32,
  },
  referAndIncrease: {
    top: 92,
    // marginLeft: -160,
    // left: "50%",
    alignSelf: "center",
    width: "90%",
    position: "absolute",
  },
  backIcon: {
    width: 24,
    height: 24,
    top: 32,
    left: 20,
    position: "absolute",
  },
  sendAnInvite: {
    top: 123,
    fontSize: FontSize.miniCopyMedium_size,
    lineHeight: 20,
    fontFamily: FontFamily.tags,
    width: "90%",
    textAlign: "left",
    color: Color.subtextBlack,
  },
  srhoda93: {
    color: Color.black,
    textAlign: "left",
  },
  frameChild: {
    width: 48,
    height: 48,
    marginLeft: 29,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  srhoda93Parent: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
  },
  copyReferralCodeParent: {
    // marginLeft: -93,
    top: 384,
    alignItems: "center",
    
    alignSelf: "center",
  },
  emojiIcon: {
    height: "15.25%",
    width: "38.33%",
    top: "27.88%",
    right: "30.83%",
    bottom: "56.88%",
    left: "30.83%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  referral: {
    backgroundColor: Color.white1,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Referral;
