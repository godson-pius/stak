import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../../../../GlobalStyles";
import { CommonActions } from "@react-navigation/native";

const Verify = ({navigation}) => {
  const resetStackToSingleScreen = (navigation, screenName) => {
    navigation.dispatch(
        CommonActions.reset({
            index: 0, // Indicates the active route in the routes array
            routes: [
                { name: screenName }, // The name of the route you want to show
            ],
        })
    );
  };

  return (
    <View style={styles.verify}>
    <TouchableHighlight underlayColor="#DDDDDD" onPress={() => resetStackToSingleScreen(navigation, 'Main')}
      style={[styles.cancelPresentationFill0WghtIcon, styles.iconPosition,
      {width: 54, height: 54,marginVertical:5, alignItems: 'center', justifyContent: 'center',}]}>
      <Image
        style={{width: 24, height: 24,}}
        contentFit="cover"
        source={require("../../../../assets/cancel-presentation-fill0-wght400-grad0-opsz24-1.png")}
      />
    </TouchableHighlight>
      <View style={[styles.frameParent, styles.iconPosition]}>
        <View style={[styles.congratulationsParent, styles.frameChildPosition]}>
          <Text style={styles.congratulations}>Congratulations!</Text>
          <Text style={styles.youHaveCreated}>
            You have created your first target plan
          </Text>
        </View>
        <Image
          style={[styles.frameChild, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../../../../assets/frame-169.png")}
        />
        <Image
          style={[styles.cancelPresentationFill0WghtIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../../../../assets/cancel-presentation-fill0-wght400-grad0-opsz24-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  frameChildPosition: {
    left: "50%",
    position: "absolute",
  },
  celebrationamicoIcon: {
    height: "58.13%",
    width: "127.89%",
    top: "0%",
    right: "-9.56%",
    bottom: "41.88%",
    left: "-18.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.3,
  },
  congratulations: {
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    fontFamily: FontFamily.headerCopyMobile20,
    color: Color.black,
    textAlign: "center",
  },
  youHaveCreated: {
    fontSize: FontSize.miniCopy14_size,
    lineHeight: 20,
    fontFamily: FontFamily.miniCopy14,
    color: Color.subTextBlack,
    marginTop: 16,
    textAlign: "center",
  },
  congratulationsParent: {
    marginLeft: -122,
    top: 223,
    alignItems: "center",
  },
  frameChild: {
    marginLeft: -50.5,
    top: 91,
    borderRadius: Border.br_181xl,
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  cancelPresentationFill0WghtIcon: {
    top: 24,
    left: 316,
    width: 24,
    height: 24,
  },
  frameParent: {
    top: 364,
    left: 0,
    width: 360,
    height: 436,
    backgroundColor: Color.white,
  },
  verify: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Verify;