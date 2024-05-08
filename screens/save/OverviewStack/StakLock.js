import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';

const StakLock = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.notificationIconHolder} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={30} />
      </TouchableOpacity>

      {/* Target Icon */}
      <Image
        style={styles.iconLayout}
        contentFit="cover"
        source={require("../../../assets/holder10.png")}
      />
      <Text style={styles.title}>Stak Lock</Text>

      {/* Lorem Ipsum Text */}
      <Text style={styles.loremText}>
        Stack lock is a feature that let's you lock away money for a fixed period of time and earn intrest when your lock matures
      </Text>

      {/* Image */}
      <Image source={require('../../../assets/security-1-1.png')} style={styles.image} resizeMode="cover" />

      {/* Image Title and Subtitle */}
      <View style={styles.imageInfo}>
        <Text style={styles.imageTitle}>You have no ongoing stack lock</Text>
        <Text style={styles.imageSubtitle}>Let's create a stack lock!</Text>
      </View>

      {/* Create Stak Target Button */}
      <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('CreateStakLock')}>
        <Text style={styles.createButtonText}>Create Stak Lock</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 40,
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
      backgroundColor: '#554850',
      padding: 10,
      width: 50,
      borderRadius: 10,
      marginBottom: 10,
    },
    loremText: {
      fontSize: 14,
      marginBottom: 20,
    },
    image: {
      width: 150,
      height: 150,
      marginVertical: 30,
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
      backgroundColor: '#ACF279',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    createButtonText: {
      fontSize: 18,
      fontWeight: '500',
    },
    iconLayout: {
      height: 50,
      width: 50,
      marginBottom: 10,
    },
});

export default StakLock
