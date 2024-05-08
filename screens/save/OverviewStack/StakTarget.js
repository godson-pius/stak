import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';

const StakTarget = ({navigation}) => {
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
        source={require("../../../assets/holder12.png")}
      />
      <Text style={styles.title}>Target Saving</Text>

      {/* Lorem Ipsum Text */}
      <Text style={styles.loremText}>
        Set a savings target for yourself today to reach your goals and earn interest on your savings. You can have only 2 ongoing target saving plan
      </Text>

      {/* Image */}
      <Image source={require('../../../assets/target-1.png')} style={styles.image} resizeMode="cover" />

      {/* Image Title and Subtitle */}
      <View style={styles.imageInfo}>
        <Text style={styles.imageTitle}>You have no ongoing stack StakLock</Text>
        <Text style={styles.imageSubtitle}>Let's create a stack lock!</Text>
      </View>

      {/* Create Stak Target Button */}
      <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('StartTargetSteps')}>
        <Text style={styles.createButtonText}>Start a target saving plan today</Text>
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
      backgroundColor: '#507171',
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
      width: 200,
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
      height: 45,
      width: 45,
      marginBottom: 10,
    },
});

export default StakTarget
