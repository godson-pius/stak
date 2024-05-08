import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../components/AppProvider';

const WalletScreen = ({navigation}) => {
  const [selectedCurrency, setSelectedCurrency] = useState('UK');
  const [nairaBalance, setNairaBalance] = useState('1,000,000');
  const [poundsBalance, setPoundsBalance] = useState('2,000');
  const [euroBalance, setEuroBalance] = useState('2,000');
  const [totalBalance, setTotalBalance] = useState('0')
  const [hideBalance, setHideBalance] = useState(false);
  const authContext = useAuth();
  const user = authContext.user ? authContext.user : 'no user';

  const toggleBalanceVisibility = () => {
    setHideBalance(!hideBalance);
  };
  
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const handleBalance = async () => {
    const data = { currency: 'ngn', token: user?.data?.token }
    const res = await authContext.getUserBalance(data)
    
    if (res?.data?.isSuccessFul) {
      setNairaBalance(res.data.data.nairaBal)
      setPoundsBalance(res.data.data.poundsBal)
      setEuroBalance(res.data.data.euroBal)
      setTotalBalance(res.data.data.totalWallet)
    } else {
      Alert.alert("Could not fetch balance. Please refresh")
    }
  }

  const currencyData = [
    {
      label: 'UK - United Kingdom',
      value: 'UK',
      flag: require('../../images/UKFlag.png'),
    },
    {
      label: 'NG - Nigeria',
      value: 'NG',
      flag: require('../../images/NigeriaFlag.png'),
    },
    // Add more currencies and their flag images as needed
  ];
  
//<Image source={require('../../images/UserProfile.png')}/>

useLayoutEffect(() => {
  handleBalance()
}, [])

  return (
    <View style={styles.container}>
      <StatusBar translucent />
      <View style={styles.header}>
        <View style={styles.walletTextHolder}>
          <Text style={styles.headerText}>Wallet</Text>
        </View>
        <View style={styles.notificationIconHolder}>
          <MaterialCommunityIcons name="bell-outline" size={25} />
        </View>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.currencyPicker}>
          {selectedCurrency && (
            <View style={styles.flagContainer}>
              <Image source={currencyData.find((c) => c.value === selectedCurrency)?.flag}  style={styles.flagImage}/>
            </View>
          )}
          <Picker
            style={styles.picker}
            selectedValue={selectedCurrency}
            onValueChange={handleCurrencyChange}
          >
            {currencyData.map((currency) => (
              <Picker.Item
                key={currency.value}
                label={currency.label}
                value={currency.value}
                // You can customize the item's appearance here
              />
            ))}
          </Picker>
        </View>
        
        <Text style={styles.text}>Selected balance would reflect on your dashboard</Text>
        <View style={styles.balanceInfo}>
          <View style={styles.subHeaderHolder}>
            <Text style={styles.totalText}>Total stak</Text>
            
            <TouchableOpacity  onPress={toggleBalanceVisibility} style={{marginLeft: 5}}>
              <Ionicons name={hideBalance ? 'eye-off' : 'eye'} size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          {/* Eye icon to hide or review money */}
          <View style={styles.balanceContainer}>
            {selectedCurrency == 'UK'?
            <Text style={styles.balanceText}>
              {hideBalance ? '******' : `£ ${poundsBalance}`}
            </Text>
            :
            <Text style={styles.balanceText}>
              {hideBalance ? '******' : `₦ ${nairaBalance}`}
            </Text>
            }

          </View>
        </View>

        <View style={styles.prompt1Holder}>
          <TouchableOpacity  onPress={() => navigation.navigate('Send')} style={styles.prompt1}>
            <View style={styles.prompt1IconBG}>
              <MaterialCommunityIcons name={'send-circle-outline'} size={25} color="black" />
            </View>
            <View style={{height:'35%', justifyContent: 'flex-end',}}>
              <Text>Send</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => navigation.navigate('RequestStack')} style={styles.prompt1}>
            <View style={styles.prompt1IconBG}>
              <Ionicons name={'enter-outline'} size={25} color="black" />
            </View>
            <View style={{height:'35%', justifyContent: 'flex-end',}}>
              <Text>Request</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => navigation.navigate('WithdrawStack')} style={styles.prompt1}>
            <View style={styles.prompt1IconBG}>
              <MaterialCommunityIcons name={'bank-outline'} size={25} color="black" />
            </View>
            <View style={{height:'35%', justifyContent: 'flex-end',}}>
              <Text>Withdraw</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.prompt2Holder}>
          <TouchableOpacity  onPress={() => navigation.navigate('Invest')} style={styles.prompt2}>
              <View style={styles.prompt2TextHolder}>
                <Text style={styles.prompt2Text}>Investments</Text>
              </View>
              <View style={styles.prompt2ValueHolder}>
              {selectedCurrency == 'UK'?
                <Text style={styles.prompt2Text}>£ 1,000</Text>
                :
                <Text style={styles.prompt2Text}>₦ 50,000</Text>
              }
              </View>
          </TouchableOpacity>
          
          <TouchableOpacity  onPress={() => navigation.navigate('Save')} style={styles.prompt2}>
              <View style={styles.prompt2TextHolder}>
                <Text style={styles.prompt2Text}>Savings</Text>
              </View>
              <View style={styles.prompt2ValueHolder}>
              {selectedCurrency == 'UK'?
                <Text style={styles.prompt2Text}>£ 864</Text>
                :
                <Text style={styles.prompt2Text}>₦ 30,000</Text>
              }
              </View>
          </TouchableOpacity>
          
          <TouchableOpacity  onPress={() => navigation.navigate('StakBankScreen')} style={styles.prompt2}>
              <View style={styles.prompt2TextHolder}>
                <Text style={styles.prompt2Text}>Stak bank</Text>
              </View>
              <View style={styles.prompt2ValueHolder}>
              {selectedCurrency == 'UK'?
                <Text style={styles.prompt2Text}>£ 639</Text>
                :
                <Text style={styles.prompt2Text}>₦ 20,000</Text>
              }
              </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '12%',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    marginBottom: 10,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingBottom: 100, // Add paddingBottom to allow space for the last view
  },
  walletTextHolder: {
    width: '50%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  notificationIconHolder: {
    width: '50%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
  },
  currencyPicker: {
    flexDirection: 'row',
    marginVertical: 20,
    height: '8%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
  },
  flagContainer: {
    // height: '20%',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    // resizeMode: 'contain',
  },
  picker: {
    width: '80%',
    height: '100%',
  },
  text: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
  subHeaderHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  balanceInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    height: '15%',
    borderRadius: 10,
    marginVertical: '3%',
    backgroundColor: '#142601',
  },
  totalText: {
    fontSize: 13,
    fontWeight: '300',
    color: '#fff',
  },
  balanceText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  prompt1Holder: {
    marginVertical: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '65%',
    height: '10%',
  },
  prompt1IconBG: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: '65%',
    borderRadius: 10,
    backgroundColor: '#FAFAF2',
  },
  prompt1: {
    alignItems: 'center',
    width: '26%',
    height: '100%',
  },
  prompt2Holder: {
    marginVertical: '6%',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: '35%',
  },
  
  prompt2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '20%',
    borderBottomWidth: 1,
    borderRadius: 10,
  },
  prompt2TextHolder: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: '5%',
    width: '50%',
    height: '100%',
  },
  prompt2ValueHolder: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: '5%',
    width: '50%',
    height: '100%',
  },
  prompt2Text: {
    fontSize: 15,
    fontWeight: '400',
  },
});

export default WalletScreen
