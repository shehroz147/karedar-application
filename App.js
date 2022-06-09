import { StatusBar } from 'expo-status-bar';
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
export default function App() {
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                {/* <Stack.Navigator */}
                {/* initialRouteName='Signup' */}
                {/* screenOptions={{ headerShown: false }}> */}
                {/* <SafeAreaView> */}
                {/* <Stack.Screen name="Signup" component={Signup} /> */}
                {/* <Stack.Screen name="Login" component={Login} /> */}

                {/* <Stack.Screen name="Home" component={Services} /> */}
                {/* </Stack.Navigator > */}
                <Drawer.Navigator
                    drawerType="slide"
                    drawerPosition="left"
                    drawerContent={(props) => <CustomDrawerContent {...props} />}
                    drawerIcon
                    initialRouteName="Home"
                    screenOptions={{
                        headerTitle: "Services"
                    }
                    }
                >
                    <Drawer.Screen name="Home" component={Services} />
                    <Drawer.Screen name="HomePage" component={HomePage}
                    />
                    <Drawer.Screen name="AddServices" component={MessServices} />
                    <Drawer.Screen name="ActiveService" component={ActiveService} />
                    <Drawer.Screen name="OrderList" component={OrderList}
                    />
                    <Drawer.Screen name="RequestScreen" component={RequestScreen} />
                    <Drawer.Screen name="PendingRequestScreen" component={PendingRequests} />
                    <Drawer.Screen name="EditProfile" component={EditProfile} />
                    {/* <Drawer.Screen name="PendingRequestScreen" component={PendingRequests} /> */}
                </Drawer.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}



