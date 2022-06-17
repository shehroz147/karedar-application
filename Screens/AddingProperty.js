import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable, ScrollView
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
import SelectDropdown from "react-native-select-dropdown";
import server from "../Component/server";
// import { ScrollView } from "react-native-gesture-handler";
export default function AddingProperty({ navigation }) {
    const countries = ["Islamabad", "Karachi", "Lahore"];
    const propertyType = ["House", "Apartment", "Hostel"];
    const [city, setCity] = useState('');
    const [location, setLocation] = useState();
    const [title, setPropertyTitle] = useState('');
    const [price, setPrice] = useState('');
    const [bedRoom, setBedRooms] = useState('');
    const [Bathroom, setBathrooms] = useState('');

    const [size, setSize] = useState('');
    const [property, setProperty] = useState('');

    const [kitchen, setKitchen] = useState('');
    const [floor, setFloor] = useState('');
    const [province, setProvince] = useState('');
    const addProperty = async () => {
        console.log(propertyType);
        let id = await AsyncStorage.getItem('userId');
        let _id = JSON.parse(id);
        const data = {
            user: _id,
            city: city,
            price: price,
            title: title,
            size: size,
            address: location,
            bedRoom: bedRoom,
            kitchen: kitchen,
            Bathroom: Bathroom,
            floorNo: floor,
            province: province
        }
        if (property === 'House') {
            const response = await server.post('/House', data);
            console.log(response.data)
        }
        else if (property === 'Apartment') {
            const response = await server.post('/Appartments', data);
            console.log(response.data)
        }
        else if (property === 'Hostel') {
            const response = await server.post('/Hostel', data);
            console.log(response);
        }
    }

    return (
        <View>
            <ScrollView>

                <View style={styles.container}>
                    <Text style={{
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
                    }}>
                        <Text style={{
                            marginLeft: '5%'
                        }}>Property Type</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '45%',
                            justifyContent: 'space-between',
                            alignSelf: 'center'
                        }}>

                            <SelectDropdown
                                data={propertyType}
                                onSelect={(selectedItem, index) => {
                                    setProperty(selectedItem)
                                }}
                                buttonStyle={{
                                    margin: 0,
                                    borderRadius: 36,
                                }}
                                dropdownStyle={{

                                }}
                                defaultButtonText={'House'}
                                dropdownIconPosition={'right'}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                }}
                            />
                        </View>
                    </View>
                    <View style={{
                        display: "flex",
                        flexDirection: 'row',
                        marginLeft: 20, alignSelf: 'center'
                    }}>
                        <Text>
                            City
                        </Text>
                        <SelectDropdown
                            data={countries}
                            onSelect={(selectedItem, index) => {
                                setCity(selectedItem)
                            }}
                            buttonStyle={{
                                margin: 0,
                                borderRadius: 36,
                            }}
                            dropdownStyle={{

                            }}
                            defaultButtonText={'City'}
                            dropdownIconPosition={'right'}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item
                            }}
                        />
                    </View>
                    <TextInput
                        placeholder="Location"
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        onChangeText={setLocation}
                        value={location}
                    />
                    <TextInput
                        placeholder="Title"
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        onChangeText={setPropertyTitle}
                        value={title}
                    />
                    <TextInput
                        placeholder="BedRoom"
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        onChangeText={setBedRooms}
                        value={bedRoom}
                    />
                    <TextInput
                        placeholder="Price"
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        onChangeText={setPrice}
                        value={price}
                    />
                    <TextInput
                        placeholder="Price"
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        onChangeText={setFloor}
                        value={floor}
                    />
                    <TextInput
                        placeholder="Price"
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        onChangeText={setProvince}
                        value={province}
                    />

                    {/* <TextInput
                        placeholder=""
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        onChangeText={setPrice}
                        value={price}
                    /> */}
                    <TextInput
                        placeholder="Kitchen"
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        onChangeText={setKitchen}
                        value={kitchen}
                    />




                    <TextInput
                        placeholder="Size"
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        onChangeText={setSize}
                        value={size}
                    />

                    <TextInput
                        placeholder="BathRooms"
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        onChangeText={setBathrooms}
                        value={Bathroom}
                    />


                    <Pressable style={{
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: '10%',
                        backgroundColor: '#FFFFFF',
                        borderWidth: 1,
                        height: 42,
                        borderRadius: 25,
                    }}
                        onPress={addProperty}>
                        <Text
                            style={{
                                color: '#000000', alignSelf: 'center', marginTop: '3%', fontSize: 16, fontWeight: 'bold'
                            }}
                        >Add </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>

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
