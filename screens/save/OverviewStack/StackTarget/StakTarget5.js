import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Property1Inactive from "../../../../components/Property1Inactive";
import { Padding, Color, Border, FontFamily, FontSize } from "../../../../GlobalStyles";

const StakTarget5 = () => {
  return (
    <View style={styles.stakTarget}>
      <Image
        style={[styles.arrowBackFill0Wght400Grad0Icon, styles.fill0IconLayout]}
        contentFit="cover"
        source={require("../../../../assets/arrow-back-fill0-wght400-grad0-opsz24.png")}
      />
      <Image
        style={[styles.holderIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../../../../assets/holder1.png")}
      />
      
      <Text style={styles.targetSaving}>Target Saving</Text>
      <Text style={styles.setASavings}>
        Set a savings target for yourself today to reach your goals!
      </Text>
      
      <View style={[styles.step1Parent, styles.iconPosition]}>
        <Text style={styles.step1}>Step 1</Text>
        <Text style={[styles.step2, styles.stepPosition]}>Step 2</Text>
        <Text style={[styles.step3, styles.stepPosition]}>Step 3</Text>
        <Text style={[styles.step4, styles.stepPosition]}>Step 4</Text>
        <View style={styles.frameChild} />
      </View>

      <Text style={styles.whatAreYou}>What are you saving for?</Text>

      <View style={{marginTop: 20,}}>
        <View style={{width: '100%', flexDirection: 'row'}}>
          <TouchableHighlight>
            <View
              style={[
                styles.fill0ParentPosition,
              ]}
            >
              <Image
                style={styles.fill0IconLayout}
                contentFit="cover"
                source={require("../../../../assets/house-fill0-wght400-grad0-opsz241.png")}
              />
              <Text style={[styles.billsTypo]}>Housing</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View
              style={[
                styles.fill0ParentPosition,
              ]}
            >
              <Image
                style={styles.fill0IconLayout}
                contentFit="cover"
                source={require("../../../../assets/directions-car-fill0-wght400-grad0-opsz24.png")}
              />
              <Text style={[styles.billsTypo]}>Transport</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View
              style={[
                styles.fill0ParentPosition,
              ]}
            >
              <Image
                style={styles.fill0IconLayout}
                contentFit="cover"
                source={require("../../../../assets/school-fill0-wght400-grad0-opsz24-1.png")}
              />
              <Text style={[styles.billsTypo]}>Education</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{width: '100%', flexDirection: 'row', marginVertical: 10,}}>
          <TouchableHighlight>
            <View
              style={[
                styles.fill0ParentPosition,
              ]}
            >
              <Image
                style={styles.fill0IconLayout}
                contentFit="cover"
                source={require("../../../../assets/medical-services-fill0-wght400-grad0-opsz24.png")}
              />
              <Text style={[styles.billsTypo]}>Health</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View
              style={[
                styles.fill0ParentPosition,
              ]}
            >
              <Image
                style={styles.fill0IconLayout}
                contentFit="cover"
                source={require("../../../../assets/dinner-dining-fill0-wght400-grad0-opsz24.png")}
              />
              <Text style={[ styles.billsTypo]}>Food</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View
              style={[
                styles.fill0ParentPosition,
              ]}
            >
              <Image
                style={styles.fill0IconLayout}
                contentFit="cover"
                source={require("../../../../assets/travel-luggage-and-bags-fill0-wght400-grad0-opsz24.png")}
              />
              <Text style={[styles.billsTypo]}>Travel</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{width: '100%', flexDirection: 'row'}}>
          <View
            style={[
              styles.fill0ParentPosition,
            ]}
          >
            <Image
              style={styles.fill0IconLayout}
              contentFit="cover"
              source={require("../../../../assets/phone-iphone-fill0-wght400-grad0-opsz24.png")}
            />
            <Text style={[styles.billsTypo]}>Bills</Text>
          </View>
          <View style={styles.addYourGoalWrapper}>
            <Text style={styles.addYourGoal}>Add your goal</Text>
          </View>
        </View>
        <Property1Inactive
          getStarted="Continue"
          // property1InactivePosition="absolute"
          property1InactiveTop={30}
          property1InactiveLeft={20}
          property1InactiveBackgroundColor="#eee"
          property1InactiveMarginLeft="unset"
          getStartedColor="#bdbdbd"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fill0IconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  iconPosition: {
    // position: "absolute",
    // left: 20,
  },
  fill0ParentSpaceBlock: {
    padding: Padding.p_5xs,
    alignItems: "center",
    backgroundColor: Color.inactiveComponent,
    borderRadius: Border.br_5xs,
    // position: "absolute",
    width: 80
  },
  billsTypo: {
    marginTop: 8,
    textAlign: "center",
    color: Color.subTextBlack,
    fontFamily: FontFamily.tags,
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
  },
  fill0ParentPosition: {
    // top: 433,
    // padding: Padding.p_5xs,
    alignItems: "center",
    backgroundColor: Color.inactiveComponent,
    borderRadius: Border.br_5xs,
    // position: "absolute",
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginRight: 10,
    // width: 80,
  },
  stepPosition: {
    color: Color.inactiveText,
    lineHeight: 22,
    fontSize: FontSize.subHeaderCopyMobile16_size,
    fontFamily: FontFamily.tags,
    textAlign: "left",
    // left: "50%",
    // position: "absolute",
  },
  targetSaving: {
    marginTop: 10,
    fontSize: FontSize.headerCopyMobile20_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.headerCopyMobile201,
    fontWeight: "500",
    // left: "50%",
    // marginLeft: -160,
    // position: "absolute",
  },
  arrowBackFill0Wght400Grad0Icon: {
    // top: 32,
    marginTop: 40,
    // left: 20,
    // position: "absolute",
  },
  setASavings: {
    marginTop: 10,
    // width: 320,
    color: Color.subTextBlack,
    fontFamily: FontFamily.tags,
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
    textAlign: "left",
    // marginLeft: -160,
    // position: "absolute",
  },
  holderIcon: {
    marginTop: 20,
    borderRadius: 9,
    width: 40,
    height: 40,
    // left: 20,
    // overflow: "hidden",
  },
  whatAreYou: {
    marginTop: 10,
    color: Color.bodyCopy,
    fontSize: FontSize.subHeaderCopyMobile16_size,
    textAlign: "left",
    fontFamily: FontFamily.headerCopyMobile201,
    fontWeight: "500",
  },
  houseFill0Wght400Grad0OpszParent: {
    padding: Padding.p_5xs,
    marginRight: 20,
  },
  addYourGoal: {
    lineHeight: 22,
    fontSize: FontSize.subHeaderCopyMobile16_size,
    color: Color.subTextBlack,
    fontFamily: FontFamily.tags,
    textAlign: "left",
  },
  addYourGoalWrapper: {
    borderRadius: Border.br_181xl,
    width: 183,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    backgroundColor: Color.inactiveComponent,
  },
  step1: {
    // marginLeft: -154,
    width: '25%',
    top: 0,
    lineHeight: 22,
    fontSize: FontSize.subHeaderCopyMobile16_size,
    fontFamily: FontFamily.tags,
    textAlign: "left",
    color: Color.black,
    // left: "50%",
    // position: "absolute",
  },
  step2: {
    width: '25%',
    // marginLeft: -72,
  },
  step3: {
    width: '25%',
    // marginLeft: 10,
  },
  step4: {
    width: '25%',
    // marginLeft: 92,
  },
  frameChild: {
    top: 34,
    left: 0,
    backgroundColor: Color.colorSilver_100,
    width: 296,
    height: 8,
    borderRadius: Border.br_5xs,
    position: "absolute",
    overflow: "hidden",
  },
  step1Parent: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    height: 42,
    // left: 20,
  },
  stakTarget: {
    backgroundColor: Color.white,
    width: "100%",
    height: 800,
    overflow: "hidden",
    paddingHorizontal: "5%",
  },
});

export default StakTarget5;
