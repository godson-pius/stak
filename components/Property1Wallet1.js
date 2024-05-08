import React, { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType, Image } from "react-native";
import BottomNav from "./BottomNav";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Wallet = ({
  iconId,
  iconCode,
  property1WalletPosition,
  property1WalletTop,
  property1WalletLeft,
  walletColor,
  othersColor,
}) => {
  const property1WalletStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1WalletPosition),
      ...getStyleValue("top", property1WalletTop),
      ...getStyleValue("left", property1WalletLeft),
    };
  }, [property1WalletPosition, property1WalletTop, property1WalletLeft]);

  const walletStyle = useMemo(() => {
    return {
      ...getStyleValue("color", walletColor),
    };
  }, [walletColor]);

  const othersStyle = useMemo(() => {
    return {
      ...getStyleValue("color", othersColor),
    };
  }, [othersColor]);

  return (
    <View style={[styles.property1wallet, property1WalletStyle]}>
      <BottomNav
        home={require("../assets/home-fill0-wght400-grad0-opsz24.png")}
        invest={require("../assets/database-fill0-wght400-grad0-opsz24.png")}
        ionbagAddOutline={require("../assets/enterprise-fill0-wght400-grad0-opsz24.png")}
        save={require("../assets/account-balance-wallet-fill0-wght400-grad0-opsz24-1.png")}
        others={require("../assets/pending-fill0-wght400-grad0-opsz24.png")}
        bottomNavPosition="unset"
        homeIconOverflow="hidden"
        homeColor="#b5b6b4"
        investIconOverflow="hidden"
        ionbagAddOutlineIconOverflow="hidden"
        saveIconOverflow="hidden"
        walletColor="#163300"
        othersIconOverflow="hidden"
        othersColor="#b5b6b4"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1wallet: {
    flexDirection: "row",
  },
});

export default Property1Wallet;
