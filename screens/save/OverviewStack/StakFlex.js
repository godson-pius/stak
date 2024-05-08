import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons, AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

const StakFlex = ({navigation}) => {
  const [hideBalance, setHideBalance] = useState(false);

  const toggleBalanceVisibility = () => {
    setHideBalance(!hideBalance);
  };
  
  const transactions = [
    { amount: 100, status: 'Credit', date: '2022-11-05', details: 'Naira to dollars' },
    { amount: 200, status: 'Debit', date: '2022-11-12', details: 'From Stak bank to Stak lock' },
    { amount: 50, status: 'Credit', date: '2022-12-01', details: 'To GTB bank' },
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
      {/* Back Button */}
      <TouchableOpacity style={styles.notificationIconHolder} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={30} />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Target Icon */}
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../../../assets/holder9.png")}
        />
        <Text style={styles.title}>Stak Flex</Text>

        {/* Lorem Ipsum Text */}
        <Text style={styles.loremText}>
            Keep funds for whenever you need it. Make transfers and withdraw at any time
        </Text>

        <View style={styles.subHeaderHolder}>
            <Text style={styles.subHeader}>Total flex</Text>
            
            <TouchableOpacity  onPress={toggleBalanceVisibility}>
            <Ionicons name={hideBalance ? 'eye-off' : 'eye'} size={20} color="black" />
            </TouchableOpacity>
        </View>
        {/* Eye icon to hide or review money */}
        <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>
            {hideBalance ? '******' : '₦ 10,000'}
            </Text>
        </View>

        {/* Top-up and Withdraw Options */}
        <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.optionTopUp} onPress={() => {navigation.navigate('AddMoney', { funding: "stakflex" })}}>
              <Text>Top-up Stack</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionWithdraw} onPress={() => {navigation.navigate('Withdraw')}}>
              <Text>Withdraw</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.recentTransactions}>Recent transactions</Text>

        <View style={styles.transactionContainer}>
          {Object.entries(groupedTransactions).map(([monthYear, transactions]) => (
            <View key={monthYear}>
              {/* Subheader with month and year */}
              <Text style={styles.tSubheader}>{monthYear}</Text>
              {/* Indicator and details for each transaction */}
              {transactions.map((transaction, index) => (
                <TouchableOpacity key={index} style={styles.transactionRow}>
                  <View style={styles.indicatorHolder}>
                    {transaction.status === 'Debit' ?
                    <View>
                        <Ionicons name={'exit-outline'} size={20} color="red" />
                    </View>
                    :
                    <View>
                        <Ionicons name={'enter-outline'} size={20} color="black" />
                    </View>
                    }
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

        
        {/* Create Stak Target Button */}
        <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonText}>See all transactions</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 40,
    },
    scrollContainer: {
        flex: 1,
      },
    title: {
      fontSize: 20,
      fontWeight: '500',
      marginBottom: 10,
    },
    notificationIconHolder: {
      marginBottom: 20,
    },
    targetIcon: {
      backgroundColor: '#567339',
      padding: 10,
      width: 50,
      borderRadius: 10,
      marginBottom: 10,
    },
    subHeaderHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      subHeader: {
        fontSize: 15,
        fontWeight: '400',
        marginRight: 10,
      },
      loremText: {
        fontSize: 14,
        marginBottom: 20,
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
      optionInfo: {
        fontSize: 18,
      },
    image: {
      width: 160,
      height: 200,
      marginBottom: 20,
      borderRadius: 10,
      alignSelf: 'center'
    },
    imageInfo: {
      marginBottom: 20,
      alignSelf: 'center'
    },
    imageTitle: {
      fontSize: 18,
      color: 'gray',
      fontWeight: '500',
      marginBottom: 5,
      alignSelf: 'center'
    },
    imageSubtitle: {
      fontSize: 16,
      color: 'gray',
      alignSelf: 'center'
    },
    createButton: {
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ACF279',
      alignItems: 'center',
    },
    createButtonText: {
      fontSize: 18,
      fontWeight: '500',
    },
    transactionContainer: {
        width: '100%',
        marginBottom: 10,
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
        width: '8%',
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
        width: '32%',
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
      recentTransactions: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 5,
      },
      iconLayout: {
        height: 50,
        width: 50,
        marginBottom: 10,
      },
});

export default StakFlex
