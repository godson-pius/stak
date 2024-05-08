import React, { useState } from 'react';
import { View, Text, TouchableOpacity,  StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { MaterialIcons, Fontisto } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

const PreviewScreen = ({ route }) => {
  const { item } = route.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const toggleModal = (paymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
    setModalVisible(!isModalVisible);
  };

  const navigation = useNavigation();

  const handleContinue = () => {
    // Add logic to handle the continue action
    // You can navigate to the next screen or perform any other necessary action
    setModalVisible(!isModalVisible);
    navigation.navigate('ConfirmPinScreen', { item, selectedPaymentMethod });
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent />
      {/* Display information from the passed item */}
      <Text style={styles.heading}>{item.title}</Text>
      <View style={{flexDirection: 'row', width: '100%',justifyContent: 'space-between'}}>
        <View style={{width: '75%'}}>
            <Text style={styles.value}>Annual returns</Text>
        </View>
        <View style={{width: '25%'}}>
            <Text style={styles.value}>9.10%</Text>
        </View>
      </View>
      <View style={styles.divider}></View>
      <View style={{flexDirection: 'row', width: '100%',justifyContent: 'space-between'}}>
        <View style={{width: '75%'}}>
            <Text style={styles.value}>Units</Text>
        </View>
        <View style={{width: '25%'}}>
            <Text style={styles.value}>{item.units} units</Text>
        </View>
      </View>
      <View style={styles.divider}></View>
      <View style={{flexDirection: 'row', width: '100%',justifyContent: 'space-between'}}>
        <View style={{width: '75%'}}>
            <Text style={styles.value}>Monthly value</Text>
        </View>
        <View style={{width: '25%'}}>
            <Text style={styles.value}>{item.amount}</Text>
        </View>
      </View>
      <View style={styles.divider}></View>
      
      <Text>Other details: {item.details}</Text>

      {/* Choose Payment Method section */}
      <Text style={styles.sectionTitle}>Choose a payment method:</Text>
      <TouchableOpacity onPress={() => toggleModal('Stak Bank')} style={styles.paymentMethod}>
        <Text>Stak Bank</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleModal('Bank Transfer')} style={styles.paymentMethod}>
        <Text>Bank Transfer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleModal('Debit Card')} style={styles.paymentMethod}>
        <Text>Debit Card</Text>
      </TouchableOpacity>

      {/* Payment Method Modal */}
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.cancelButton}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
                <MaterialIcons name="cancel-presentation" size={30} style={styles.cancelButtonIcon}/>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', width: '100%',justifyContent: 'space-between'}}>
            <View style={{width: '75%'}}>
                <Text style={styles.value}>Amount</Text>
            </View>
            <View style={{width: '25%'}}>
                <Text style={styles.value}>{item.amount}</Text>
            </View>
          </View>
          <View style={styles.divider}></View>
          <View style={{flexDirection: 'row', width: '100%',justifyContent: 'space-between'}}>
            <View style={{width: '75%'}}>
                <Text style={styles.value}>Payment method</Text>
            </View>
            <View style={{width: '25%'}}>
                <Text style={styles.value}>{selectedPaymentMethod}</Text>
            </View>
          </View>
          {/* Continue and Cancel buttons */}
          <TouchableOpacity onPress={handleContinue} style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
  value: {
    marginTop: 5,
    fontSize: 17,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '500',
    marginVertical: 10,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  divider: {
    borderColor: '#E7F2DC',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  paymentMethod: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#555',
  },
  cancelButton: {
    alignItems: 'flex-end',
    width: "100%",
    margin: 10,
    borderRadius: 5,
  },
  cancelButtonIcon: {
    alignItems: 'flex-end',
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#ACF279",
    width: "100%",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PreviewScreen;
