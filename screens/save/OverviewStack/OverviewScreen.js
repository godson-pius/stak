import React, { useLayoutEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons, Feather, Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useAuth } from '../../../components/AppProvider';
import { formatNum } from '../../../utils';

const OverviewScreen = ({ navigation }) => {
  const [hideBalance, setHideBalance] = useState(false);
  const [balance, setBalance] = useState()
  const stakflex = (balance?.gbpSavings.stakFlex + balance?.nairaSavings.stakFlex + balance?.usdSavings.stakFlex)
  const staklock = (balance?.gbpSavings.stackLock + balance?.nairaSavings.stackLock + balance?.usdSavings.stackLock)
  const staktarget = (balance?.gbpSavings.targetSave + balance?.nairaSavings.targetSave + balance?.usdSavings.targetSave)
  const autosave = (balance?.gbpSavings.autoSave + balance?.nairaSavings.autoSave + balance?.usdSavings.autoSave)

  const authContext = useAuth();
  const user = authContext.user ? authContext.user : 'no user';

  const toggleBalanceVisibility = () => {
    setHideBalance(!hideBalance);
  };

  const handleBalance = async () => {
    const token = user?.data?.token
    const res = await authContext.getUserSavingsBalance(token)
    
    if (res?.data?.isSuccessFul) {
      setBalance(res.data.data)
    } else {
      Alert.alert("Could not fetch savings balance.")
    }
  }

  useLayoutEffect(() => {
    handleBalance()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.subHeaderHolder}>
        <Text style={styles.subHeader}>Total Savings</Text>
        
        <TouchableOpacity  onPress={toggleBalanceVisibility}>
          <Ionicons name={hideBalance ? 'eye-off' : 'eye'} size={20} color="black" />
        </TouchableOpacity>
      </View>
      {/* Eye icon to hide or review money */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>
          {hideBalance ? '******' : formatNum(balance?.totalSavings)}
        </Text>
      </View>

      {/* Top-up and Withdraw Options */}
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.optionTopUp} onPress={() => {navigation.navigate('AddMoney')}}>
          <Text>Top-up Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionWithdraw} onPress={() => {navigation.navigate('Withdraw')}}>
          <Text>Withdraw</Text>
        </TouchableOpacity>
      </View>

      {/* Boxed Options */}
      <View style={styles.boxContainer}>
          <TouchableOpacity style={styles.boxOption} onPress={() => navigation.navigate('StakFlex')}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../../../assets/holder9.png")}
            />
            <Text style={styles.option}>Stak Flex</Text>
            <Text style={styles.optionInfo}>{formatNum(stakflex)}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxOption2} onPress={() => navigation.navigate('StakLock')}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../../../assets/holder10.png")}
            />
            <Text style={styles.option}>Stak Lock</Text>
            <Text style={styles.optionInfo}>{ formatNum(staklock) }</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxContainer}>
          <TouchableOpacity style={styles.boxOption3} onPress={() => navigation.navigate('StakTarget')}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../../../assets/holder12.png")}
            />
            <Text style={styles.option}>Stak target</Text>
            <Text style={styles.optionInfo}>{ formatNum(staktarget) }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxOption4} onPress={() => navigation.navigate('AutosaveScreen')}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../../../assets/holder11.png")}
            />
            <Text style={styles.option}>Auto Save</Text>
            <Text style={styles.optionInfo}>{ formatNum(autosave) }</Text>
          </TouchableOpacity>
        </View>

      {/* Join a Save Option */}
      <TouchableOpacity style={styles.joinButton}>
        <Text style={styles.joinButtonText}>Join a Save Option Today</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    mainHeader: {
      backgroundColor: 'lightblue',
      padding: 15,
      alignItems: 'center',
    },
    tabs: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'lightgray',
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
    },
    tabText: {
      fontSize: 16,
      color: 'black',
    },
    tabTextFocused: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'blue',
    },
    subHeaderHolder: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
    },
    subHeader: {
      fontSize: 15,
      fontWeight: '400',
      marginRight: 10,
    },
    balanceContainer: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 10,
    },
    balanceText: {
      fontSize: 25,
      fontWeight: '700',
    },
    optionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '10%',
      marginBottom: 10,
      width: '100%',
      height: '6%',
    },
    optionWithdraw: {
      width: '45%',
      height: '100%',
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#ACF279',
      alignItems: 'center',
      justifyContent: 'center',
    },
    optionTopUp: {
      width: '45%',
      height: '100%',
      borderRadius: 5,
      backgroundColor: '#ACF279',
      alignItems: 'center',
      justifyContent: 'center',
    },
    option: {
      fontSize: 16,
    },
    optionInfo: {
      fontSize: 18,
    },
    boxContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      marginHorizontal: '5%',
      width: '90%',
      height: '20%',
    },
    boxOption: {
      width: '47%',
      marginRight: 5,
      paddingHorizontal: 10,
      paddingVertical: 15,
      backgroundColor: '#FFFBE1',
      borderRadius: 5,
      // alignItems: 'center',
      justifyContent: 'space-between',
    },
    boxOption2: {
      width: '47%',
      paddingHorizontal: 10,
      paddingVertical: 15,
      backgroundColor: '#ECF9F9',
      borderRadius: 5,
      // alignItems: 'center',
      justifyContent: 'space-between',
    },
    boxOption3: {
      width: '47%',
      marginRight: 5,
      paddingHorizontal: 10,
      paddingVertical: 15,
      backgroundColor: '#FFF7FC',
      borderRadius: 5,
      // alignItems: 'center',
      justifyContent: 'space-between',
    },
    boxOption4: {
      width: '47%',
      paddingHorizontal: 10,
      paddingVertical: 15,
      backgroundColor: '#ECFAE2',
      borderRadius: 5,
      // alignItems: 'center',
      justifyContent: 'space-between',
    },
    joinButton: {
      backgroundColor: '#ECFAE2',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: '5%',
      height: '15%',
    },
    joinButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    iconLayout: {
      height: 40,
      width: 40,
    },
  });

  
export default OverviewScreen
