import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import TypeLetter from "./TypeLetter";
import TypeIcon from "./TypeIcon";
import TypeTab from "./TypeTab";
import { Padding, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeNumbersThemeDark = ({
  showNavigation,
  typeNumbersThemeDarkPosition,
  typeNumbersThemeDarkBackgroundColor,
  typeNumbersThemeDarkTop,
  typeNumbersThemeDarkLeft,
  keyPrimaryBorderRadius,
  keyPrimaryBackgroundColor,
  keyPrimaryBorderRadius1,
  keyPrimaryBackgroundColor1,
  keyPrimaryBorderRadius2,
  keyPrimaryBackgroundColor2,
  keyFunctionBorderRadius,
  keyPrimaryBorderRadius3,
  keyPrimaryBackgroundColor3,
  keyPrimaryBorderRadius4,
  keyPrimaryBackgroundColor4,
  keyPrimaryBorderRadius5,
  keyPrimaryBackgroundColor5,
  keyFunctionBorderRadius1,
  keyPrimaryBorderRadius6,
  keyPrimaryBackgroundColor6,
  keyPrimaryBorderRadius7,
  keyPrimaryBackgroundColor7,
  keyPrimaryBorderRadius8,
  keyPrimaryBackgroundColor8,
  keyFunctionBorderRadius2,
  keyFunctionBackgroundColor,
  keyPrimaryBorderRadius9,
  keyPrimaryBackgroundColor9,
  keyPrimaryBorderRadius10,
  keyPrimaryBackgroundColor10,
  keyPrimaryBorderRadius11,
  keyPrimaryBackgroundColor11,
  keySpecialFunctionBorderRadius,
}) => {
  const typeNumbersThemeDarkStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeNumbersThemeDarkPosition),
      ...getStyleValue("backgroundColor", typeNumbersThemeDarkBackgroundColor),
      ...getStyleValue("top", typeNumbersThemeDarkTop),
      ...getStyleValue("left", typeNumbersThemeDarkLeft),
    };
  }, [
    typeNumbersThemeDarkPosition,
    typeNumbersThemeDarkBackgroundColor,
    typeNumbersThemeDarkTop,
    typeNumbersThemeDarkLeft,
  ]);

  const typeLetterStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", keyPrimaryBorderRadius),
      ...getStyleValue("backgroundColor", keyPrimaryBackgroundColor),
    };
  }, [keyPrimaryBorderRadius, keyPrimaryBackgroundColor]);

  const typeLetterStyle1 = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", keyPrimaryBorderRadius1),
      ...getStyleValue("backgroundColor", keyPrimaryBackgroundColor1),
    };
  }, [keyPrimaryBorderRadius1, keyPrimaryBackgroundColor1]);

  const typeLetterStyle2 = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", keyPrimaryBorderRadius2),
      ...getStyleValue("backgroundColor", keyPrimaryBackgroundColor2),
    };
  }, [keyPrimaryBorderRadius2, keyPrimaryBackgroundColor2]);

  const typeIconStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", keyFunctionBorderRadius),
    };
  }, [keyFunctionBorderRadius]);

  const typeLetterStyle3 = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", keyPrimaryBorderRadius3),
      ...getStyleValue("backgroundColor", keyPrimaryBackgroundColor3),
    };
  }, [keyPrimaryBorderRadius3, keyPrimaryBackgroundColor3]);

  const typeLetterStyle4 = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", keyPrimaryBorderRadius4),
      ...getStyleValue("backgroundColor", keyPrimaryBackgroundColor4),
    };
  }, [keyPrimaryBorderRadius4, keyPrimaryBackgroundColor4]);

  const typeLetterStyle5 = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", keyPrimaryBorderRadius5),
      ...getStyleValue("backgroundColor", keyPrimaryBackgroundColor5),
    };
  }, [keyPrimaryBorderRadius5, keyPrimaryBackgroundColor5]);

  const typeIconStyle1 = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", keyFunctionBorderRadius1),
    };
  }, [keyFunctionBorderRadius1]);

  const typeLetterStyle6 = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", keyPrimaryBorderRadius6),
      ...getStyleValue("backgroundColor", keyPrimaryBackgroundColor6),
    };
  }, [keyPrimaryBorderRadius6, keyPrimaryBackgroundColor6]);

  const typeLetterStyle7 = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", keyPrimaryBorderRadius7),
      ...getStyleValue("backgroundColor", keyPrimaryBackgroundColor7),
    };
  }, [keyPrimaryBorderRadius7, keyPrimaryBackgroundColor7]);

  const typeLetterStyle8 = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", keyPrimaryBorderRadius8),
      ...getStyleValue("backgroundColor", keyPrimaryBackgroundColor8),
    };
  }, [keyPrimaryBorderRadius8, keyPrimaryBackgroundColor8]);

  const typeIconStyle2 = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", keyFunctionBorderRadius2),
      ...getStyleValue("backgroundColor", keyFunctionBackgroundColor),
    };
  }, [keyFunctionBorderRadius2, keyFunctionBackgroundColor]);

  const typeLetterStyle9 = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", keyPrimaryBorderRadius9),
      ...getStyleValue("backgroundColor", keyPrimaryBackgroundColor9),
    };
  }, [keyPrimaryBorderRadius9, keyPrimaryBackgroundColor9]);

  const typeLetterStyle10 = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", keyPrimaryBorderRadius10),
      ...getStyleValue("backgroundColor", keyPrimaryBackgroundColor10),
    };
  }, [keyPrimaryBorderRadius10, keyPrimaryBackgroundColor10]);

  const typeLetterStyle11 = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", keyPrimaryBorderRadius11),
      ...getStyleValue("backgroundColor", keyPrimaryBackgroundColor11),
    };
  }, [keyPrimaryBorderRadius11, keyPrimaryBackgroundColor11]);

  const typeTabStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", keySpecialFunctionBorderRadius),
    };
  }, [keySpecialFunctionBorderRadius]);

  return (
    <View style={[styles.typenumbersThemedark, typeNumbersThemeDarkStyle]}>
      <View style={[styles.view, styles.viewFlexBox]}>
        <TypeLetter
          a="1"
          typeLetterPosition="unset"
          typeLetterBorderRadius={46}
          typeLetterBackgroundColor="#23262a"
          typeLetterPaddingTop={2}
          typeLetterMarginLeft="unset"
          aFontSize={26}
          aColor="#fff"
        />
        <TypeLetter
          a="2"
          typeLetterPosition="unset"
          typeLetterBorderRadius={46}
          typeLetterBackgroundColor="#23262a"
          typeLetterPaddingTop={2}
          typeLetterMarginLeft={5}
          aFontSize={26}
          aColor="#fff"
        />
        <TypeLetter
          a="3"
          typeLetterPosition="unset"
          typeLetterBorderRadius={46}
          typeLetterBackgroundColor="#23262a"
          typeLetterPaddingTop={2}
          typeLetterMarginLeft={5}
          aFontSize={26}
          aColor="#fff"
        />
        <TypeIcon
          iconShiftOn={require("../assets/icon--remove.png")}
          typeIconPosition="unset"
          typeIconBorderRadius={46}
          typeIconBackgroundColor="#23262a"
          typeIconFlex={1}
          typeIconMarginLeft={5}
          iconShiftOnPosition="relative"
        />
      </View>
      <View style={[styles.view1, styles.view1SpaceBlock]}>
        <TypeLetter
          a="4"
          typeLetterPosition="unset"
          typeLetterBorderRadius={46}
          typeLetterBackgroundColor="#23262a"
          typeLetterPaddingTop={2}
          typeLetterMarginLeft="unset"
          aFontSize={26}
          aColor="#fff"
        />
        <TypeLetter
          a="5"
          typeLetterPosition="unset"
          typeLetterBorderRadius={46}
          typeLetterBackgroundColor="#23262a"
          typeLetterPaddingTop={2}
          typeLetterMarginLeft={5}
          aFontSize={26}
          aColor="#fff"
        />
        <TypeLetter
          a="6"
          typeLetterPosition="unset"
          typeLetterBorderRadius={46}
          typeLetterBackgroundColor="#23262a"
          typeLetterPaddingTop={2}
          typeLetterMarginLeft={5}
          aFontSize={26}
          aColor="#fff"
        />
        <TypeIcon
          iconShiftOn={require("../assets/icon--space-bar.png")}
          typeIconPosition="unset"
          typeIconBorderRadius={46}
          typeIconBackgroundColor="#23262a"
          typeIconFlex={1}
          typeIconMarginLeft={5}
          iconShiftOnPosition="relative"
        />
      </View>
      <View style={[styles.view1, styles.view1SpaceBlock]}>
        <TypeLetter
          a="7"
          typeLetterPosition="unset"
          typeLetterBorderRadius={46}
          typeLetterBackgroundColor="#23262a"
          typeLetterPaddingTop={2}
          typeLetterMarginLeft="unset"
          aFontSize={26}
          aColor="#fff"
        />
        <TypeLetter
          a="8"
          typeLetterPosition="unset"
          typeLetterBorderRadius={46}
          typeLetterBackgroundColor="#23262a"
          typeLetterPaddingTop={2}
          typeLetterMarginLeft={5}
          aFontSize={26}
          aColor="#fff"
        />
        <TypeLetter
          a="9"
          typeLetterPosition="unset"
          typeLetterBorderRadius={46}
          typeLetterBackgroundColor="#23262a"
          typeLetterPaddingTop={2}
          typeLetterMarginLeft={5}
          aFontSize={26}
          aColor="#fff"
        />
        <TypeIcon
          iconShiftOn={require("../assets/icon--delete.png")}
          typeIconPosition="unset"
          typeIconBorderRadius={46}
          typeIconBackgroundColor="#4f6375"
          typeIconFlex={1}
          typeIconMarginLeft={5}
          iconShiftOnPosition="unset"
        />
      </View>
      <View style={[styles.view1, styles.view1SpaceBlock]}>
        <TypeLetter
          a=","
          typeLetterPosition="unset"
          typeLetterBorderRadius={46}
          typeLetterBackgroundColor="#23262a"
          typeLetterPaddingTop={2}
          typeLetterMarginLeft="unset"
          aFontSize={26}
          aColor="#fff"
        />
        <TypeLetter
          a="0"
          typeLetterPosition="unset"
          typeLetterBorderRadius={46}
          typeLetterBackgroundColor="#23262a"
          typeLetterPaddingTop={2}
          typeLetterMarginLeft={5}
          aFontSize={26}
          aColor="#fff"
        />
        <TypeLetter
          a="."
          typeLetterPosition="unset"
          typeLetterBorderRadius={46}
          typeLetterBackgroundColor="#23262a"
          typeLetterPaddingTop={2}
          typeLetterMarginLeft={5}
          aFontSize={26}
          aColor="#fff"
        />
        <TypeTab
          iconKeyboardTab={require("../assets/icon--keyboard-tab.png")}
          typeTabPosition="unset"
          typeTabBorderRadius={46}
          typeTabBackgroundColor="#588ab9"
          typeTabMarginLeft={5}
        />
      </View>
      {showNavigation && (
        <View style={styles.navigation}>
          <View style={styles.dismissKeyboard}>
            <Image
              style={styles.iconArrowDown}
              contentFit="cover"
              source={require("../assets/icon--arrow-down.png")}
            />
          </View>
          <View style={[styles.navigationBar, styles.view1SpaceBlock]}>
            <View style={styles.homeIndicator} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  view1SpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
  },
  view: {
    alignItems: "center",
  },
  view1: {
    paddingVertical: Padding.p_11xs,
    marginTop: 4,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  iconArrowDown: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  dismissKeyboard: {
    height: 9,
    alignItems: "flex-end",
    paddingLeft: Padding.p_21xl,
    width: 348,
    flexDirection: "row",
  },
  homeIndicator: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.neutralSecondary,
    width: 72,
    height: 2,
  },
  navigationBar: {
    height: 16,
    justifyContent: "space-between",
    paddingVertical: Padding.p_6xs,
    width: 348,
    backgroundColor: Color.defaultAccentDarkAccent4,
  },
  navigation: {
    paddingTop: Padding.p_xl,
    marginTop: 4,
  },
  typenumbersThemedark: {
    width: 360,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_7xs,
    paddingTop: Padding.p_4xs,
    alignItems: "center",
    backgroundColor: Color.defaultAccentDarkAccent4,
  },
});

export default TypeNumbersThemeDark;
