import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Property1Wallet from "../../../components/Property1Wallet1";
import Property1Inactive2 from "../../../components/Property1Inactive";
import AmountSwapFormContainer from "../../../components/AmountSwapFormContainer";
import { FontSize, Color, FontFamily, Border } from "../../../GlobalStyles";
import Property1Inactive1 from "../../../components/Property1Inactive1";
import Property1Inactive from "../../../components/Property1Inactive";

const Swap1 = ({navigation}) => {
  const [amount, setAmount] = useState(""); // State variable to store the input amount

  const handleAmountChange = (text) => {
    setAmount(text); // Update the amount state when input changes
  };
  return (
    <View style={styles.swap}>
      <View style={styles.footerHolderWrapper}>
        <View style={styles.footerHolder}>
          {/* <Property1Wallet
            iconId={require("../../../assets/account-balance-wallet-fill0-wght400-grad0-opsz24-1.png")}
            iconCode={require("../../../assets/pending-fill0-wght400-grad0-opsz24.png")}
            property1WalletPosition="absolute"
            property1WalletTop={14}
            property1WalletLeft={21}
            walletColor="#163300"
            othersColor="#b5b6b4"
          /> */}
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
      <Property1Inactive1
        getStarted="Continue"
        property1InactivePosition="absolute"
        property1InactiveTop={368}
        property1InactiveLeft={20}
        property1InactiveBackgroundColor="#eee"
        property1InactiveMarginLeft="unset"
        getStartedColor="#bdbdbd"
        onButtonPress={() => {navigation.navigate('Swap3');}}
      />
      <Text
        style={[styles.chargesMayDiffer, styles.interestRateAtTypo]}
      >{`Charges may differ depending on the currency
you are swapping to.`}</Text>
      <Image
        style={[styles.holderIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../../../assets/holder.png")}
      />
      {/* <AmountSwapFormContainer
        swapAmountInputText="Input amount to swap"
        initialAmountInputText="10000"
      /> */}
      <TextInput
        style={styles.input}
        placeholder={'1000'}
        value={amount}
        keyboardType="numeric"
        onChangeText={handleAmountChange} // Call handleAmountChange on input change
      />
    </View>
  );
};

const styles = StyleSheet.create({
  swap1Position: {
    textAlign: "left",
    width: "100%",
    position: "absolute",
    alignSelf: "center"
  },
  heroiconsexclamationCircleLayout: {
    height: 24,
    width: 24,
  },
  interestRateAtTypo: {
    fontSize: FontSize.miniCopy14_size,
    color: Color.subtextBlack,
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
    top: 140,
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    fontFamily: FontFamily.miniCopyMedium,
    color: Color.black,
  },
  arrowBackFill0Wght400Grad0Icon: {
    top: 32,
    left: 20,
    position: "absolute",
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
  chargesMayDiffer: {
    top: 176,
    lineHeight: 20,
    color: Color.subtextBlack,
    fontFamily: FontFamily.miniCopy141,
    textAlign: "left",
    marginLeft: -160,
    left: "50%",
    position: "absolute",
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
    paddingHorizontal: "5%",
  },
  input: {
    top: 248,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    width: "100%",
    alignSelf: 'center',
    borderRadius: 10,
    fontSize: FontSize.bodyCopyMobile16_size
  },
});

export default Swap1;
