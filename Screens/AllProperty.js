import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable, FlatList
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
import server from "../Component/server";
import { ScrollView } from "react-native-gesture-handler";
export default function AllProperty({ navigation }) {
    const [allKitchen, setAllKitchen] = useState([]);

    const getKitchen = async () => {
        const response = await server.get('Kitchen');
        console.log(response.data)
        setAllKitchen(response.data)
        console.log("All Kitchen:", allKitchen)
    }
    useEffect(() => {
        // CheckIfLocationEnabled();
        // alert(JSON.stringify(cart))
        getKitchen();

    }, []);




    return (
        <SafeAreaView style={styles.input
        }>
            <View style={{ height: '100%', width: '100%', alignContent: 'center', marginTop: 10 }}>
                <Text style={{
                    alignSelf: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 20
                }}>All Available Property</Text>
                <FlatList
                    keyExtractor={(item) => item._id}
                    data={allKitchen}
                    style={{ paddingBottom: 40 }}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    renderItem={({ item }) => {
                        return (

                            <View style={{ display: 'flex', flexDirection: 'column' }} >
                                <Pressable
                                    onPress={() => {
                                        navigation.navigate('ShowProperty', { property: item })
                                    }}>
                                    <Image style={{
                                        width: 140,
                                        height: 140
                                    }}
                                        // source={item.profileImage}
                                        // source={require(`${item?.profileImage}`)}
                                        source={{ uri: 'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=' }}
                                    />
                                    <Text>Nishat Hotel</Text>
                                    <Text>15 Marla</Text>
                                    <Text>Rent: 50,000 Rs</Text>
                                </Pressable>
                            </View>
                        );
                    }}
                    numColumns={2}
                    // pagingEnabled
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    input: {
        height: '100%',
        flex: 1,
        padding: 0,
        paddingTop: 0,
        backgroundColor: "white",
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    container: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start'
    },
    items: {
        width: '50%' // is 50% of container width
    }
});
