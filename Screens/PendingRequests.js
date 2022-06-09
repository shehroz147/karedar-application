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


export default function PendingRequests({ navigation }) {

    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={{
                        marginTop: '6%',
                        marginLeft: '3%',
                        justifyContent: 'center',
                        fontSize: 14,
                        fontWeight: '400'
                    }}>Pending Requests (4)</Text>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        left: '2%',
                        top: '4%',
                        width: '90%',
                        marginBottom: 20,
                    }}>
                        <Image
                            source={kazmi} />
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                fontWeight: 'bold'
                            }}>Ahmad Kazmi Prince</Text>
                            <Text style={{
                            }}>2nd Floor UCP</Text>

                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignContent: 'flex-end'
                        }}>
                            <Pressable style={{
                                backgroundColor: '#3DEB00',
                                borderRadius: 36,
                                // width: '40%'
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#FFFFFF'
                                }}>
                                    Accept
                                </Text>
                            </Pressable>
                            <Pressable style={{
                                backgroundColor: '#C4C4C4',
                                borderRadius: 36,
                                width: '100%',
                                paddingLeft: 10,
                                paddingRight: 10
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#FFFFFF'
                                }}>
                                    Details
                                </Text>
                            </Pressable>
                        </View>
                        <Image
                            source={cross} />
                    </View>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        left: '2%',
                        top: '4%',
                        width: '90%',
                        justifyContent: 'space-between',
                        marginBottom: 20
                    }}>
                        <Image
                            source={sonam} />
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                fontWeight: 'bold'
                            }}>Sonam Bajwa</Text>
                            <Text style={{
                            }}> Banigalah, Islamabad</Text>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <Pressable style={{
                                backgroundColor: '#3DEB00',
                                borderRadius: 36,
                                width: '100%'
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#FFFFFF'
                                }}>
                                    Accept
                                </Text>
                            </Pressable>
                            <Pressable style={{
                                backgroundColor: '#C4C4C4',
                                borderRadius: 36,
                                width: '100%',
                                paddingLeft: 10,
                                paddingRight: 10
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#FFFFFF'
                                }}>
                                    Details
                                </Text>
                            </Pressable>
                        </View>
                        <Image
                            source={cross} />
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        left: '2%',
                        top: '4%',
                        justifyContent: 'space-between',
                        width: '90%',
                        marginBottom: 20
                    }}>
                        <Image
                            source={ap} />
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                fontWeight: 'bold'
                            }}>Ap Dhillon</Text>
                            <Text style={{
                            }}> Banigalah, Islamabad</Text>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <Pressable style={{
                                backgroundColor: '#3DEB00',
                                borderRadius: 36,
                                width: '100%'
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#FFFFFF'
                                }}>
                                    Accept
                                </Text>
                            </Pressable>
                            <Pressable style={{
                                backgroundColor: '#C4C4C4',
                                borderRadius: 36,
                                width: '100%',
                                paddingLeft: 10,
                                paddingRight: 10
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#FFFFFF'
                                }}>
                                    Details
                                </Text>
                            </Pressable>
                        </View>
                        <Image
                            source={cross} />
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        left: '2%',
                        top: '4%',
                        marginBottom: 20
                    }}>
                        <Image
                            source={imranKhan} />
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                fontWeight: 'bold'
                            }}>Imran Khan</Text>
                            <Text style={{
                            }}>Banigalah, Islamabad </Text>

                        </View>
                        <View style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'column'
                        }}>
                            <Pressable style={{
                                backgroundColor: '#3DEB00',
                                borderRadius: 36,
                                width: '100%'
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#FFFFFF'
                                }}>
                                    Accept
                                </Text>
                            </Pressable>
                            <Pressable style={{
                                backgroundColor: '#C4C4C4',
                                borderRadius: 36,
                                width: '100%',
                                paddingRight: 10,
                                paddingLeft: 10
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#FFFFFF'
                                }}>
                                    Details
                                </Text>
                            </Pressable>
                        </View>
                        <Image
                            source={cross} />
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
        width: '100%'
    }
});
