import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import EmailVerificationContainer from '../../../components/EmailVerificationContainer';
import { Color, FontSize, FontFamily } from '../../../GlobalStyles';

const AddMoney1 = ({ navigation, route }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const { selectedCurrency, funding } = route.params;

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    navigation.navigate(option, { selectedCurrency, funding })
  };

  return (
    <View style={styles.addMoney}>
      <TouchableHighlight underlayColor="#DDDDDD" onPress={() => navigation.goBack()} style={{width: 54, height: 54,marginVertical:5,
      alignItems: 'center', justifyContent: 'center', left: "-2%",}}>
        <Image
          style={styles.backIcon}
          source={require('../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png')}
        />
      </TouchableHighlight>
      <Text style={styles.header}>Add money</Text>
      
      <Text style={styles.question}>How do you want to fund your wallet?</Text>

      {/* Naira Bank Transfer Option */}
      <TouchableOpacity onPress={() => handleOptionSelect('CreditYourWallet')} style={styles.optionContainer}>
        <View style={styles.optionTextContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/account-balance-fill0-wght400-grad0-opsz24.png")}
          />
          <View style={styles.textContainer}>
            <Text style={[styles.optionText, styles.creditdebitCardTypo]}>{selectedCurrency
            } Bank Transfer</Text>
            <Text style={[styles.optionDescription, styles.howDoYouTypo]}>
              Transfer to your Stak account number
            </Text>
          </View>
        </View>
        <Image
          style={styles.arrowIcon}
          source={require("../../../assets/navigate-next-fill0-wght400-grad0-opsz241.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleOptionSelect('CardDetails1')} style={styles.optionContainer}>
        <View style={styles.optionTextContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/credit-card-fill0-wght400-grad0-opsz24.png")}
          />
          <View style={styles.textContainer}>
            <Text style={[styles.optionText, styles.creditdebitCardTypo]}>Credit/Debit Card</Text>
            <Text style={[styles.optionDescription, styles.howDoYouTypo]}>
              Add money with your local account card
            </Text>
          </View>
        </View>
        <Image
          style={styles.arrowIcon}
          source={require("../../../assets/navigate-next-fill0-wght400-grad0-opsz241.png")}
        />
      </TouchableOpacity>

      <EmailVerificationContainer
        emailVerificationMessage={`Verify your email address to add more than 126 USD = 100,000 NGN to your account.`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addMoney: {
    backgroundColor: Color.white,
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: '500',
    fontFamily: FontFamily.miniCopyMedium,
    color: Color.black,
    marginBottom: 20,
  },
  question: {
    fontSize: FontSize.bodyCopyMobile16_size,
    color: Color.subtextBlack,
    marginBottom: 10,
  },
  icon: {
    height: 24,
    width: 24,
    marginRight: 10,
  },
  // optionText: {
  //   fontSize: FontSize.bodyCopyMobile16_size,
  //   color: Color.black,
  // },
  selectedIcon: {
    marginLeft: 'auto',
    height: 24,
    width: 24,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10, // Adjust padding as needed
    borderBottomWidth: 1,
    borderBottomColor: '#eee', // Adjust color as needed
  },
  optionTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10, // Space between icon and text/description
  },
  optionText: {
    // Your option text styling
    fontSize: FontSize.bodyCopyMobile16_size,
    color: Color.black,
    marginTop: 15,
    marginBottom: 5,
  },
  optionDescription: {
    // Your option description styling
    fontSize: FontSize.miniCopy14_size, // Example size
    color: Color.subtextBlack, // Example color
  },
  icon: {
    // Your icon styling
    height: 24,
    width: 24,
  },
  arrowIcon: {
    // Styling for the arrow icon
    height: 24,
    width: 24,
  },
});

export default AddMoney1;
