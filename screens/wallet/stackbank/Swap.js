import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import SectionWithOthers from "../../../components/SectionWithOthers";
import BVNContainer from "../../../components/BVNContainer";
import { FontSize, Color, FontFamily } from "../../../GlobalStyles";

const Swap = () => {
  return (
    <View style={styles.swap}>
      <SectionWithOthers
        iconId={require("../../../assets/account-balance-wallet-fill0-wght400-grad0-opsz24-1.png")}
        iconCode={require("../../../assets/pending-fill0-wght400-grad0-opsz24.png")}
      />
      <Text style={[styles.withdraw, styles.withdrawPosition]}>Withdraw</Text>
      <Image
        style={[
          styles.arrowBackFill0Wght400Grad0Icon,
          styles.heroiconsexclamationCircleLayout,
        ]}
        contentFit="cover"
        source={require("../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
      />
      <View style={styles.interestRate}>
        <Image
          style={styles.heroiconsexclamationCircleLayout}
          contentFit="cover"
          source={require("../../../assets/heroiconsexclamationcircle.png")}
        />
        <Text style={styles.interestRateAtContainer}>
          <Text
            style={[styles.interestRateAt, styles.interestRateAtTypo]}
          >{`Interest rate at `}</Text>
          <Text style={styles.forDollarCurrencySwapBelow}>
            <Text style={styles.text}>{`20% `}</Text>
            <Text style={styles.forDollarCurrency}>
              for dollar currency swap below 1000
            </Text>
          </Text>
        </Text>
      </View>
      <Text
        style={[styles.youHaventAdded, styles.interestRateAtTypo]}
      >{`You haven’t added any bank accounts yet.
Link your local account using either your 
BVN or bank account to enable withdrawal!`}</Text>
      <BVNContainer verificationMethod="Via BVN" />
      <BVNContainer
        verificationMethod="Via Bank"
        propTop={284}
        propMarginLeft={212}
        viaBVNFontFamily="Inter-Regular"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  withdrawPosition: {
    textAlign: "left",
    marginLeft: -160,
    left: "50%",
    position: "absolute",
  },
  heroiconsexclamationCircleLayout: {
    height: 24,
    width: 24,
  },
  interestRateAtTypo: {
    fontSize: FontSize.miniCopy14_size,
    color: Color.subtextBlack,
  },
  withdraw: {
    top: 88,
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    fontFamily: FontFamily.miniCopyMedium,
    color: Color.black,
  },
  arrowBackFill0Wght400Grad0Icon: {
    top: 32,
    left: 20,
    position: "absolute",
    width: 24,
    overflow: "hidden",
  },
  interestRateAt: {
    color: Color.subtextBlack,
  },
  text: {
    color: Color.primaryColorFill,
  },
  forDollarCurrency: {
    color: Color.subtextBlack,
  },
  forDollarCurrencySwapBelow: {
    fontSize: FontSize.bodyCopyMobile16_size,
  },
  interestRateAtContainer: {
    textAlign: "center",
    width: 274,
    marginLeft: 6,
    fontFamily: FontFamily.miniCopy141,
  },
  interestRate: {
    marginLeft: -152,
    top: 280,
    flexDirection: "row",
    display: "none",
    left: "50%",
    position: "absolute",
  },
  youHaventAdded: {
    top: 124,
    lineHeight: 20,
    color: Color.subtextBlack,
    fontFamily: FontFamily.miniCopy141,
    textAlign: "left",
    marginLeft: -160,
    left: "50%",
    position: "absolute",
  },
  swap: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Swap;
