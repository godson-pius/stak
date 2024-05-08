import React, { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType, Image } from "react-native";
import Property1Wallet from "./Property1Wallet";
import { Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionWithOthers = ({ iconId, iconCode, othersColor, propColor }) => {
  const walletStyle = useMemo(() => {
    return {
      ...getStyleValue("color", othersColor),
    };
  }, [othersColor]);

  const othersStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={styles.footerHolderWrapper}>
      <View style={styles.footerHolder}>
        <Property1Wallet
          iconId={require("../assets/account-balance-wallet-fill0-wght400-grad0-opsz24-1.png")}
          iconCode={require("../assets/pending-fill0-wght400-grad0-opsz24.png")}
          property1WalletPosition="absolute"
          property1WalletTop={14}
          property1WalletLeft={21}
          walletColor="#163300"
          othersColor="#b5b6b4"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerHolder: {
    backgroundColor: Color.white1,
    width: 360,
    height: 74,
    overflow: "hidden",
  },
  footerHolderWrapper: {
    position: "absolute",
    top: 726,
    left: 0,
  },
});

export default SectionWithOthers;
