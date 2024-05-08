import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Property1Wallet from "../../../components/Property1Wallet1";
import Property1Inactive2 from "../../../components/Property1Inactive";
import AmountSwapFormContainer from "../../../components/AmountSwapFormContainer";
import { Color, FontSize, FontFamily, Border } from "../../../GlobalStyles";

const Swap2 = () => {
  return (
    <View style={styles.swap}>
      <View style={styles.footerHolderWrapper}>
        <View style={styles.footerHolder}>
          <Property1Wallet
            iconId={require("../../../assets/account-balance-wallet-fill0-wght400-grad0-opsz24-1.png")}
            iconCode={require("../../../assets/pending-fill0-wght400-grad0-opsz24.png")}
            property1WalletPosition="absolute"
            property1WalletTop={14}
            property1WalletLeft={21}
            walletColor="#163300"
            othersColor="#b5b6b4"
          />
        </View>
      </View>
      <Text style={[styles.swap1, styles.swap1Position]}>Swap</Text>
      <Image
        style={[
          styles.arrowBackFill0Wght400Grad0Icon,
          styles.heroiconsexclamationCircleLayout,
        ]}
        contentFit="cover"
        source={require("../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
      />
      <Property1Inactive2
        getStarted="Continue"
        property1InactivePosition="absolute"
        property1InactiveTop={372}
        property1InactiveLeft={20}
        property1InactiveBackgroundColor="#9fe870"
        property1InactiveMarginLeft="unset"
        getStartedColor="#163300"
      />
      <AmountSwapFormContainer
        swapAmountInputText="Input amount to swap"
        initialAmountInputText="8000"
        propTop={252}
        propColor="#3b3939"
        propColor1="#0c0f0d"
      />
      <View style={[styles.interestRate, styles.swap1Position]}>
        <Image
          style={styles.heroiconsexclamationCircleLayout}
          contentFit="cover"
          source={require("../../../assets/heroiconsexclamationcircle.png")}
        />
        <Text style={styles.interestRateAtContainer}>
          <Text style={styles.interestRateAt}>{`Interest rate at `}</Text>
          <Text style={styles.forDollarCurrencySwapBelow}>
            <Text style={styles.text}>{`20% `}</Text>
            <Text style={styles.forDollarCurrency}>
              for dollar currency swap below 1000
            </Text>
          </Text>
        </Text>
      </View>
      <Image
        style={[styles.holderIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../../../assets/holder.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  swap1Position: {
    left: "50%",
    position: "absolute",
  },
  heroiconsexclamationCircleLayout: {
    height: 24,
    width: 24,
  },
  iconPosition: {
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  footerHolder: {
    backgroundColor: Color.white1,
    width: 360,
    height: 74,
    overflow: "hidden",
  },
  footerHolderWrapper: {
    top: 726,
    left: 0,
    position: "absolute",
  },
  swap1: {
    marginLeft: -160,
    top: 140,
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    fontFamily: FontFamily.miniCopyMedium,
    color: Color.black,
    textAlign: "left",
  },
  arrowBackFill0Wght400Grad0Icon: {
    top: 32,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  interestRateAt: {
    fontSize: FontSize.miniCopy14_size,
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
    fontFamily: FontFamily.miniCopy141,
    width: 274,
    marginLeft: 6,
    textAlign: "left",
  },
  interestRate: {
    marginLeft: -163,
    top: 176,
    flexDirection: "row",
  },
  holderIcon: {
    top: 88,
    borderRadius: Border.br_4xs_7,
    width: 40,
    height: 40,
  },
  swap: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Swap2;
