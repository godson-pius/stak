import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

const WithdrawScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.notificationIconHolder} onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={30} />
      </TouchableOpacity>
      
      <Text style={styles.title}>Withdraw</Text>

      {/* Lorem Ipsum Text */}
      <Text style={styles.loremText}>
        You haven't added any bank accounts yet. Link your local account using either your BVN or your bank account to enable withdrawal!
      </Text>

      <View style={styles.addCardContainer}>
        <TouchableOpacity style={styles.addCardButton} onPress={() => navigation.navigate('ViaBVN')}>
          <Text style={styles.addCardText}>Via BVN</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.addCardContainer}>
        <TouchableOpacity style={styles.addCardButton} onPress={() => navigation.navigate('ViaBank')}>
          <Text style={styles.addCardText}>Via Bank</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    notificationIconHolder: {
      marginTop: 20,
      marginBottom: 20,
    },
    targetIcon: {
      backgroundColor: '#567339',
      padding: 10,
      width: 50,
      borderRadius: 10,
      marginBottom: 10,
    },
    loremText: {
      fontSize: 16,
      marginBottom: 20,
    },
    addCardContainer: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        marginBottom: 20,
    },
    addCardButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addCardText: {
        marginLeft: 8,
        flex: 1,
        fontSize: 16,
    },
});

export default WithdrawScreen
