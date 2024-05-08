import React, { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType, Image } from "react-native";
import BottomNav from "./BottomNav";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Others = ({
  save,
  others,
  property1OthersPosition,
  property1OthersTop,
  property1OthersLeft,
  accountBalanceWalletFILL0Color,
  pendingFILL0Wght400GRAD0OColor,
}) => {
  const property1OthersStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1OthersPosition),
      ...getStyleValue("top", property1OthersTop),
      ...getStyleValue("left", property1OthersLeft),
    };
  }, [property1OthersPosition, property1OthersTop, property1OthersLeft]);

  const walletStyle = useMemo(() => {
    return {
      ...getStyleValue("color", accountBalanceWalletFILL0Color),
    };
  }, [accountBalanceWalletFILL0Color]);

  const othersStyle = useMemo(() => {
    return {
      ...getStyleValue("color", pendingFILL0Wght400GRAD0OColor),
    };
  }, [pendingFILL0Wght400GRAD0OColor]);

  return (
    <View style={[styles.property1others, property1OthersStyle]}>
      <BottomNav
        home={require("../assets/home-fill0-wght400-grad0-opsz24.png")}
        invest={require("../assets/database-fill0-wght400-grad0-opsz24.png")}
        ionbagAddOutline={require("../assets/enterprise-fill0-wght400-grad0-opsz24.png")}
        save={require("../assets/account-balance-wallet-fill0-wght400-grad0-opsz24-11.png")}
        others={require("../assets/pending-fill0-wght400-grad0-opsz241.png")}
        bottomNavPosition="unset"
        homeIconOverflow="hidden"
        homeColor="#b5b6b4"
        investIconOverflow="hidden"
        ionbagAddOutlineIconOverflow="hidden"
        saveIconOverflow="hidden"
        walletColor="#b5b6b4"
        othersIconOverflow="hidden"
        othersColor="#163300"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1others: {
    flexDirection: "row",
  },
});

export default Property1Others;
