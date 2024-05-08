import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons, MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const StakBankScreen = ({navigation}) => {
    const [hideBalance, setHideBalance] = useState(false);

  const toggleBalanceVisibility = () => {
    setHideBalance(!hideBalance);
  };

  const transactions = [
    { amount: 100, status: 'swap', date: '2022-11-05', details: 'Naira to dollars' },
    { amount: 200, status: 'transfer', date: '2022-11-12', details: 'From Stak bank to Stak lock' },
    { amount: 50, status: 'withdraw', date: '2022-12-01', details: 'To GTB bank' },
    // { amount: 1000, status: 'transfer', date: '2022-12-02', details: 'To GTB bank' },
    // Add more transactions as needed
  ];

  const filterTransactionsByStatus = (status) => transactions.filter((transaction) => transaction.status === status);
  
  // Helper function to sort transactions by date
  const sortTransactionsByDate = (a, b) => new Date(b.date) - new Date(a.date);

  // Helper function to group transactions by month
  const groupTransactionsByMonth = () => {
    const groupedTransactions = {};
    transactions.sort(sortTransactionsByDate).forEach((transaction) => {
      const monthYear = new Date(transaction.date).toLocaleString('default', { month: 'long', year: 'numeric' });
      if (!groupedTransactions[monthYear]) {
        groupedTransactions[monthYear] = [];
      }
      groupedTransactions[monthYear].push(transaction);
    });
    return groupedTransactions;
  };

  const groupedTransactions = groupTransactionsByMonth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.headerTextHolder}>
            <Text style={styles.headerText}>Stak bank</Text>
          </View>
          <TouchableOpacity style={styles.notificationIconHolder} onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={30} />
          </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.subHeaderHolder}>
          <Text style={styles.subHeader}>Total Savings</Text>
          
          <TouchableOpacity  onPress={toggleBalanceVisibility}>
            <Ionicons name={hideBalance ? 'eye-off' : 'eye'} size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>
            {hideBalance ? '******' : '₦10,000'}
          </Text>
        </View>

        <View style={styles.boxContainer}>
          <TouchableOpacity style={styles.boxOption} onPress={() => {navigation.navigate('SwapMain')}}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../../assets/holder1.png")}
            />
            <Text style={styles.option}>Swap</Text>
            <View style={{ padding: 5, height: 60}}>
              <Text style={styles.optionInfo}>Swap from one currency to another in your stak bank</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxOption2} onPress={() => navigation.navigate('TransferScreen')}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../../assets/holder2.png")}
            />
            <Text style={styles.option}>Transfer</Text>
            <View style={{ padding: 5, height: 60}}>
              <Text style={styles.optionInfo}>Send stack funds either to your savings or investment plans</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.boxContainer}>
          <TouchableOpacity style={styles.boxOption3} onPress={() => navigation.navigate('Withdraw')}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../../assets/holder3.png")}
            />
            <Text style={styles.option}>Withdraw</Text>
            <View style={{ padding: 5, height: 60}}>
              <Text style={styles.optionInfo}>Withdraw from your stack bank into your local account</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxOption4}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../../assets/holder4.png")}
            />
            <Text style={styles.option}>Save-athon</Text>
            <View style={{ padding: 5, height: 60}}>
              <Text style={styles.optionInfo}>Join other stack users on a journey to accumulate money</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.transactionContainer}>
          {Object.entries(groupedTransactions).map(([monthYear, transactions]) => (
            <View key={monthYear}>
              {/* Subheader with month and year */}
              <Text style={styles.tSubheader}>{monthYear}</Text>
              {/* Indicator and details for each transaction */}
              {transactions.map((transaction, index) => (
                <TouchableOpacity key={index} style={styles.transactionRow}>
                  <View style={styles.indicatorHolder}>
                    <View style={transaction.status === 'withdraw' ? styles.indicatorRed : styles.indicatorGreen}></View>
                  </View>
                  <View style={styles.transactionTextHolder}>
                    <Text style={styles.transactionText}>{`${transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}`}</Text>
                    <Text style={styles.transactionDetailsText}>{`${transaction.details}`}</Text>
                  </View>
                  <View style={styles.transactorAmountHolder}>
                    <Text style={styles.transactorAmountText}>{`₦${transaction.amount}`}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    scrollContainer: {
      flexGrow: 1,
      backgroundColor: '#fff',
      paddingBottom: 100,
    },
    header: {
      flexDirection: 'row',
      paddingHorizontal: '5%',
      paddingTop: 35,
      marginBottom: 10,
      alignItems: 'center',
    },
    headerTextHolder: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },  
    notificationIconHolder: {
      position: 'absolute',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      paddingTop: 35,
      marginLeft: 20,
    },
    headerText: {
      fontSize: 24,
      fontWeight: '600',
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
      height: 30,
    },
    option: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    optionInfo: {
      fontSize: 14,
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
    boxContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      marginHorizontal: '5%',
      width: '90%',
      height: 160,
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
    joinButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    transactionContainer: {
      width: '100%',
      paddingHorizontal: '5%',
      marginBottom: 20,
    },
    tSubheader: {
      fontSize: 17,
      fontWeight: '400',
      marginTop: 15,
      marginBottom: 5,
    },
    transactionRow: {
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      padding: 5,
      marginBottom: 10,
    },
    indicatorHolder: {
      width: '5%',
      height: '100%',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    indicatorGreen: {
      width: 10,
      height: 10,
      backgroundColor: 'green',
      borderRadius: 5,
      marginTop: 10,
    },
    indicatorRed: {
      width: 10,
      height: 10,
      backgroundColor: 'red',
      borderRadius: 5,
      marginTop: 10,
    },
    transactionTextHolder: {
      width: '60%',
      height: '100%',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    transactionText: {
      fontSize: 16,
    },
    transactorAmountHolder: {
      width: '35%',
      height: '100%',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
    },
    transactorAmountText: {
      fontSize: 15,
      fontWeight: 'bold',
      marginRight: 10,
    },
    transactionDetailsText: {
      fontSize: 14,
      fontWeight: '400',
      marginRight: 10,
    },
    iconLayout: {
      height: 45,
      width: 45,
    },
});


export default StakBankScreen
