import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding, TextInput } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AmountSwapFormContainer = ({
  swapAmountInputText,
  initialAmountInputText,
  propTop,
  propColor,
  propColor1,
  inputAmount,
  handleAmountChange
}) => {
  const cardNumber1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const inputAmountToStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);

  return (
    <View style={[styles.cardNumber, cardNumber1Style]}>
      <Text style={[styles.inputAmountTo, styles.textTypo, inputAmountToStyle]}>
        {swapAmountInputText}
      </Text>
      <View style={styles.wrapper}>
        <Text style={[styles.text, styles.textTypo, textStyle]}>
          {initialAmountInputText}
        </Text>
      </View>

      
      {/* <TextInput
          style={[styles.text, styles.textTypo, textStyle]}
          placeholder="Enter amount"
          value={inputAmount}
          onChangeText={handleAmountChange}
          keyboardType="numeric" // Set keyboard type to numeric for input
        /> */}
        <TextInput
          style={[styles.text, styles.textTypo, textStyle]}
          placeholder="Enter amount" />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.miniCopy141,
    lineHeight: 22,
    fontSize: FontSize.bodyCopyMobile16_size,
  },
  inputAmountTo: {
    color: Color.bodyCopy,
    
    width: '90%',
  },
  text: {
    color: Color.subtextBlack,
  },
  wrapper: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.inactiveText,
    borderWidth: 1,
    width: '90%',
    flexDirection: "row",
    alignItems: "center",
    // alignSelf: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_sm,
    marginTop: 8,
  },
  cardNumber: {
    position: "absolute",
    top: 248,
    // left: 20,
    width: '100%',
    alignItems: "center",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.miniCopy141,
    lineHeight: 22,
    fontSize: FontSize.bodyCopyMobile16_size,
  },
  inputAmountTo: {
    color: Color.bodyCopy,
    width: "90%",
  },
  text: {
    color: Color.subtextBlack,
    flex: 1, // Take up remaining space in the TextInput wrapper
  },
  wrapper: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.inactiveText,
    borderWidth: 1,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_sm,
    marginTop: 8,
  },
  cardNumber: {
    position: "absolute",
    top: 248,
    width: "100%",
    alignItems: "center",
  },

});

export default AmountSwapFormContainer;
