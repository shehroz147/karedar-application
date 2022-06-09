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
import imranKhan from '../assets/imranKhan.png';
import kazmi from '../assets/kazmi.png';
import sonam from '../assets/sonam.png';
import ap from '../assets/ap.png';
import cross from '../assets/cross.png';


export default function AddProperty({ navigation }) {

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

                    <Pressable style={{
                        backgroundColor: '#E5E5E5',
                        borderRadius: 36,
                        width: '30%',
                        alignSelf: 'center',
                        top: '5%'
                    }}>
                        <Text style={{
                            color: '#575757',
                            textAlign: 'center',
                            padding: 10
                        }}>
                            + Add Property
                        </Text>


                    </Pressable>

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
        width: '100%'
    }
});
