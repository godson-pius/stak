import React, { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import Property1Others from "./Property1Others";
import { Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Section = ({
  productCode,
  dimensionCode,
  itemCode,
  showFrameView,
  investTop,
  propColor,
  propColor1,
  propColor2,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", investTop),
    };
  }, [investTop]);

  const saveStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const walletStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);

  const othersStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor2),
    };
  }, [propColor2]);

  return (
    showFrameView && (
      <View style={[styles.footerHolderWrapper, frameViewStyle]}>
        <View style={styles.footerHolder}>
          <Property1Others
            accountBalanceWalletFILL0={require("../assets/account-balance-wallet-fill0-wght400-grad0-opsz24-1.png")}
            pendingFILL0Wght400GRAD0O={require("../assets/pending-fill0-wght400-grad0-opsz24.png")}
            property1OthersPosition="absolute"
            property1OthersTop={14}
            property1OthersLeft={21}
            walletColor="#b5b6b4"
            othersColor="#163300"
          />
        </View>
      </View>
    )
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
    display: "none",
  },
});

export default Section;
