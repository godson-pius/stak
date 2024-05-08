import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableHighlight, Alert } from "react-native";
import Property1Inactive2 from "../../../components/Property1Inactive";
import { FontSize, Color, FontFamily } from "../../../GlobalStyles";
import { useAuth } from "../../../components/AppProvider";
import { openBrowserAsync } from "expo-web-browser";

const ConfirmAmount = ({ navigation, route }) => {
  const isOptionsFilled = true;
  const { amount, user, selectedCurrency, funding } = route.params;
  const processingFee = eval(+amount + 30)

  const authContext = useAuth();

  const handleContinue = async () => {

    const token = user?.data?.token
    if (selectedCurrency === "Dollsar") {
      const data = {
        userId: user?.data?.id,
        amount: processingFee,
        currency: "usd",
      }

      const payRes = await authContext.creditDollarWallet(data, token)
      console.log("Dollar response: ", payRes, data, token)

      if (payRes?.data?.isSuccessFul) {
        console.log("url: ", payRes?.data?.data?.authorization_url)
        openBrowserAsync(payRes?.data?.data?.authorization_url)

        navigation.navigate('VerifyFinal');
      }
    } else {
      const data = {
        userId: user?.data?.id,
        email: "test@gmail.com",
        amount: processingFee,
        ref: funding == null ? "Credit wallet" : funding,
        callbackUrl: "",
      }

      const payRes = await authContext.creditNairaWallet(data, token)

      if (payRes?.data?.isSuccessFul) {
        console.log("url: ", payRes?.data?.data?.authorization_url)
        openBrowserAsync(payRes?.data?.data?.authorization_url)

        navigation.navigate('VerifyFinal');
      }
    }
    // console.log(res.data)
    return

  };
  return (
    <View style={styles.confirmAmount}>
      <Text style={styles.confirmAmount1}>Confirm amount</Text>
      <TouchableHighlight underlayColor="#DDDDDD"
        style={{
          width: 54, height: 54, marginVertical: 5, alignItems: 'center',
          justifyContent: 'center', position: "absolute", top: "2%",
        }}
        onPress={() => navigation.goBack()}>
        <Image
          style={[
            styles.arrowBackFill0Wght400Grad0Icon,
            styles.heroiconsexclamationCircleLayout,
          ]}
          contentFit="cover"
          source={require("../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
        />
      </TouchableHighlight>
      <View style={styles.interestRate}>
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

      <TouchableHighlight underlayColor="#DDDDDD" onPress={handleContinue} style={isOptionsFilled ? styles.button : styles.buttonNotSelected}>
        <Text style={styles.buttonText}>Add ₦{Intl.NumberFormat().format(processingFee)}</Text>
      </TouchableHighlight>

      <Text style={[styles.amountAddedTo, styles.totalMoneyToTypo]}>
        Amount added to wallet
      </Text>
      <Text style={[styles.processingFee, styles.totalMoneyToTypo]}>
        Processing fee
      </Text>
      <Text style={[styles.totalMoneyTo, styles.totalMoneyToTypo]}>
        Total money to be deducted
      </Text>
      <Text style={[styles.text1, styles.textTypo]}>₦{Intl.NumberFormat().format(amount)}</Text>
      <Text style={[styles.text2, styles.textTypo]}>₦30</Text>
      <Text style={[styles.text3, styles.textTypo]}>₦{Intl.NumberFormat().format(processingFee)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heroiconsexclamationCircleLayout: {
    height: 24,
    width: 24,
  },
  totalMoneyToTypo: {
    lineHeight: 17,
    fontSize: FontSize.tags_size,
    color: Color.subtextBlack,
    fontFamily: FontFamily.miniCopy141,
    left: "5%",
    // textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    width: 114,
    textAlign: "right",
    lineHeight: 20,
    marginLeft: 46,
    fontSize: FontSize.miniCopy14_size,
    fontFamily: FontFamily.miniCopy141,
    color: Color.black,
    right: "5%",
    alignSelf: "flex-end",
    position: "absolute",
  },
  confirmAmount1: {
    marginLeft: -85,
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    fontFamily: FontFamily.miniCopyMedium,
    textAlign: "left",
    color: Color.black,
    top: 32,
    left: "50%",
    position: "absolute",
  },
  arrowBackFill0Wght400Grad0Icon: {
    // left: 20,
    width: 24,
    // top: 32,
    position: "absolute",
    overflow: "hidden",
  },
  interestRateAt: {
    color: Color.subtextBlack,
    fontSize: FontSize.miniCopy14_size,
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
    // left: "50%",
    width: "100%",
    position: "absolute",
  },
  amountAddedTo: {
    top: 127,
  },
  processingFee: {
    top: 168,
  },
  totalMoneyTo: {
    top: 209,
  },
  text1: {
    top: 127,
  },
  text2: {
    top: 168,
  },
  text3: {
    top: 209,
  },
  confirmAmount: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  button: {
    top: 362,
    backgroundColor: "#ACF279",
    width: "80%",
    padding: 10,
    // margin: 10,
    alignSelf: 'center',
    borderRadius: 5,
  },
  buttonNotSelected: {
    top: 562,
    backgroundColor: Color.inactiveComponent,
    width: "100%",
    padding: 10,
    // margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  buttonTextNotSelected: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ConfirmAmount;
