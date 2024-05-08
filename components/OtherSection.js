import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Property1OthersP from "./Property1OthersP";
import { Color } from "../GlobalStyles";

const OtherSection = () => {
  return (
    <View style={styles.footerHolderParent}>
      <View style={styles.footerHolder} />
      <Property1OthersP
        invest={require("../assets/invest.png")}
        save={require("../assets/save.png")}
        property1OthersPPosition="absolute"
        property1OthersPTop={12}
        property1OthersPLeft={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footerHolder: {
    backgroundColor: Color.white,
    width: 360,
    height: 74,
    overflow: "hidden",
    zIndex: 0,
  },
  footerHolderParent: {
    position: "absolute",
    top: 726,
    left: 0,
  },
});

export default OtherSection;
