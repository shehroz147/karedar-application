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
import server from "../Component/server";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function RequestScreen({ navigation, route }) {
    const { kitchen } = route.params;

    const requestKitchen = async () => {
        let id = await AsyncStorage.getItem('userId');
        const _id = JSON.parse(id);
        const data = {
            kitchenId: kitchen._id,
            userId: id
        }
        const response = await server.post('RequestKitchen/', data)
        console.log(response);
    }


    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>


                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        width: '80%',
                        alignSelf: 'center',
                        top: '10%'
                    }}>

                        <Image
                            source={{ uri: 'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=' }}
                            style={{
                                height: 150, width: 200
                            }} />
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: 30
                        }}>
                            <Text style={{ marginLeft: '10%' }} >{kitchen?.name}</Text>
                            <Text style={{ marginLeft: '10%', marginTop: 20 }}>{kitchen?.address}</Text>
                            <Pressable style={{
                                backgroundColor: 'black',
                                width: '50%',
                                borderRadius: 36,
                                left: '15%',
                                top: '10%'
                            }}
                                onPress={requestKitchen}><Text style={{ color: 'white', padding: 10, textAlign: 'center' }}>Request</Text></Pressable>
                        </View>
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
        margin: 20
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
    }
});
