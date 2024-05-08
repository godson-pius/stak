import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Property1Active from "../../../components/Property1Active";
import { FontSize, FontFamily, Color, Border } from "../../../GlobalStyles";
import Property1Inactive from "../../../components/Property1Inactive";
import { CommonActions } from "@react-navigation/native";

const Verify2 = ({navigation}) => {
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
        // await authContext.setOnboarding(false);
        resetStackToSingleScreen(navigation, 'SignIn');
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <View style={styles.verify}>
      <Text style={[styles.yourPasswordHas, styles.youCanNowPosition]}>
        Your password has been reseted!
      </Text>
      <Text style={[styles.youCanNow, styles.youCanNowPosition]}>
        You can now login with your new password.
      </Text>
      <Image
        style={styles.verifyChild}
        contentFit="cover"
        source={require("../../../assets/frame-1691.png")}
      />
      {/* <Property1Inactive
        buttonText="Proceed to login"
        property1ActivePosition="absolute"
        property1ActiveTop={389}
        property1ActiveLeft={20}
        property1ActiveWidth={320}
        property1ActiveBackgroundColor="#9fe870"
        getStartedColor="#163300"
      /> */}
      <Property1Inactive
        getStarted="Proceed to login"
        property1InactivePosition="absolute"
        property1InactiveTop={389}
        property1InactiveLeft={20}
        property1InactiveBackgroundColor="#eee"
        property1InactiveMarginLeft="unset"
        getStartedColor="#bdbdbd"
        onButtonPress={() => {Continue()}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  youCanNowPosition: {
    textAlign: "center",
    alignSelf: "center",
    // left: "50%",
    position: "absolute",
  },
  yourPasswordHas: {
    // marginLeft: -152,
    top: 289,
    fontSize: FontSize.headerCopyMobile20_size,
    fontWeight: "500",
    fontFamily: FontFamily.subHeaderCopyMobile16,
    color: Color.black,
  },
  youCanNow: {
    // marginLeft: -137,
    top: 329,
    fontSize: FontSize.miniCopy14_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodyCopyMobile16,
    color: Color.subtextBlack,
  },
  verifyChild: {
    // marginLeft: -50,
    alignSelf: "center",
    top: 157,
    borderRadius: Border.br_181xl,
    width: 100,
    height: 100,
    // left: "50%",
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

export default Verify2;
