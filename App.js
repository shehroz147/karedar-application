import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import 'react-native-reanimated'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Footer from './Navigators/BottomTabNavigator';
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import MainStackNavigator from './Navigators/MainStackNavigator';
import Services from './Screens/Services';
import HomePage from './Screens/HomePage';
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from './Component/DrawerContent';
import AddServices from './Screens/AddServices';
import MessServices from './Screens/MessServices';
import ActiveService from './Screens/ActiveServices';
import OrderList from './Screens/OrderList';
import RequestScreen from './Screens/RequestScreen';
import PendingRequests from './Screens/PendingRequests';
import EditProfile from './Screens/EditProfile';
import HouseKitchen from './Screens/HouseKitchen';
import AddProperty from './Screens/AddProperty';
import AddingProperty from './Screens/AddingProperty';
import MyKitchen from './Screens/MyKitchen';
import EditKitchen from './Screens/EditKitchen';
import Paynow from './Screens/Paynow';
import Policy from './Screens/Policy';
import Favourite from './Screens/Favourite';
import AllProperty from './Screens/AllProperty';
import ShowProperty from './Screens/ShowProperty';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const theme = {
    ...DefaultTheme,

    colors: {
        ...DefaultTheme.colors,
        primary: "#FFC700",
        accent: "##FFC700",
    },
};


export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerType="slide"
            drawerPosition="left"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            drawerIcon
            initialRouteName="Home"
            screenOptions={{
                headerTitle: "Home"
            }
            }
        >
            <Drawer.Screen name="Kitchen" component={HouseKitchen} />
            <Drawer.Screen name="PayNow" component={Paynow} />
            <Drawer.Screen name="Policy" component={Policy} />
            <Drawer.Screen name="Home" component={Footer} />
            <Drawer.Screen name="HomePage" component={HomePage}
            />
            <Drawer.Screen name="MessServices" component={MessServices} />
            <Drawer.Screen name="Favourite" component={Favourite} />
            {/* <Drawer.Screen name="AddProperty" component={AddProperty} /> */}
            {/* <Drawer.Screen name="AddingProperty" component={AddingProperty}
                    /> */}

            <Drawer.Screen name="MyKitchen" component={MyKitchen} />
            <Drawer.Screen name="AllProperty" component={AllProperty} />
            <Drawer.Screen name="AddServices" component={AddServices} />
            <Drawer.Screen name="ActiveService" component={ActiveService} />
            <Drawer.Screen name="OrderList" component={OrderList}
            />
            <Drawer.Screen name="ShowProperty" component={ShowProperty} />
            <Drawer.Screen name="RequestScreen" component={RequestScreen} />
            <Drawer.Screen name="EditKitchen" component={EditKitchen} />
            <Drawer.Screen name="PendingRequestScreen" component={PendingRequests} />
            <Drawer.Screen name="EditProfile" component={EditProfile} />
        </Drawer.Navigator>
    );
};




export const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Home" component={DrawerNavigator} />
        </Stack.Navigator>
    )
}


export default function App() {

    const [userToken, setUserToken] = useState(null);
    // React.useEffect(() => {
    //     if (!isLoading) {
    //         RNBootSplash.hide();
    //     }
    // }, [isLoading]);

    const onReady = async () => {
        try {
            // const user_token = storage.getString('user.token');
            const user_id = await AsyncStorage.getItem("userId");
            setUserToken(JSON.parse(user_id));
            // console.log('got:', user_token, user_id);
            // if (token !== undefined) {
            // dispatch(getUserById({ id: token }));
            // } else {
            // RNBootSplash.hide();
        } catch (e) {
            console.error("Error:", e);
        }
    };



    return (
        <PaperProvider theme={theme}>
            <NavigationContainer onReady={onReady}>
                {userToken === null ? <AuthNavigator /> : <DrawerNavigator />}


            </NavigationContainer>
        </PaperProvider>
    );
}



