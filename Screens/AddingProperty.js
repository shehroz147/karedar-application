import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import mess from '../assets/mess.png';
import mess1 from '../assets/mess1.png';
import mess2 from '../assets/mess2.png';
import mess3 from '../assets/mess3.png';
import Navbar from "../Component/Navbar";
import navTop from '../assets/navTop.png';
import navBar from '../assets/navBar.png';
import map from '../assets/map.png';
import { Divider } from "react-native-paper";
import request from '../assets/request.png';
import CheckBox from "expo-checkbox";

export default function AddingProperty({ navigation }) {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.navbar}>
                        <Image
                            source={navTop} />
                        <Text style={{
                            fontSize: 18
                        }}>Kareydar</Text>
                        <Image
                            source={navBar} />
                    </View>
                    <Divider />
                    <Text style={{
                        marginTop: '6%',
                        marginLeft: '8%',
                        justifyContent: 'center',
                        fontSize: 14,
                        fontWeight: '500',
                        color: '#575757',

                    }}>PROPERTY TYPE AND LOCATION</Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        top: '5%'
                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '90%',
                            marginLeft: '5%'
                        }}>
                            <Text style={{
                                top: '1%'
                            }}>Purpose</Text>

                            <CheckBox
                                boxType="circle"
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            />
                            <Text style={{
                                top: '1%'
                            }}>For Rent</Text>
                            <CheckBox
                                boxType="circle"
                                disabled={false}
                                value={toggleCheckBox1}
                                onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                            />
                            <Text style={{
                                top: '1%'
                            }}>For Sale</Text>
                        </View>
                        <View style={{
                            marginTop: 20
                        }}>
                            <Text style={{
                                top: '1%',
                                marginLeft: '5%'
                            }}>Property Type</Text>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '45%',
                            justifyContent: 'space-between',
                            alignSelf: 'center'
                        }}>


                            <CheckBox
                                boxType="circle"
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            />
                            <Text style={{
                                top: '1%',
                                marginLeft: '20%',
                                marginRight: '30%'
                            }}>Home</Text>
                            <CheckBox
                                boxType="circle"
                                disabled={false}
                                value={toggleCheckBox1}
                                onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                            />
                            <Text style={{
                                top: '1%',
                                marginLeft: '10%'
                            }}>Commercial</Text>
                        </View>
                    </View>
                    <View style={{
                        display: "flex",
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Text>
                            City
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        </>

    );
}
const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 25,
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
    }
});
