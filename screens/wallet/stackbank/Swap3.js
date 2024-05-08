import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Property1Wallet from "../../../components/Property1Wallet1";
import Property1Inactive2 from "../../../components/Property1Inactive";
import SwapValuesContainer from "../../../components/SwapValuesContainer";
import { Color, FontSize, FontFamily, Border } from "../../../GlobalStyles";
import Property1Inactive1 from "../../../components/Property1Inactive1";

const Swap3 = ({navigation}) => {
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
      <Text style={styles.swap1}>Swap</Text>
      <Image
        style={[styles.arrowBackFill0Wght400Grad0Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
      />
      <Property1Inactive1
        getStarted="Swap to dollar"
        property1InactivePosition="absolute"
        property1InactiveTop={508}
        property1InactiveLeft={20}
        property1InactiveBackgroundColor="#eee"
        property1InactiveMarginLeft="unset"
        getStartedColor="#bdbdbd"
        onButtonPress={() => {navigation.navigate('VerifyFinal')}}
      />
      <Text style={[styles.amountToSwap, styles.youWillGetTypo]}>
        Amount to swap
      </Text>
      <Image
        style={[styles.holderIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../../../assets/holder.png")}
      />
      <Text style={[styles.currentStakBalance, styles.swapTypo]}>
        Current Stak balance is ₦20000
      </Text>
      <Text style={[styles.swapRateToday, styles.swapTypo]}>
        Swap rate today ₦1 = $0.0015
      </Text>
      <Text style={[styles.swapRateToday1, styles.swapTypo]}>
        Swap rate today ₦1 = $0.0015
      </Text>
      <SwapValuesContainer
        priceText="₦8000"
        productCodeText={require("../../../assets/emojioneflagfornigeria4.png")}
        currencyCodeText="NGN"
      />
      <SwapValuesContainer
        priceText="$7.09"
        productCodeText={require("../../../assets/circleflagsus1.png")}
        currencyCodeText="USD"
        propTop={388}
        propWidth={104}
      />
      <View style={styles.swapChild} />
      <Text style={[styles.youWillGet, styles.youWillGetTypo]}>
        You will get
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    position: "absolute",
    left: 20,
    overflow: "hidden",
  },
  youWillGetTypo: {
    width: 125,
    color: Color.subtextBlack,
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
    textAlign: "left",
    fontFamily: FontFamily.miniCopyMedium,
    fontWeight: "500",
    left: "50%",
    marginLeft: -160,
    position: "absolute",
  },
  swapTypo: {
    textAlign: "center",
    fontFamily: FontFamily.miniCopy141,
    color: Color.subtextBlack,
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
    position: "absolute",
  },
  footerHolder: {
    backgroundColor: Color.white1,
    width: 360,
    height: 74,
    overflow: "hidden",
  },
  footerHolderWrapper: {
    top: 726,
    display: "none",
    left: 0,
    position: "absolute",
  },
  swap1: {
    top: 140,
    fontSize: FontSize.headerCopyMobile20_size,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.miniCopyMedium,
    fontWeight: "500",
    marginLeft: -160,
    left: "50%",
    position: "absolute",
  },
  arrowBackFill0Wght400Grad0Icon: {
    top: 32,
    width: 24,
    height: 24,
    left: 20,
  },
  amountToSwap: {
    top: 196,
  },
  holderIcon: {
    top: 88,
    borderRadius: Border.br_4xs_7,
    width: 40,
    height: 40,
    left: 20,
  },
  currentStakBalance: {
    top: 292,
    left: 20,
  },
  swapRateToday: {
    top: 448,
    left: 20,
  },
  swapRateToday1: {
    marginLeft: -100,
    top: 571,
    left: "50%",
    fontFamily: FontFamily.miniCopy141,
    display: "none",
  },
  swapChild: {
    top: 328,
    borderStyle: "solid",
    borderColor: Color.others4,
    borderTopWidth: 1,
    width: 361,
    height: 1,
    left: 0,
    position: "absolute",
  },
  youWillGet: {
    top: 352,
  },
  swap: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    paddingHorizontal: "5%",
    overflow: "hidden",
  },
});

export default Swap3;
