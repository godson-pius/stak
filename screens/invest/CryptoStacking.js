import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CryptoStacking = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../../images/fistBump.png')} style={styles.image} />
        <Text style={styles.text}>Coming to you soon!</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingBottom: '10    %',
    },
    text: {
      marginBottom: 20,
      fontSize: 17,
    },
    image: {
        width: 120,
        height: 100,
    },
})
export default CryptoStacking
