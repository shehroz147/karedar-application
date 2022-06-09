import React, { useState } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import back from '../assets/back.png';
import setting from '../assets/setting.png';
import edit from '../assets/edit.png';
import { ScrollView } from "react-native-gesture-handler";
import navTop from '../assets/navTop.png';
import navBar from '../assets/navBar.png';
import { Divider } from "react-native-paper";
// import Checkbox from 'expo-checkbox';
export default function AddServices({ navigation }) {
    let [email, setEmail] = useState('');
    let [DOB, setDOB] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [CNIC, setCNIC] = useState('');
    const [isChecked, setChecked] = useState(false);

    return (
        <>
            <SafeAreaView>

                <View
                    style={{
                        backgroundColor: "#FFFFFF",
                        height: '100%'
                    }}
                >
                    <View style={{
                        top: '2%'
                    }}>
                        <Image
                            style={{
                                alignSelf: 'center'
                            }}
                            source={edit}
                        />
                    </View>
                    <View style={{
                        width: '90%',
                        alignSelf: 'center',
                        margin: 10
                    }}>

                        <TextInput
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                            placeholder="Enter Kitchen Name"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setPhoneNumber}
                            value={phoneNumber}
                            placeholder="Select your service"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setCNIC}
                            value={CNIC}
                            placeholder="Monthly Charges"
                        />
                        <View style={{
                            width: '40%'
                        }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={setDOB}
                                value={DOB}
                                placeholder="+ Add Dish"
                            />
                        </View>
                    </View>
                    <View style={{
                        height: '20%',
                        backgroundColor: '#FFFFFF',
                        justifyContent: 'center'
                    }}>
                        <Pressable style={{
                            width: '40%',
                            alignSelf: 'center',
                            backgroundColor: '#FBC62C',
                            height: 42,
                            borderRadius: 25
                        }}>
                            <Text
                                style={{
                                    color: '#000000', alignSelf: 'center', marginTop: '6%', fontSize: 16, fontWeight: 'bold', alignContent: 'center'
                                }}
                            >Save </Text>
                        </Pressable>
                    </View>
                </View>

            </SafeAreaView>
        </>

    );
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 25,
        paddingLeft: 20,
        color: '#575757'
    },
    inputRow: {
        height: 40,
        margin: 14,
        padding: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 25,
        width: '45%'
    },
    section: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        margin: 10
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        margin: 8,
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
});
