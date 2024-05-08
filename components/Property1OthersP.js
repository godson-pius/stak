import React, { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType, Image } from "react-native";
import BottomNav from "./BottomNav";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1OthersP = ({
  invest,
  save,
  property1OthersPPosition,
  property1OthersPTop,
  property1OthersPLeft,
}) => {
  const property1OthersPStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1OthersPPosition),
      ...getStyleValue("top", property1OthersPTop),
      ...getStyleValue("left", property1OthersPLeft),
    };
  }, [property1OthersPPosition, property1OthersPTop, property1OthersPLeft]);

  return (
    <View style={[styles.property1othersP, property1OthersPStyle]}>
      <BottomNav
        home={require("../assets/home.png")}
        invest={require("../assets/invest1.png")}
        ionbagAddOutline={require("../assets/ionbagaddoutline.png")}
        save={require("../assets/save2.png")}
        others={require("../assets/others.png")}
        bottomNavPosition="unset"
        homeIconOverflow="unset"
        homeColor="#b5b6b4"
        investIconOverflow="unset"
        ionbagAddOutlineIconOverflow="unset"
        saveIconOverflow="unset"
        walletColor="#b5b6b4"
        othersIconOverflow="unset"
        othersColor="#163300"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1othersP: {
    flexDirection: "row",
  },
});

export default Property1OthersP;
