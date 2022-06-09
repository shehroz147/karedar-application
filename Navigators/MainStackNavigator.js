import React from "react";
import { StyleSheet } from "react-native";
import { View, ScrollView, Text, Image, Button } from "react-native";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import EditProfile from "../Screens/EditProfile";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from "react-native-safe-area-context";
import EditProfile2 from "../Screens/EditProfile2";
import Policy from "../Screens/Policy";
import HomePage from "../Screens/HomePage";
import Favourite from '../Screens/Favourite';
import Services from "../Screens/Services";
import MessServices from '../Screens/MessServices';
import RequestScreen from "../Screens/RequestScreen";
import AddServices from "../Screens/AddServices";
import Paynow from '../Screens/Paynow';
import HouseKitchen from "../Screens/HouseKitchen";
import ActiveService from "../Screens/ActiveServices";
import OrderList from "../Screens/OrderList";
import PendingRequests from "../Screens/PendingRequests";
import AddProperty from "../Screens/AddProperty";
import AddingProperty from "../Screens/AddingProperty";
import Footer from "./BottomTabNavigator";


const Stack = createNativeStackNavigator();



const MainStackNavigator = () => {
    return (
        // <NavigationContainer style={styles.footer}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <SafeAreaView> */}
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />

            <Stack.Screen name="Home" component={Services} />
        </Stack.Navigator >

    );
}
export default MainStackNavigator;

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

})