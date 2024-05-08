import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../../components/AppProvider';

const OthersScreen = ({navigation}) => {
  const [accountOpen, setAccountOpen] = useState(false);
  const [securityOpen, setSecurityOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const userInfo = {firstName: 'Rhoda', profilePicture: null}

  const toggleAccordion = (accordion) => {
    switch (accordion) {
      case 'account':
        setAccountOpen(!accountOpen);
        break;
      case 'security':
        setSecurityOpen(!securityOpen);
        break;
      case 'more':
        setMoreOpen(!moreOpen);
        break;
      default:
        break;
    }
  };

  
  const authContext = useAuth();

  const user = authContext.user? authContext.user : userInfo;
  const phoneNumber = user?.data?.phoneNumber

  const Logout = async () => {
    authContext.logout();
  }

  return (
    <View style={styles.container}>
      <ScrollView >
        <StatusBar translucent />
        <View style={styles.header}>
          {/* <Image source={require('../images/logoBackground.png')} style={styles.backgroundImage} />
          <Image source={require('../images/logo.png')} style={styles.logo} /> */}
          <View style={styles.HeaderTitleHolder}>
            <Text style={styles.title}>Others</Text>
            <MaterialCommunityIcons name="bell-outline" size={24} color="black" style={styles.notificationIcon} />
          </View>

          <View style={styles.userDetailsHolder}>
            <View style={styles.profileHolder}>
              <Text style={styles.defaultProfileText}>{authContext.user? user.data.firstName.charAt(0).toUpperCase(): 'F'}</Text>
            </View>
            <View>
              <Text style={styles.profileName}>{authContext.user? user.data.firstName: 'Firstname'} {authContext.user? user.data.lastName: 'Lastname'}</Text>
              <TouchableOpacity style={styles.editProfileHolder}>
                <Text style={styles.editProfile}>Edit profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.mainContent}>
          {/* Support */}
          <View style={styles.section}>
          <TouchableOpacity style={styles.option} onPress={() => toggleAccordion('account')}>
            <View style={styles.optionText}>
              <Text style={[styles.sectionTitle, accountOpen && styles.sectionTitleOpen]}>Account</Text>
              </View>
              <View style={styles.optionEndIcon}>
                <MaterialIcons name={accountOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={25} style={[accountOpen && styles.sectionTitleOpen]}/>
              </View>
          </TouchableOpacity>
          {accountOpen && (
              <>
            <TouchableOpacity style={styles.option} onPress={() => {navigation.navigate('Kyc')}}>
              <View style={styles.optionText}>
                <Text style={{fontSize: 16}}>KYC Verification</Text>
              </View>
              <View style={styles.optionEndIcon}>
                <MaterialIcons name="keyboard-arrow-right" size={25} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <View style={styles.optionText}>
                <Text style={{fontSize: 16}}>Bank & Card Settings</Text>
              </View>
              <View style={styles.optionEndIcon}>
                <MaterialIcons name="keyboard-arrow-right" size={25} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => {navigation.navigate('Referral')}}>
              <View style={styles.optionText}>
                <Text style={{fontSize: 16}}>Referral</Text>
              </View>
              <View style={styles.optionEndIcon}>
                <MaterialIcons name="keyboard-arrow-right" size={25} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <View style={styles.optionText}>
                <Text style={{fontSize: 16}}>Transaction</Text>
              </View>
              <View style={styles.optionEndIcon}>
                <MaterialIcons name="keyboard-arrow-right" size={25} />
              </View>
            </TouchableOpacity>
            </>
          )
          }
            <TouchableOpacity style={styles.option} onPress={() => toggleAccordion('security')}>
              <View style={styles.optionText}>
                <Text style={[styles.sectionTitle, securityOpen && styles.sectionTitleOpen]}>Security</Text>
              </View>
              <View style={styles.optionEndIcon}>
                <MaterialIcons name={securityOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={25} style={[securityOpen && styles.sectionTitleOpen]}/>
              </View>
            </TouchableOpacity>

            {securityOpen && (
              <>
              <TouchableOpacity style={styles.option}>
                <View style={styles.optionText}>
                  <Text style={{fontSize: 16}}>Changen Pin</Text>
                </View>
                <View style={styles.optionEndIcon}>
                  <MaterialIcons name="keyboard-arrow-right" size={25} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('ResetPasswordCode', { phoneNumber })}>
                <View style={styles.optionText}>
                  <Text style={{fontSize: 16}}>Reset Password</Text>
                </View>
                <View style={styles.optionEndIcon}>
                  <MaterialIcons name="keyboard-arrow-right" size={25} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={() => {navigation.navigate('SecurityQuestion')}}>
                <View style={styles.optionText}>
                  <Text style={{fontSize: 16}}>Security Question</Text>
                </View>
                <View style={styles.optionEndIcon}>
                  <MaterialIcons name="keyboard-arrow-right" size={25} />
                </View>
              </TouchableOpacity>
              </>
            )}
            <TouchableOpacity style={styles.option} onPress={() => toggleAccordion('more')}>
              <View style={styles.optionText}>
                <Text style={[styles.sectionTitle, moreOpen && styles.sectionTitleOpen]}>More</Text>
              </View>
              <View style={styles.optionEndIcon}>
                <MaterialIcons name={moreOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={25} style={[moreOpen && styles.sectionTitleOpen]} />
              </View>
            </TouchableOpacity>
            {moreOpen && (
              <>
                <TouchableOpacity style={styles.option}>
                <View style={styles.optionText}>
                  <Text style={{fontSize: 16}}>Terms & Conditions</Text>
                </View>
                <View style={styles.optionEndIcon}>
                  <MaterialIcons name="keyboard-arrow-right" size={25} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <View style={styles.optionText}>
                  <Text style={{fontSize: 16}}>Privacy Policy</Text>
                </View>
                <View style={styles.optionEndIcon}>
                  <MaterialIcons name="keyboard-arrow-right" size={25} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <View style={styles.optionText}>
                  <Text style={{fontSize: 16}}>Glossary</Text>
                </View>
                <View style={styles.optionEndIcon}>
                  <MaterialIcons name="keyboard-arrow-right" size={25} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <View style={styles.optionText}>
                  <Text style={{fontSize: 16}}>Customer Service</Text>
                </View>
                <View style={styles.optionEndIcon}>
                  <MaterialIcons name="keyboard-arrow-right" size={25} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <View style={styles.optionText}>
                  <Text style={{fontSize: 16}}>F.A.Q</Text>
                </View>
                <View style={styles.optionEndIcon}>
                  <MaterialIcons name="keyboard-arrow-right" size={25} />
                </View>
              </TouchableOpacity>
              </>
            )}
            
            <TouchableOpacity style={styles.option} onPress={() => Logout()}>
              <View style={styles.optionText}>
                <Text style={{fontSize: 16, color: 'red'}}>Log Out</Text>
              </View>
              <View style={styles.optionEndIcon}>
                <MaterialIcons name="keyboard-arrow-right" size={25} color = 'red' />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.option}>
                <View style={styles.optionText}>
                  <Text style={{fontSize: 16, color: 'red'}}>Delete Account</Text>
                </View>
                <View style={styles.optionEndIcon}>
                  <MaterialIcons name="keyboard-arrow-right" size={25} color = 'red' />
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      height: 150,
      paddingTop: 50,
    },
    HeaderTitleHolder:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: '5%',
      marginBottom: 20,
    },
    userDetailsHolder:{
      flexDirection: 'row',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      paddingHorizontal: '5%',
    },
    profileHolder:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 55,
      height: 55,
      marginRight: 20,
      backgroundColor: '#ECF9F9',
      borderRadius: 35,
    },
    defaultProfileText: {
      fontSize: 18,
      fontWeight: '500',
    },
    profileName: {
      fontSize: 17,
      fontWeight: '500',
    },
    editProfile: {
      fontSize: 14,
      fontWeight: '500',
    },
    editProfileHolder:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 90,
      // height: 40,
      paddingHorizontal: 5,
      paddingVertical: 10,
      marginTop: 5,
      borderRadius: 10,
      borderWidth: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
    },
    backgroundImage: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    logo: {
      width: 300,
      height: 80,
      alignSelf: 'center',
      marginTop: '16%',
    },
    mainContent: {
      paddingHorizontal: '5%',
      paddingVertical: 20,
      paddingBottom: 100,
    },
    section: {
      width: '95%',
      marginBottom: 20,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    option: {
      width: '100%',
      alignItems: 'center',
      height: 55,
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    optionFrontIcon: {
      width: '20%',
    },
    iconContainer: {
      backgroundColor: '#BF7111',
      borderRadius: 25,
      width: 35,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
    },
    optionEndIcon: {
      alignItems: 'flex-end',
      width: '20%',
    },
    optionText: {
      width: '80%',
    },
    sectionTitle: {
      fontWeight: '300',
      fontSize: 16,
    },
    sectionTitleOpen: {
      color: 'lightgray',
    },
  });
export default OthersScreen
