import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, Modal } from "react-native";
import { FontSize, Color, FontFamily } from "../../../GlobalStyles";
import { StatusBar } from 'expo-status-bar';
import CardDetails from './CardDetails';

const CardDetails1 = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);

  const isOptionsFilled = true;
  const handleContinue = () => {
    
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
    <StatusBar style="transparent"/>
    <View style={styles.cardDetails}>
      <TouchableHighlight onPress={() => {navigation.goBack()}}
        underlayColor="transparent"
        style={[
          styles.arrowBackFill0Wght400Grad0Icon,
          styles.heroiconsexclamationCircleLayout,
          {padding: 5}
        ]}>
      <Image
        style={{}}
        contentFit="cover"
        source={require("../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
      />
      </TouchableHighlight>
      {/* <Image
        style={[
          styles.arrowBackFill0Wght400Grad0Icon,
          styles.heroiconsexclamationCircleLayout,
        ]}
        contentFit="cover"
        source={require("../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
      /> */}
      <Text style={[styles.selectYourCard, styles.payWithAFlexBox]}>
        Select your card
      </Text>
      <TouchableOpacity onPress={() => {toggleModal()}}>
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
      <Text style={[styles.payWithA, styles.payWithAFlexBox]}>
        Pay with a new card
      </Text>
      <Text style={[styles.useAMastercard, styles.payWithAFlexBox]}>
        Use a Mastercard, Visa, or Verve.
      </Text>
      <Image
        style={[
          styles.creditCardFill0Wght400GradIcon,
          styles.fill0IconPosition,
        ]}
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
      </TouchableOpacity>

      <Modal visible={showModal}>
        <View style={{flex: 1, backgroundColor: 'blue'}}>
          <CardDetails onCancelPress={() => {toggleModal()}} navigation={navigation}/>
        </View>

      </Modal>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  heroiconsexclamationCircleLayout: {
    height: 34,
    width: 34,
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
    top: 93,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  arrowBackFill0Wght400Grad0Icon: {
    left: 20,
    top: 32,
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
    left: 20,
  },
  navigateNextFill0Wght400GrIcon: {
    left: 316,
  },
  cardDetails: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default CardDetails1;
