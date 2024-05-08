import React, { useMemo } from "react";
// import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType, Image } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BottomNav = ({
  home,
  invest,
  ionbagAddOutline,
  save,
  others,
  bottomNavPosition,
  homeIconOverflow,
  homeColor,
  investIconOverflow,
  ionbagAddOutlineIconOverflow,
  saveIconOverflow,
  walletColor,
  othersIconOverflow,
  othersColor,
}) => {
  const bottomNavStyle = useMemo(() => {
    return {
      ...getStyleValue("position", bottomNavPosition),
    };
  }, [bottomNavPosition]);

  const homeIconStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", homeIconOverflow),
    };
  }, [homeIconOverflow]);

  const homeStyle = useMemo(() => {
    return {
      ...getStyleValue("color", homeColor),
    };
  }, [homeColor]);

  const investIconStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", investIconOverflow),
    };
  }, [investIconOverflow]);

  const ionbagAddOutlineIconStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", ionbagAddOutlineIconOverflow),
    };
  }, [ionbagAddOutlineIconOverflow]);

  const saveIconStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", saveIconOverflow),
    };
  }, [saveIconOverflow]);

  const walletStyle = useMemo(() => {
    return {
      ...getStyleValue("color", walletColor),
    };
  }, [walletColor]);

  const othersIconStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", othersIconOverflow),
    };
  }, [othersIconOverflow]);

  const othersStyle = useMemo(() => {
    return {
      ...getStyleValue("color", othersColor),
    };
  }, [othersColor]);

  return (
    <View style={[styles.bottomNav, bottomNavStyle]}>
      <View style={styles.home}>
        <Image
          style={[styles.homeIcon, homeIconStyle]}
          contentFit="cover"
          source={home}
        />
        <Text style={[styles.home1, homeStyle]}>Home</Text>
      </View>
      <View style={styles.invest}>
        <Image
          style={[styles.homeIcon, investIconStyle]}
          contentFit="cover"
          source={invest}
        />
        <Text style={[styles.invest1, styles.saveTypo]}>Invest</Text>
      </View>
      <View style={styles.invest}>
        <Image
          style={[styles.homeIcon, ionbagAddOutlineIconStyle]}
          contentFit="cover"
          source={ionbagAddOutline}
        />
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      </View>
      <View style={styles.invest}>
        <Image
          style={[styles.homeIcon, saveIconStyle]}
          contentFit="cover"
          source={save}
        />
        <Text style={[styles.wallet, styles.saveTypo, walletStyle]}>
          Wallet
        </Text>
      </View>
      <View style={styles.invest}>
        <Image
          style={[styles.homeIcon, othersIconStyle]}
          contentFit="cover"
          source={others}
        />
        <Text style={[styles.others1, styles.saveTypo, othersStyle]}>
          Others
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  saveTypo: {
    color: Color.inactiveMenu,
    marginTop: 2,
    textAlign: "left",
    fontFamily: FontFamily.tags,
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
  },
  homeIcon: {
    width: 24,
    height: 24,
  },
  home1: {
    color: Color.primaryColorFill,
    marginTop: 2,
    textAlign: "left",
    fontFamily: FontFamily.tags,
    lineHeight: 20,
    fontSize: FontSize.miniCopy14_size,
    width: 40,
  },
  home: {
    alignItems: "center",
  },
  invest1: {
    width: 40,
    color: Color.inactiveMenu,
  },
  invest: {
    marginLeft: 29,
    alignItems: "center",
  },
  save: {
    width: 35,
  },
  wallet: {
    width: 41,
  },
  others1: {
    width: 46,
  },
  bottomNav: {
    flexDirection: "row",
  },
});

export default BottomNav;
