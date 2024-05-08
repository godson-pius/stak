// SaveScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//  Custom top tab
import CustomTabBar from '../../components/CustomTabBar';

//  Tabs
import OverviewStack from './OverviewStack/OverviewStack';
import CardStack from './CardStack/CardStack';
import OverviewScreen from './OverviewStack/OverviewScreen';
const SaveScreen = ({navigation}) => {
  const [selectedView, setSelectedView] = useState('Overview');

  const switchView = view => {
    setSelectedView(view);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.saveTextHolder}>
            <Text style={styles.headerText}>Save</Text>
          </View>
          <View style={styles.notificationIconHolder}>
            <MaterialCommunityIcons name="bell-outline" size={25} />
          </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonHandler}>
          <TouchableOpacity
            style={[styles.button, selectedView === 'Overview' && styles.selectedButton]}
            onPress={() => switchView('Overview')}
          >
            <Text style={[styles.buttonText, selectedView === 'Cards' && styles.notSelectedButtonText]}>Overview</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttonHandler}>
          <TouchableOpacity
            style={[styles.button, selectedView === 'Cards' && styles.selectedButton]}
            onPress={() => switchView('Cards')}
          >
            <Text style={[styles.buttonText, selectedView === 'Overview' && styles.notSelectedButtonText]}>Cards</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer}>
        {selectedView === 'Overview' && 
          <OverviewScreen navigation={navigation}/>}
        {selectedView === 'Cards' && 
          <CardStack/>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: '12%',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    marginBottom: 10,
  },
  saveTextHolder: {
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
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '6%',
  },
  buttonHandler: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    borderRadius: 5,
  },
  button: {
    borderRadius: 5,
  },
  selectedButton: {
    borderBottomWidth: 1,

  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  notSelectedButtonText: {
    color: 'lightgray',
  },
  mainHeader: {
    padding: 15,
    alignItems: 'center',
  },
  mainHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 10,
  },
  subHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  balanceText: {
    marginLeft: 10,
    fontSize: 18,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  option: {
    flex: 1,
    marginRight: 5,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    alignItems: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  boxOption: {
    flex: 1,
    marginRight: 5,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    alignItems: 'center',
  },
  joinButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  joinButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  balanceText: {
    marginLeft: 10,
    fontSize: 18,
  },
  contentContainer: {
    flex: 1,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
});

export default SaveScreen;
