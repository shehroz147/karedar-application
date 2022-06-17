import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from 'react-native'
import { View, ScrollView, Text, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../Screens/HomePage';
import MyKitchen from '../Screens/MyKitchen';
import ActiveServices from '../Screens/ActiveServices';
const Tab = createBottomTabNavigator();



const Footer = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="HomePage" component={HomePage} options={{
                tabBarIcon: ({ color }) => (
                    <Image
                        // style={styles.bottomTabIcon}
                        style={styles.images}
                        source={require('../assets/kazmi.png')
                        } />
                ),
                tabBarLabel: 'Home'
            }} />
            <Tab.Screen name="ActiveServices" component={ActiveServices} options={{
                tabBarIcon: ({ color }) => (
                    <Image
                        // style={styles.bottomTabIcon}
                        style={styles.images}
                        source={require('../assets/kazmi.png')
                        } />
                ),
                tabBarLabel: 'Services'
            }} />
            <Tab.Screen name="Kitchen" component={MyKitchen} options={{
                tabBarIcon: ({ color }) => (
                    <Image
                        // style={styles.bottomTabIcon}
                        style={styles.images}
                        source={require('../assets/kazmi.png')
                        } />
                ),
                tabBarLabel: 'MyKitchen'
            }} />
        </Tab.Navigator>
        //  </NavigationContainer>
    );
}
export default Footer;

// const Footer = ({navigation}) => {

//   return (

//     <View style={styles.footer}>
//        <TouchableOpacity  >

//        <Image source={require('../../../assets/home.png')} style={styles.images} />

//       {/* <FontAwesomeIcon icon={ faCoffee } /> */}
//       </TouchableOpacity>
//       <TouchableOpacity  >
//       <Image source={require('../../../assets/shopping-cart.png')} style={styles.images}/>
//       </TouchableOpacity  >
//       <TouchableOpacity  >
//             <Image source={require('../../../assets/placeholder.png')} style={styles.images}/>
//             </TouchableOpacity>
//             <TouchableOpacity>
//       <Image source={require('../../../assets/account.png')} style={styles.images}/>
//       </TouchableOpacity>
// </View>

//   )};
// export default Footer;

const styles = StyleSheet.create({
    footer: {
        paddingTop: 10,
        borderColor: '#6b8e23',
        borderStyle: 'solid',
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: -20,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        height: 80,
        borderLeftWidth: 0,
        borderTopWidth: 1,
    },
    images: {
        height: 30,
        width: 30,
        marginLeft: 30,
        marginRight: 30
    }
})