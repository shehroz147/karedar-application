import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Platform, Text } from "react-native";
import { Badge } from "react-native-paper";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { Avatar, Divider } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import back from '../assets/back.png';
import navBar from '../assets/navBar.png'
// import Footer from "../Components/Footer/Footer";

// import { Avatar, Badge, Icon, withBadge } from "react-native-elements";

const Navbar = ({ navigation }) => {


    useEffect(() => {

    }, []);
    return (
        <>

            <View style={styles.container}>
                <View style={styles.iconView}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate("Login") }}
                        style={styles.icon}
                    >
                        <Image
                            style={{
                                marginTop: '45%',
                                marginLeft: '2%'
                            }}
                            source={back}
                        />
                    </TouchableOpacity>


                    <Text style={{
                        textAlign: 'center',
                        marginTop: 20,
                        fontWeight: 'bold',
                        fontSize: 18
                    }}>Kareydar</Text>
                    <Image
                        style={{

                        }}
                        source={navBar} />
                </View>

            </View>

            <Divider />

        </>
    );
};

export default Navbar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        paddingTop: 0,
        marginTop: -5,
        paddingBottom: 0,
        height: '100%',
        ...Platform.select({
            ios: {
                marginTop: 35
            }
        })
        // justifyContent: "space-between",
    },
    iconView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#E5E5E5',

        width: "100%",
        height: '10%',

    },
    icon: {
        position: "absolute",
        flex: 2,
        // marginBottom: 10
    },
    logo: {
        // justifyContent: "space-between",
        display: "flex",
        // backgroundColor: "green",
        // flex: 2,
        width: "63%",
    },
    cartIcon: {
        // justifyContent: "flex-end",
        position: "absolute",
        backgroundColor: "white",
        right: 35,
        bottom: 10,
        flex: 2,
        marginBottom: 10
    },
    badge: {
        backgroundColor: "green",
        position: "absolute",
        // bottom: -40,
        right: 12,
        top: -54,
        // color:'green'
    },
});
