import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableHighlight } from "react-native";
import BottomNav from "../../components/BottomNav";
import Property1Inactive from "../../components/Property1Inactive";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
} from "../../GlobalStyles";

const Send = ({navigation}) => {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [amountToSend, setAmountToSend] = useState("");

  const handleContinue = () => {
    // Add logic for handling continue button press
    navigation.navigate('ConfirmPinScreenFinal', { recipientPhone, amountToSend });
  };

  return (
    <View style={[styles.send, styles.sendBg]}>
      <Text style={styles.sendToA}>Send to a Stak user</Text>
      <TouchableHighlight onPress={() => {navigation.goBack()}}>
        <Image
          style={[styles.arrowBackFill0Wght400Grad0Icon, styles.fill0IconLayout]}
          contentFit="cover"
          source={require("../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
        />
      </TouchableHighlight>
      <Text style={styles.whoAreYou}>Who are you sending to?</Text>

      <View style={styles.cardNumber}>
        <Text style={styles.enterTheirRegistered}>
          Enter recipent phone number
        </Text>
        <TextInput
          style={styles.input}
          value={recipientPhone}
          onChangeText={(text) => setRecipientPhone(text)}
          placeholder="+23467363736211"
        />
      </View>

      <View style={styles.cardNumber1}>
        <Text style={styles.enterTheirRegistered}>Enter amount to send</Text>
        <TextInput
          style={styles.input}
          value={amountToSend}
          onChangeText={(text) => setAmountToSend(text)}
          placeholder="3000"
          keyboardType="numeric"
        />
      </View>

      <Property1Inactive
        getStarted="Continue"
        property1InactivePosition="absolute"
        property1InactiveBackgroundColor="#eee"
        property1InactiveTop={418}
        property1InactiveLeft={20}
        property1InactiveWidth={320}
        property1InactiveMarginLeft="unset"
        getStartedColor="#bdbdbd"
        onButtonPress={handleContinue}
        disable={!recipientPhone || !amountToSend}
      />

      <View style={styles.footerHolderParent}>
        <View style={styles.footerHolder} />
        <View style={styles.nav}>
          <BottomNav
            home={require("../../assets/home1.png")}
            invest={require("../../assets/invest1.png")}
            ionbagAddOutline={require("../../assets/ionbagaddoutline.png")}
            save={require("../../assets/save1.png")}
            others={require("../../assets/others1.png")}
            bottomNavPosition="unset"
            homeIconOverflow="unset"
            homeColor="#b5b6b4"
            investIconOverflow="unset"
            investColor="#b5b6b4"
            ionbagAddOutlineIconOverflow="unset"
            saveColor="#b5b6b4"
            saveIconOverflow="unset"
            walletColor="#163300"
            othersIconOverflow="unset"
            othersColor="#b5b6b4"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sendBg: {
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  sendToA: {
    top: 88,
    fontSize: FontSize.headerCopyMobile20_size,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.bodyCopyMobile16,
    left: "50%",
    marginLeft: -160,
    fontWeight: "500",
    position: "absolute",
  },
  backIcon: {
    top: 32,
    left: 20,
    position: "absolute",
  },
  whoAreYou: {
    top: 124,
    fontSize: FontSize.miniCopy14_size,
    lineHeight: 20,
    color: Color.subTextBlack,
    textAlign: "left",
    fontFamily: FontFamily.bodyCopyMobile16,
    left: "50%",
    marginLeft: -160,
    position: "absolute",
  },
  enterTheirRegistered: {
    lineHeight: 22,
    fontSize: FontSize.bodyCopyMobile16_size,
    color: Color.subTextBlack,
    textAlign: "left",
    fontWeight: 'bold',
    fontFamily: FontFamily.bodyCopyMobile16,
  },
  input: {
    borderWidth: 1,
    borderColor: Color.inactiveText,
    borderRadius: Border.br_3xs,
    padding: Padding.p_sm,
    marginTop: 8,
    width: "100%",
  },
  cardNumber: {
    top: 176,
    // left: 20,
    position: "absolute",
    width: "90%",
    alignSelf: 'center',
  },
  cardNumber1: {
    top: 286,
    position: "absolute",
    width: "90%",
    alignSelf: 'center',
  },
  footerHolderParent: {
    top: 726,
    left: 0,
    display: "none",
    position: "absolute",
  },
  footerHolder: {
    width: 360,
    height: 74,
    zIndex: 0,
  },
  nav: {
    top: 12,
    zIndex: 1,
    flexDirection: "row",
  },
  send: {
    flex: 1,
    width: "100%",
    height: 800,
  },
  arrowBackFill0Wght400Grad0Icon: {
    top: 32,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  fill0IconLayout: {
    height: 24,
    width: 24,
  },
});

export default Send;
