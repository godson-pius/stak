import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AutosaveScreen = ({ navigation }) => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [selectedFundingSource, setSelectedFundingSource] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState('');

  const amounts = ['$100', '$200', '$500', '$1000', '$1500', '$2000', '$5000', '$10000', '$20000'];
  const periods = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
  const fundingSources = ['Stak Bank', 'Debit Card'];
  const startDates = ['Today', 'Tomorrow'];

  const renderPill = (item, category) => (
    <TouchableOpacity
      style={[
        styles.pill,
        category === 'amount' && selectedAmount === item && styles.selectedPill,
        category === 'period' && selectedPeriod === item && styles.selectedPill,
        category === 'fundingSource' && selectedFundingSource === item && styles.selectedPill,
        category === 'startDate' && selectedStartDate === item && styles.selectedPill,
      ]}
      onPress={() => handleOptionPress(item, category)}
    >
      <Text style={styles.pillText}>{item}</Text>
    </TouchableOpacity>
  );

  const handleOptionPress = (item, category) => {
    switch (category) {
      case 'amount':
        setSelectedAmount(item);
        break;
      case 'period':
        setSelectedPeriod(item);
        break;
      case 'fundingSource':
        setSelectedFundingSource(item);
        break;
      case 'startDate':
        setSelectedStartDate(item);
        break;
      default:
        break;
    }
  };

  const isButtonClickable = selectedAmount !== '' && selectedPeriod !== '' && selectedFundingSource !== '' && selectedStartDate !== '';

  const renderHorizontalList = (data, category) => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        renderItem={({ item }) => renderPill(item, category)}
      />
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <View style={styles.notificationIconHolder}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../../../assets/holder11.png")}
          />
          {/* <View style={{ backgroundColor: '#260205', padding: 5, borderRadius: 5 }}>
            <MaterialIcons name="loop" size={35} style={{ color: '#fff' }} />
          </View> */}
        </View>
        <View style={styles.saveTextHolder}>
          <Text style={styles.headerText}>Auto-Save</Text>
        </View>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.title}>
          Select a plan to start saving today. You can always adjust the plan to suit you.
        </Text>

        <Text style={styles.categoryTitle}>Amount</Text>
        {renderHorizontalList(amounts, 'amount')}

        <Text style={styles.categoryTitle}>Period</Text>
        {renderHorizontalList(periods, 'period')}

        <Text style={styles.categoryTitle}>Fund your auto save from?</Text>
        {renderHorizontalList(fundingSources, 'fundingSource')}

        <Text style={styles.categoryTitle}>When do you want to start this plan?</Text>
        {renderHorizontalList(startDates, 'startDate')}

        <TouchableOpacity
          style={[styles.beginPlanButton, { backgroundColor: isButtonClickable ? '#ACF279' : 'lightgray' }]}
          disabled={!isButtonClickable}
        >
          <Text style={[styles.beginPlanButtonText, { color: isButtonClickable ? '#ACF279' : 'gray' }]}>Create auto-save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.customizePlanLink} onPress={() => navigation.navigate('CustomizePlan')}>
          <Text style={styles.customizePlanLinkText}>Customize your own plan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: '20%',
    paddingHorizontal: '5%',
    marginBottom: 10,
  },
  saveTextHolder: {
    width: '50%',
    height: '30%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  notificationIconHolder: {
    width: '50%',
    height: '70%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
  },
  mainContent: {
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 15,
    marginBottom: 16,
    color: 'grey',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
    marginBottom: 8,
  },
  pillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  pill: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderColor: 'gray',
    backgroundColor: 'lightgray',
    marginRight: 8,
    marginBottom: 22,
  },
  pillText: {
    fontSize: 14,
  },
  selectedPill: {
    backgroundColor: '#ACF279',
    borderColor: 'white',
  },
  beginPlanButton: {
    backgroundColor: '#ACF279',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  beginPlanButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  customizePlanLink: {
    marginTop: 8,
    alignSelf: 'center',
  },
  customizePlanLinkText: {
    fontSize: 14,
    borderBottomWidth: 1,
  },
  iconLayout: {
    height: 45,
    width: 45,
    marginBottom: 10,
  },
});

export default AutosaveScreen;
