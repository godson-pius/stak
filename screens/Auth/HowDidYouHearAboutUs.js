import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity,TextInput } from "react-native";
import { useState } from "react";
import { FontSize, FontFamily, Padding, Color, Border } from "../../GlobalStyles";

import Property1Inactive from "../../components/Property1Inactive";

const HowDidYouHearAboutUs = ({navigation, route}) => {
  const { firstName, lastName, selectedCountry, phoneNumber, password } = route.params;

  const [selectedOption, setSelectedOption] = useState(null);
  const [other, setOther] = useState("");

  const handleOptionPress = (option) => {
    setOther("");
    setSelectedOption(option);
    console.log(option)
  };

  const handleOtherType = (value) => {
    setOther(value);
    setSelectedOption(null);
  };

  const handleContinuePress = () => {
    const howDidYouHearAboutUs = selectedOption? selectedOption: other;

    navigation.navigate('SetupPinScreen', { firstName, lastName, selectedCountry, phoneNumber, password, selectedOption })
  };

  return (
    <View style={styles.howDidYouHearAboutUs}>
      <View style={styles.createAnAccount}>
        <Text style={styles.almostIn}>Almost in!</Text>
      </View>
      <Text style={[styles.howDidYou, styles.otherTypo]}>
        How did you hear about us?
      </Text>
      <Property1Inactive
        getStarted="Continue"
        property1InactivePosition="absolute"
        property1InactiveTop={439}
        property1InactiveLeft={20}
        property1InactiveBackgroundColor="#eee"
        property1InactiveMarginLeft="unset"
        getStartedColor="#bdbdbd"
        onButtonPress={() => {handleContinuePress()}}
      />
      {/* <TouchableOpacity onPress={() => handleOptionPress("Family or friends")}></TouchableOpacity> */}
      <TouchableOpacity onPress={() => handleOptionPress(0)}>
        <View style={[styles.familyOrFriends, styles.familySpaceBlock]}>
          <Image
            style={styles.circleFill0Wght400Grad0OpsIcon}
            contentFit="cover"
            source={selectedOption === "Family or friends"?
              require("../../assets/radio-button-checked-fill0-wght400-grad0-opsz24.png")
              :require("../../assets/circle-fill0-wght400-grad0-opsz24.png")}
          />
          <Text style={[styles.familyOrFriends1, styles.twitterTypo]}>
            Family or friends
          </Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => handleOptionPress(1)}>
        <View style={[styles.familyOrFriends2, styles.familySpaceBlock]}>
          <Image
            style={styles.circleFill0Wght400Grad0OpsIcon}
            contentFit="cover"
            source={selectedOption === "Twitter"?
              require("../../assets/radio-button-checked-fill0-wght400-grad0-opsz24.png")
              :require("../../assets/circle-fill0-wght400-grad0-opsz24.png")}
          />
          <Text style={[styles.twitter, styles.twitterTypo]}>Twitter</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleOptionPress(2)}>
        <View style={[styles.familyOrFriends3, styles.familySpaceBlock]}>
          <Image
            style={styles.circleFill0Wght400Grad0OpsIcon}
            contentFit="cover"
            source={selectedOption === "LinkedIn"?
              require("../../assets/radio-button-checked-fill0-wght400-grad0-opsz24.png")
              :require("../../assets/circle-fill0-wght400-grad0-opsz24.png")}
          />
          <Text style={[styles.familyOrFriends1, styles.twitterTypo]}>
            LinkedIn
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleOptionPress(3)}>
        <View style={[styles.familyOrFriends4, styles.familySpaceBlock]}>
          <Image
            style={styles.circleFill0Wght400Grad0OpsIcon}
            contentFit="cover"
            source={selectedOption === "Instagram"?
              require("../../assets/radio-button-checked-fill0-wght400-grad0-opsz24.png")
              :require("../../assets/circle-fill0-wght400-grad0-opsz24.png")}
          />
          <Text style={[styles.familyOrFriends1, styles.twitterTypo]}>
            Instagram
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleOptionPress(4)}>
        <View style={[styles.familyOrFriends5, styles.familySpaceBlock]}>
          <Image
            style={styles.circleFill0Wght400Grad0OpsIcon}
            contentFit="cover"
            source={selectedOption === "Facebook"?
              require("../../assets/radio-button-checked-fill0-wght400-grad0-opsz24.png")
              :require("../../assets/circle-fill0-wght400-grad0-opsz24.png")}
          />
          <Text style={[styles.familyOrFriends1, styles.twitterTypo]}>
            Facebook
          </Text>
        </View>
      </TouchableOpacity>

      <View style={[styles.familyOrFriends, styles.familySpaceBlock]}>
      </View>
      <View style={[styles.familyOrFriends2, styles.familySpaceBlock]}>
      </View>
      <View style={[styles.familyOrFriends3, styles.familySpaceBlock]}>
      </View>
      <View style={[styles.familyOrFriends4, styles.familySpaceBlock]}>
      </View>
      <View style={[styles.familyOrFriends5, styles.familySpaceBlock]}>
      </View>
      <View style={styles.otherWrapper}>
        <TextInput style={{width: '100%', height: 15}} placeholder="Other"
        value={other}
        onChangeText={(value) => {
          handleOtherType(value)
        }}/>
        {/* <Text style={[styles.other, styles.otherTypo]}>Other</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otherTypo: {
    fontSize: FontSize.bodyCopyMobile16_size,
    textAlign: "left",
    fontFamily: FontFamily.miniCopyMedium,
    fontWeight: "500",
  },
  familySpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    alignItems: "center",
    left: 20,
    flexDirection: "row",
    position: "absolute",
  },
  twitterTypo: {
    marginLeft: 8,
    fontFamily: FontFamily.miniCopy141,
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
    textAlign: "left",
  },
  almostIn: {
    fontSize: FontSize.headerCopyMobile20_size,
    color: Color.blackText,
    textAlign: "left",
    fontFamily: FontFamily.miniCopyMedium,
    fontWeight: "500",
  },
  createAnAccount: {
    top: 40,
    left: 23,
    flexDirection: "row",
    position: "absolute",
  },
  howDidYou: {
    top: 76,
    color: Color.subtextBlack,
    left: 20,
    fontSize: FontSize.bodyCopyMobile16_size,
    position: "absolute",
  },
  circleFill0Wght400Grad0OpsIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  familyOrFriends1: {
    color: Color.subtextBlack,
  },
  familyOrFriends: {
    top: 119,
  },
  twitter: {
    color: Color.primaryColorFill,
  },
  familyOrFriends2: {
    top: 167,
  },
  familyOrFriends3: {
    top: 215,
  },
  familyOrFriends4: {
    top: 263,
  },
  familyOrFriends5: {
    top: 311,
  },
  other: {
    color: Color.inactiveText,
  },
  otherWrapper: {
    top: 359,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.inactiveText,
    borderWidth: 1,
    width: 320,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    left: 20,
    flexDirection: "row",
    position: "absolute",
  },
  howDidYouHearAboutUs: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default HowDidYouHearAboutUs;
