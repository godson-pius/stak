import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, ActivityIndicator } from "react-native";
import Property1Wallet from "../../../components/Property1Wallet1";
import Property1Active from "../../../components/Property1Active";
import { Color, FontSize, FontFamily, Border } from "../../../GlobalStyles";
import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native';
import Property1Inactive from "../../../components/Property1Inactive";
import { useAuth } from "../../../components/AppProvider";

const CardDetails = ({onCancelPress, navigation}) => {
  // const navigation = useNavigation();
  const authContext = useAuth();

  const isOptionsFilled = true;

  const handleContinue = async() => {
    const data = {
      userId: user?.data?.id,
      email: "test@gmail.com",
      amount: processingFee,
      ref: "Credit wallet",
      callbackUrl: "",
      token: user?.data?.token
    }
    const res = await authContext.creditNairaWallet(data)
    if (res?.data?.isSuccessFul) {
      navigation.navigate('VerifyFinal');
    }

    console.log(res.data)
    return
  };

  const isDisabled = false;
  return (
    <>
    <StatusBar style="transparent" hidden={true}/>
    <View style={styles.cardDetails}>
      <TouchableHighlight onPress={() => {console.log('asdsasdsadfsdlk')}}>
        <View>
          <View style={[styles.footerHolderWrapper, styles.interestRatePosition]}>
            <View style={[styles.footerHolder, styles.footerHolderLayout]}>
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
          <Image
            style={[styles.arrowBackFill0Wght400Grad0Icon, styles.fill0IconLayout]}
            contentFit="cover"
            source={require("../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
          />
          <View style={[styles.interestRate, styles.interestRatePosition]}>
            <Image
              style={styles.fill0IconLayout}
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
          <Text style={[styles.payWithA, styles.payWithAFlexBox]}>
            Pay with a new card
          </Text>
          <Text style={[styles.useAMastercard, styles.payWithAFlexBox]}>
            Use a Mastercard, Visa, or Verve.
          </Text>
          <Text style={[styles.selectYourCard, styles.payWithAFlexBox]}>
            Select your card
          </Text>
          <Image
            style={[styles.creditCardFill0Wght400GradIcon, styles.fill0IconLayout]}
            contentFit="cover"
            source={require("../../../assets/credit-card-fill0-wght400-grad0-opsz24.png")}
          />
          <Image
            style={[
              styles.navigateNextFill0Wght400GrIcon,
              styles.fill0IconPosition,
            ]}
            contentFit="cover"
            source={require("../../../assets/navigate-next-fill0-wght400-grad0-opsz241.png")}
          />
        </View>
      </TouchableHighlight>

      <TouchableOpacity style={{width: '100%', height: '100%'}} onPress={onCancelPress} />
      <View style={[styles.buttonParent, styles.footerHolderLayout]}>

        
      <Property1Inactive
        getStarted="Pay with Paystack"
        property1InactivePosition="absolute"
        property1InactiveTop={138}
        property1InactiveBackgroundColor="#eee"
        property1InactiveMarginLeft={-160}
        getStartedColor="#bdbdbd"
        onButtonPress={() => handleContinue()}
        disable={isDisabled}
      />
        <TouchableOpacity onPress={onCancelPress}>
          <Image
            style={[
              styles.cancelPresentationFill0WghtIcon,
              styles.fill0IconPosition,
            ]}
            contentFit="cover"
            source={require("../../../assets/cancel-presentation-fill0-wght400-grad0-opsz24-11.png")}
          />
        </TouchableOpacity>
        <Image
          style={[styles.paystack211, styles.fill0IconPosition1]}
          contentFit="cover"
          source={require("../../../assets/paystack2-1-1.png")}
        />
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  interestRatePosition: {
    display: "none",
    position: "absolute",
  },
  footerHolderLayout: {
    width: "100%",
    backgroundColor: Color.white1,
    overflow: "hidden",
  },
  fill0IconLayout: {
    height: 24,
    width: 24,
  },
  interestRateAtTypo: {
    fontSize: FontSize.miniCopy14_size,
    color: Color.subtextBlack,
  },
  payWithAFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  fill0IconPosition: {
    left: 316,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  fill0IconPosition1: {
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  footerHolder: {
    height: 74,
  },
  footerHolderWrapper: {
    top: 726,
    left: 0,
  },
  arrowBackFill0Wght400Grad0Icon: {
    left: 20,
    position: "absolute",
    overflow: "hidden",
    top: 32,
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
    left: "50%",
  },
  payWithA: {
    top: 91,
    lineHeight: 22,
    color: Color.black,
    textAlign: "left",
    left: 58,
    fontFamily: FontFamily.miniCopy141,
    fontSize: FontSize.bodyCopyMobile16_size,
  },
  useAMastercard: {
    top: 121,
    lineHeight: 20,
    left: 58,
    fontFamily: FontFamily.miniCopy141,
    color: Color.subtextBlack,
    fontSize: FontSize.miniCopy14_size,
  },
  selectYourCard: {
    marginLeft: -78,
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    fontFamily: FontFamily.miniCopyMedium,
    color: Color.black,
    textAlign: "left",
    left: "50%",
    top: 32,
  },
  creditCardFill0Wght400GradIcon: {
    top: 93,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  navigateNextFill0Wght400GrIcon: {
    top: 93,
  },
  cancelPresentationFill0WghtIcon: {
    top: 32,
  },
  paystack211: {
    top: 86,
    width: 148,
    height: 23,
  },
  buttonParent: {
    top: 389,
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    height: 411,
    // left: 0,
    position: "absolute",
    width: 360,
    backgroundColor: Color.white1,
  },
  cardDetails: {
    backgroundColor: Color.inactiveComponent,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default CardDetails;
