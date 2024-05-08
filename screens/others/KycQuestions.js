import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Border, Color, FontFamily, FontSize, Padding } from '../../GlobalStyles'
import { TextInput } from 'react-native-gesture-handler'
import DateTimePicker from 'react-native-modal-datetime-picker'

const KycQuestions = () => {
    const [dob, setDob] = useState(new Date(2024, 1, 20));
    const [showDatePicker, setShowDatePicker] = useState(true);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>KycQuestions</Text>

                <TextInput placeholder='Place of birth' placeholderTextColor={{ color: Color.subTextBlack, }} style={[styles.dlCard, styles.cardFlexBox]} />

                <TextInput placeholder='Gender' placeholderTextColor={{ color: Color.subTextBlack, }} style={[styles.dlCard, styles.cardFlexBox]} />
                
                <TextInput placeholder='Country' placeholderTextColor={{ color: Color.subTextBlack, }} style={[styles.dlCard, styles.cardFlexBox]} />
                
                <TextInput placeholder='Street' placeholderTextColor={{ color: Color.subTextBlack, }} style={[styles.dlCard, styles.cardFlexBox]} />

                <TextInput placeholder='City' placeholderTextColor={{ color: Color.subTextBlack, }} style={[styles.dlCard, styles.cardFlexBox]} />

                <TextInput placeholder='State' placeholderTextColor={{ color: Color.subTextBlack, }} style={[styles.dlCard, styles.cardFlexBox]} />

                <TextInput placeholder='Postal Code' placeholderTextColor={{ color: Color.subTextBlack, }} style={[styles.dlCard, styles.cardFlexBox]} />

                <TextInput placeholder='BVN' placeholderTextColor={{ color: Color.subTextBlack, }} style={[styles.dlCard, styles.cardFlexBox]} />

                <TextInput placeholder='Street' placeholderTextColor={{ color: Color.subTextBlack, }} style={[styles.dlCard, styles.cardFlexBox]} />

                {showDatePicker && (
                    <DateTimePicker
                        value={dob}
                        mode="date"
                        display="spinner"
                        onChange={(event, selectedDate) => {
                            setShowDatePicker(false);
                            setDob(selectedDate || dob);
                        }}
                    />
                )}

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignContent: 'center',
    },

    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 3
    },
    text: {
        fontSize: FontSize.bodyCopyMobile16_size,
        color: Color.primaryColorFill,
    },
    textTypo: {
        fontFamily: FontFamily.miniCopyMedium,
        fontWeight: "500",
    },
    dlCard: {
        borderRadius: Border.br_5xs,
        borderStyle: "solid",
        borderColor: Color.inactiveMenu,
        borderWidth: 1,
        width: "100%",
        paddingHorizontal: Padding.p_3xs,
        paddingVertical: Padding.p_sm,
        marginTop: 8,
        lineHeight: 22,
        fontSize: FontSize.subHeaderCopyMobile16_size,
        color: Color.black,
        fontFamily: FontFamily.tags,
    },
})

export default KycQuestions