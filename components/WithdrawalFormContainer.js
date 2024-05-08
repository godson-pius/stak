import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const WithdrawalFormContainer = ({
  withdrawalLocation,
  propTop,
  propMarginLeft,
}) => {
  const cardNumber2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const expandMoreFILL0Wght400GRADIcon1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={[styles.cardNumber, cardNumber2Style]}>
      <Text style={[styles.whereAreYou, styles.gtbBankTypo]}>
        {withdrawalLocation}
      </Text>
      <View style={styles.gtbBankParent}>
        <Text style={[styles.gtbBank, styles.gtbBankTypo]}>GTB Bank</Text>
        <Image
          style={[
            styles.expandMoreFill0Wght400GradIcon,
            expandMoreFILL0Wght400GRADIcon1Style,
          ]}
          contentFit="cover"
          source={require("../assets/expand-more-fill0-wght400-grad0-opsz24.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gtbBankTypo: {
    textAlign: "left",
    fontFamily: FontFamily.miniCopyMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyCopyMobile16_size,
  },
  whereAreYou: {
    color: Color.bodyCopy,
  },
  gtbBank: {
    color: Color.inactiveText,
  },
  expandMoreFill0Wght400GradIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
    marginLeft: 199,
  },
  gtbBankParent: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.inactiveText,
    borderWidth: 1,
    width: 320,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_sm,
    marginTop: 8,
  },
  cardNumber: {
    position: "absolute",
    top: 403,
    left: 20,
  },
});

export default WithdrawalFormContainer;
