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
export default function MessServices({ navigation }) {

    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>

                    <Text style={{
                        textAlign: 'center',
                        fontSize: 18,
                        marginTop: '3%',
                        fontWeight: '700'
                    }}>Mess Services provider near by</Text>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        alignSelf: 'center'
                    }}>

                        <Image
                            source={mess} />
                        <Image
                            source={mess1} />
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '80%',
                        alignSelf: 'center'
                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '90%',
                            justifyContent: "space-between"
                        }}>
                            <Text style={{
                                marginTop: '2%',
                                marginLeft: '2%'
                            }}>House Kitchen</Text>

                            <Text style={{
                                marginTop: '2%',
                            }}>Hotpots</Text>
                        </View>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '70%',
                        alignSelf: 'center'
                    }}>
                        <Text style={{
                            // marginTop: '2%',
                        }}>Availability</Text>
                        <Text style={{
                            // marginLeft: '10%',
                            // textAlign: 'right'
                        }}>Availability</Text>
                    </View>


                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        width: '90%',
                    }}>
                        <Text style={{
                        }}>Rating</Text>
                        <Text style={{
                            marginLeft: '10%'
                        }}>Rating</Text>
                    </View>
                    <View style={{
                        marginTop: '10%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        alignSelf: 'center'
                    }}>
                        <Image
                            source={mess2} />
                        <Image
                            source={mess3} />
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '80%',
                        alignSelf: 'center'
                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '90%',
                            alignSelf: 'center',
                        }}>
                            <Image
                                style={{
                                    marginTop: '2%'
                                }}
                                source={map} />
                            <Text style={{
                                marginTop: '2%',
                                marginLeft: '2%'
                            }}>Nishat Appartments</Text>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                        }}>
                            <Image
                                style={{
                                    marginTop: '2%',
                                    marginLeft: '-35%'
                                }}
                                source={map} />
                            <Text style={{
                                marginTop: '2%',
                            }}>Ziafa Hotels</Text>
                        </View>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        width: '90%',
                    }}>
                        <Text style={{
                            // marginTop: '2%',
                        }}>Rent: 1500 Rs</Text>
                        <Text style={{
                            marginLeft: '10%',
                            // textAlign: 'right'
                        }}>Rent: 1500 Rs</Text>
                    </View>


                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        width: '90%',
                    }}>
                        <Text style={{
                        }}>15 Marla</Text>
                        <Text style={{
                            marginLeft: '10%'
                        }}>25 Marla</Text>
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
