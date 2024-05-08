import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../../../GlobalStyles";
import { CommonActions } from '@react-navigation/native';

const Verify1 = () => {
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

  const Continue = async () => {
    try {
        await authContext.setOnboarding(false);
        resetStackToSingleScreen(navigation, 'SignUp');
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <View style={styles.verify}>
      <View
        style={[styles.transactionSuccessfulParent, styles.verifyChildPosition]}
      >
        <Text style={styles.transactionSuccessful}>
          Transaction Successful!
        </Text>
        <Text style={styles.yourN8000Swap}>
          Your N8000 swap to dollar was successful
        </Text>
      </View>
      <Image
        style={[styles.verifyChild, styles.verifyChildPosition]}
        contentFit="cover"
        source={require("../../../assets/frame-1691.png")}
      />
      <Image
        style={styles.cancelPresentationFill0WghtIcon}
        contentFit="cover"
        source={require("../../../assets/cancel-presentation-fill0-wght400-grad0-opsz24-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  verifyChildPosition: {
    position: "absolute",
  },
  transactionSuccessful: {
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    fontFamily: FontFamily.subHeaderCopyMobile16,
    color: Color.black,
    textAlign: "center",
  },
  yourN8000Swap: {
    fontSize: FontSize.miniCopy14_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodyCopyMobile16,
    color: Color.subtextBlack,
    marginTop: 16,
    textAlign: "center",
  },
  transactionSuccessfulParent: {
    top: 281,
    alignItems: "center",
    alignSelf: "center",
  },
  verifyChild: {
    alignSelf: "center",
    top: 149,
    borderRadius: Border.br_181xl,
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  cancelPresentationFill0WghtIcon: {
    top: 32,
    left: 308,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  verify: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Verify1;
