import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, RefreshControl, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../components/AppProvider';
import { Color, FontFamily, FontSize, Border, Padding } from "../../GlobalStyles";

const HomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [hideBalance, setHideBalance] = useState(false);
  const [currentView, setCurrentView] = useState('TotalStack');
  const [balance, setBalance] = useState()

  const switchView = view => {
    setCurrentView(view);
  };

  const toggleBalanceVisibility = () => {
    setHideBalance(!hideBalance);
  };


  const authContext = useAuth();

  const user = authContext.user ? authContext.user : 'no user';

  const handleBalance = async () => {
    const data = { currency: 'ngn', token: user?.data?.token }
    const res = await authContext.getUserBalance(data)
    
    if (res?.data?.isSuccessFul) {
      setBalance(res?.data)
    } else {
      Alert.alert("Could not fetch balance. Please refresh")
    }
  }

  const handleOnRefresh = () => {
    handleBalance()
  }

  useLayoutEffect(() => {
    handleBalance()
  }, [])


  return (
    <View style={styles.container}>
      <StatusBar translucent />
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', }}>
          <View>
            <Text style={styles.greetingText}>Hello 👋</Text>
          </View>
          <View style={styles.userInfo}>
            <View style={styles.GPDInfo}>
              <Text>1GPD</Text>
              <MaterialCommunityIcons name="swap-horizontal" size={30} color='#142601' style={styles.coinIcon} />
              <Text>₦900</Text>
            </View>
            <MaterialCommunityIcons name="bell-outline" size={24} color="black" style={styles.notificationIcon} />
          </View>
        </View>
        <Text style={styles.nameText}>{authContext.user ? user.data.firstName : 'firstname'}</Text>
      </View>


      <ScrollView contentContainerStyle={styles.mainContent}
        refreshControl={<RefreshControl onRefresh={handleOnRefresh} />}
      >

        {/* Splashes */}
        {currentView === 'TotalStack' &&
          <View style={styles.balanceInfo}>
            <View style={styles.subHeaderHolder}>
              <Text style={styles.totalText}>Total stak</Text>

              <TouchableOpacity onPress={toggleBalanceVisibility} style={{ marginLeft: 5 }}>
                <Ionicons name={hideBalance ? 'eye-off' : 'eye'} size={20} color="white" />
              </TouchableOpacity>
            </View>
            {/* Eye icon to hide or review money */}
            <View style={styles.balanceContainer}>
              <Text style={styles.balanceText}>
                {hideBalance ? '******' : `${balance?.data?.totalWallet ? '...' :  balance?.data?.totalWallet}`}
              </Text>
            </View>
          </View>
        }
        {currentView === 'StakLock' &&
          <View style={styles.stakLockInfo}>
            <View style={styles.subHeaderHolder}>
              <Text style={styles.totalText}>Stak lock</Text>

              <TouchableOpacity onPress={toggleBalanceVisibility} style={{ marginLeft: 5 }}>
                <Ionicons name={hideBalance ? 'eye-off' : 'eye'} size={20} color="white" />
              </TouchableOpacity>
            </View>
            {/* Eye icon to hide or review money */}
            <View style={styles.balanceContainer}>
              <Text style={styles.balanceText}>
                {hideBalance ? '******' : '89'}
              </Text>
            </View>
          </View>
        }

        {currentView === 'StakTarget' &&
          <View style={styles.stakTargetInfo}>
            <View style={styles.subHeaderHolder}>
              <Text style={styles.totalText}>Stak Target</Text>

              <TouchableOpacity onPress={toggleBalanceVisibility} style={{ marginLeft: 5 }}>
                <Ionicons name={hideBalance ? 'eye-off' : 'eye'} size={20} color="white" />
              </TouchableOpacity>
            </View>
            {/* Eye icon to hide or review money */}
            <View style={styles.balanceContainer}>
              <Text style={styles.balanceText}>
                {hideBalance ? '******' : '1,000,000'}
              </Text>
            </View>
          </View>
        }

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttonCourasel, currentView === 'TotalStack' && styles.selectedButton]}
            onPress={() => switchView('TotalStack')} />
          <TouchableOpacity
            style={[styles.buttonCourasel, currentView === 'StakLock' && styles.selectedButton]}
            onPress={() => switchView('StakLock')} />
          <TouchableOpacity
            style={[styles.buttonCourasel, currentView === 'StakTarget' && styles.selectedButton]}
            onPress={() => switchView('StakTarget')} />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('AddMoney', { funding: "credit" }) }}>
          <Text style={styles.buttonText}>Add money</Text>
        </TouchableOpacity>

        <View style={styles.bannerInfo}>
          <Text style={styles.bannerText}>Banner</Text>
        </View>

        <TouchableOpacity style={styles.verifyButton}>
          <View style={styles.stars}>
            <Text>2 out of 5</Text>
            <Ionicons name='flash' size={15} color={'yellow'} />
          </View>
          <View style={styles.verifyEmail}>
            <View style={styles.verifyImageHolder}>
              <Image source={require('../../images/Verify.png')} style={styles.verifyImage} />
            </View>
            <View style={styles.verifyTextHolder}>
              <Text style={styles.VerifyText}>Become a 5-star stak user</Text>
              <Text style={styles.VerifyText2}>Verify email</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    width: '100%',
    paddingHorizontal: '5%',
    marginTop: 65,
    marginBottom: 10,
    // backgroundColor: 'blue'
  },
  greetingText: {
    fontSize: 20,
    fontWeight: "300",
    fontFamily: FontFamily.miniCopyMedium,
    color: Color.black,
    textAlign: "left",
  },
  nameText: {
    fontSize: 22,
    fontWeight: '400',
    alignSelf: 'flex-start'
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  GPDInfo: {
    width: 130,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E7F2DC',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 18,
    marginLeft: 10,
  },
  coinIcon: {
    marginLeft: 10,
  },
  notificationIcon: {
    marginLeft: 10,
  },
  mainContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingBottom: 100, // Add paddingBottom to allow space for the last view
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
    width: '90%',
    height: 130,
    borderRadius: 10,
    marginVertical: '3%',
    backgroundColor: '#142601',
  },
  stakLockInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 130,
    borderRadius: 10,
    marginVertical: '3%',
    backgroundColor: 'yellow',
  },
  stakTargetInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 130,
    borderRadius: 10,
    marginVertical: '3%',
    backgroundColor: 'pink',
  },
  totalText: {
    fontSize: 13,
    fontWeight: '300',
    color: '#fff',
  },
  balanceText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  button: {
    backgroundColor: "#ACF279",
    width: "100%",
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  bannerInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginVertical: '3%',
    backgroundColor: '#E7F2DC',
  },
  bannerText: {
    fontSize: 25,
    fontWeight: '500',
  },
  verifyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    marginVertical: '3%',
    backgroundColor: '#F2EBF0',
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '20%',
  },
  verifyEmail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '40%',
    marginVertical: '3%',
    backgroundColor: '#F2EBF0',
  },
  verifyImageHolder: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    height: '100%',
  },
  verifyImage: {
    width: 40,
    height: 40,
  },
  verifyTextHolder: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '80%',
    backgroundColor: '#F2EBF0',
  },
  VerifyText: {
    fontSize: 15,
    fontWeight: '500',
  },
  VerifyText2: {
    fontSize: 20,
    fontWeight: '700',
    color: '#142601',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 10,
    width: '13%',
  },
  buttonCourasel: {
    borderRadius: 5,
    width: 13,
    height: 5,
    backgroundColor: 'grey'
  },
  selectedButton: {
    backgroundColor: '#ACF279',
  },
});

export default HomeScreen;
