import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import home4 from '../assets/home4.png';
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';
import home from '../assets/home.png';
import Navbar from "../Component/Navbar";
import navTop from '../assets/navTop.png';
import navBar from '../assets/navBar.png';
import map from '../assets/map.png';
import { Divider } from "react-native-paper";
export default function HomePage({ navigation }) {

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

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        marginLeft: '4%'
                    }}>
                        <Pressable style={{
                            marginTop: '1%',
                            backgroundColor: '#FBC62C',
                            height: 35,
                            borderRadius: 25
                        }}>
                            <Text
                                style={{
                                    color: '#000000', textAlign: 'center', margin: '3%', fontSize: 16, fontWeight: '400'
                                }}
                            >Near By </Text>
                        </Pressable>
                        <Pressable style={{
                            marginTop: '1%',
                            backgroundColor: '#FFFFFF',
                            borderWidth: 1,
                            height: 35,
                            borderRadius: 25
                        }}>
                            <Text
                                style={{
                                    color: '#000000', textAlign: 'center', margin: '3%', fontSize: 16, fontWeight: '400'
                                }}
                            >Search </Text>
                        </Pressable>
                        <Pressable style={{
                            marginTop: '1%',
                            backgroundColor: '#FFFFFF',
                            height: 35,
                            borderWidth: 1,
                            borderRadius: 25
                        }}>
                            <Text
                                style={{
                                    color: '#000000', textAlign: 'center', margin: '3%', fontSize: 16, fontWeight: '400'
                                }}
                            >City Name</Text>
                        </Pressable>


                    </View>
                    <View style={{
                        height: '15%',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            textAlign: 'center'
                        }}>
                            Filters Here
                        </Text>
                    </View>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        alignSelf: 'center'
                    }}>
                        <Image
                            source={home4} />
                        <Image
                            source={home1} />
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
                            }}>Eden Valley</Text>
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
                            }}>Johar Town</Text>
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
                    <View style={{
                        marginTop: '10%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        alignSelf: 'center'
                    }}>
                        <Image
                            source={home2} />
                        <Image
                            source={home} />
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
