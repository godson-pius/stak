import React, { useLayoutEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableHighlight, TextInput, Alert } from "react-native";
import Property1Inactive2 from "../../../components/Property1Inactive";
import { FontFamily, Color, FontSize, Border, Padding } from "../../../GlobalStyles";
import Property1Inactive1 from "../../../components/Property1Inactive1";
import Property1Inactive from "../../../components/Property1Inactive";
import { useAuth } from '../../../components/AppProvider';

const CreditYourWallet = ({navigation, route}) => {
  const { selectedCurrency, funding } = route.params;
  const [amount, setAmount] = useState(null);
  const isOptionsFilled = true;
  const [balance, setBalance] = useState()

  const switchView = view => {
    setCurrentView(view);
  };

  const authContext = useAuth();

  const user = authContext.user ? authContext.user : 'no user';

  const handleBalance = async () => {
    const data = { currency: 'ngn', token: user?.data?.token }
    const res = await authContext.getUserBalance(data)
    
    if (res?.data?.isSuccessFul) {
      setBalance(res?.data)
    } else {
      Alert.alert("Could not fetch balance. Please refresh")
    }
  }

  useLayoutEffect(() => {
    handleBalance()
  }, [])
  const handleContinue = () => {
    
  };

  return (
    <View style={styles.creditYourWallet}>
      <Text style={[styles.creditYourWallet1, styles.text1Typo]}>
        Credit your wallet
      </Text>
      <TouchableHighlight underlayColor="#DDDDDD" onPress={() => navigation.goBack()} 
          style={[
          styles.arrowBackFill0Wght400Grad0Icon,
          styles.heroiconsexclamationCircleLayout,
        {width: 54, height: 54,marginVertical:5, alignItems: 'center', justifyContent: 'center',}
        ]}>
        <Image
          style={styles.backIcon}
          source={require('../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png')}
        />
      </TouchableHighlight>
      <View style={[styles.interestRate, styles.interestRateFlexBox]}>
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
      <Text style={[styles.text1, styles.text1Typo]}>
        {/* <Text style={styles.text3}>2000</Text> */}
        <TextInput
          placeholder="Enter amount"
          placeholderTextColor="green" // Example placeholder text color
          value={amount}
          onChangeText={setAmount}
          keyboardType='numeric'
          style={styles.textInputStyle} // Apply styling here
        />
      </Text>

      <View style={{alignSelf: 'center', alignItems: 'center', flexDirection: 'row', top: 130,}}>
        <Text style={styles.text3}>₦ </Text>
        <TextInput
          placeholder='0.00'
          placeholderTextColor="#A9A9A9" // Example placeholder text color
          keyboardType='numeric'
          value={amount}
          onChangeText={setAmount}
          style={styles.textInputStyle}
        />
      </View>
      <Text style={[styles.fundingLimit, styles.ngnPosition]}>
        Funding limit
      </Text>
      <Text style={[styles.ngn, styles.ngnTypo]}>100,000 NGN</Text>
      <Text style={[styles.ngn1, styles.ngn1Typo]}>{Intl.NumberFormat().format(balance?.data?.totalWallet)} NGN</Text>
      <Text style={[styles.currentWalletBalance, styles.ngn1Typo]}>
        Current Wallet Balance
      </Text>
      <Property1Inactive
        getStarted={`${amount? `Add ₦${Intl.NumberFormat().format(amount)}`: 'Add ₦0.00'}`}
        property1InactivePosition="absolute"
        property1InactiveTop={378}
        property1InactiveBackgroundColor="#9fe870"
        property1InactiveMarginLeft="unset"
        getStartedColor="#163300"
        onButtonPress={() =>{navigation.navigate('ConfirmAmount', {amount, user, selectedCurrency, funding})}}
        disable={amount? false: true}
      />
      
      {/* <TouchableHighlight underlayColor="#DDDDDD" onPress={handleContinue} style={isOptionsFilled? styles.button : styles.buttonNotSelected}>
        <Text style={styles.buttonText}>Add ₦2,030</Text>
      </TouchableHighlight> */}

      <View style={[styles.processingFeeParent, styles.interestRateFlexBox]}>
        <Text style={[styles.processingFee, styles.ngnTypo]}>
          Processing fee
        </Text>
        <Text style={[styles.text4, styles.ngnTypo]}>₦30</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1Typo: {
    fontFamily: FontFamily.miniCopyMedium,
    fontWeight: "500",
  },
  heroiconsexclamationCircleLayout: {
    height: 24,
    width: 24,
  },
  interestRateFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  ngnPosition: {
    top: 243,
    color: Color.subtextBlack,
    textAlign: "left",
    position: "absolute",
  },
  ngnTypo: {
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
    fontFamily: FontFamily.miniCopy141,
  },
  ngn1Typo: {
    top: 88,
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
    fontFamily: FontFamily.miniCopy141,
    textAlign: "left",
    position: "absolute",
  },
  creditYourWallet1: {
    marginLeft: -85,
    fontSize: FontSize.headerCopyMobile20_size,
    textAlign: "left",
    color: Color.black,
    left: "50%",
    top: 32,
    position: "absolute",
  },
  arrowBackFill0Wght400Grad0Icon: {
    // left: "2%",
    top: "2%",
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
    display: "none",
    left: "50%",
  },
  text2: {
    letterSpacing: 5.1,
    fontSize: FontSize.bodyCopyMobile16_size,
    color: Color.subtextBlack,
  },
  text3: {
    fontSize: 25,
    color: Color.black,
  },
  text1: {
    top: 156,
    textAlign: "left",
    position: "absolute",
    fontWeight: "500",
    alignSelf: "center",
  },
  fundingLimit: {
    fontSize: FontSize.bodyCopyMobile16_size,
    left: 20,
    fontFamily: FontFamily.miniCopyMedium,
    fontWeight: "500",
  },
  ngn: {
    width: 114,
    top: 243,
    color: Color.subtextBlack,
    textAlign: "left",
    position: "absolute",
    right: 0,
  },
  ngn1: {
    width: 99,
    color: Color.subtextBlack,
    right: 0,
  },
  currentWalletBalance: {
    left: 20,
    color: Color.black,
  },
  processingFee: {
    color: Color.subtextBlack,
    textAlign: "left",
  },
  text4: {
    textAlign: "right",
    width: 115,
    marginLeft: 75,
    color: Color.black,
  },
  processingFeeParent: {
    top: 294,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.others4,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignSelf: "center",
    width: "90%",
  },
  creditYourWallet: {
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
  textInputStyle: {
    height: 40, // Example height
    // width: 90, // Example width
    borderColor: 'gray', // Example border color
    // borderWidth: 1, // Example border width
    // marginTop: 20, // Adjust spacing as needed
    borderRadius: 5, // Example border radius for rounded corners
    // padding: 10, // Inner padding
    color: '#000000', // Text color
    fontSize: 30, // Example font size
  }
});

export default CreditYourWallet;
