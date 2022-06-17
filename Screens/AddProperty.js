import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
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
import server from "../Component/server";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function AddProperty({ navigation }) {
    const [userData, setUserData] = useState([]);

    const getUser = async () => {

        let id = await AsyncStorage.getItem('userId');
        let _id = JSON.parse(id);
        const data = {
            id: _id
        }
        const response = await server.post('User/GetById', data)
        console.log(response.data);

        setUserData(response.data.userInfo);
    }

    useEffect(() => {
        getUser();

    }, []);


    const becomeProvider = async () => {
        let id = await AsyncStorage.getItem('userId');
        let _id = JSON.parse(id);
        const data = {
            user: _id
        }
        const response = await server.post('MessProviderRequest/', data);
        console.log(response.data);
        alert(response.data);
    }

    const becomePropertyProvider = async () => {
        let id = await AsyncStorage.getItem('userId');
        let _id = JSON.parse(id);
        const data = {
            user: _id
        }
        const response = await server.post('PropertyProviderRequest/', data);
        console.log(response.data);
        alert(response.data);
    }
    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>


                    {userData?.providor.includes('Mess') ?
                        (

                            <View>
                                <Pressable style={{
                                    backgroundColor: '#E5E5E5',
                                    borderRadius: 36,
                                    width: '60%',
                                    alignSelf: 'center',
                                    top: '5%'
                                }}
                                    onPress={() => { navigation.navigate('Kitchen') }}
                                >
                                    <Text style={{
                                        color: '#575757',
                                        textAlign: 'center',
                                        padding: 10
                                    }}>
                                        Go To Kitchen
                                    </Text>

                                </Pressable>
                            </View>

                        ) : (
                            <View>
                                <Pressable style={{
                                    backgroundColor: '#E5E5E5',
                                    borderRadius: 36,
                                    width: '60%',
                                    alignSelf: 'center',
                                    top: '5%'
                                }}
                                    onPress={becomeProvider}
                                >
                                    <Text style={{
                                        color: '#575757',
                                        textAlign: 'center',
                                        padding: 10
                                    }}>
                                        Become Mess Providor
                                    </Text>

                                </Pressable>
                            </View>)}



                    {userData?.providor.includes('Property') ? (
                        <View style={{
                            margin: 20
                        }}>
                            <Pressable style={{
                                backgroundColor: '#E5E5E5',
                                borderRadius: 36,
                                width: '60%',
                                alignSelf: 'center',
                                top: '5%'
                            }}
                                onPress={navigation.navigate('AddingProperty')}
                            >
                                <Text style={{
                                    color: '#575757',
                                    textAlign: 'center',
                                    padding: 10
                                }}>
                                    Go to Property
                                </Text>

                            </Pressable>
                        </View>

                    ) : (
                        <View style={{
                            margin: 20
                        }}>
                            <Pressable style={{
                                backgroundColor: '#E5E5E5',
                                borderRadius: 36,
                                width: '60%',
                                alignSelf: 'center',
                                top: '5%'
                            }}
                                onPress={
                                    becomePropertyProvider
                                }
                            >
                                <Text style={{
                                    color: '#575757',
                                    textAlign: 'center',
                                    padding: 10
                                }}>
                                    Become Property Provider

                                </Text>

                            </Pressable>
                        </View>)}


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
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }
});
