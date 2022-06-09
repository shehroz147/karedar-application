import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { loggedInUser, signOut } from "../Actions";
// import { Text, View } from "react-native";
import { Avatar } from "react-native-paper";
// import { getCartProducts } from "../Actions/CartActions";

// import {admin-panel-settings} from "react-native-vector-icons/MaterialIcons";
import {
    AntDesign,
    MaterialCommunityIcons,
    FontAwesome,
    MaterialIcons,
} from "@expo/vector-icons";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View } from "react-native";

export default function CustomDrawerContent(props) {

    useEffect(() => {

    });

    return (
        <>
            <DrawerContentScrollView {...props}>
                {/* <Avatar.Image
                    // style={{ flexDirection: "row", alignItems: "center" }}
                    size={130}
                    source={require("../../assets/Logo.png")}
                    style={{
                        backgroundColor: "transparent",
                        position: "relative",
                        top: 30,
                        left: "23%",
                    }}
                /> */}
                <View style={{ marginTop: 50 }}></View>
                <DrawerItem
                    icon={({ color, size }) => (
                        <AntDesign name="home" size={24} color="green" />
                    )}
                    label="Home"
                    onPress={() => {
                        props.navigation.navigate("Home");
                    }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <AntDesign name="home" size={24} color="green" />
                    )}
                    label="Become a Service Provider"
                    onPress={() => {
                        props.navigation.navigate("AddServices");
                    }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <AntDesign name="home" size={24} color="green" />
                    )}
                    label="Active Services"
                    onPress={() => {
                        props.navigation.navigate("ActiveService");
                    }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <AntDesign name="home" size={24} color="green" />
                    )}
                    label="OrderList"
                    onPress={() => {
                        props.navigation.navigate("OrderList");
                    }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <AntDesign name="home" size={24} color="green" />
                    )}
                    label="RequestScreen"
                    onPress={() => {
                        props.navigation.navigate("RequestScreen");
                    }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <AntDesign name="home" size={24} color="green" />
                    )}
                    label="PendingRequestScreen"
                    onPress={() => {
                        props.navigation.navigate("PendingRequestScreen");
                    }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <AntDesign name="home" size={24} color="green" />
                    )}
                    label="EditProfile"
                    onPress={() => {
                        props.navigation.navigate("EditProfile");
                    }}
                />
                {/* <DrawerItem
          icon={({ color, size }) => (
            <AntDesign name="shoppingcart" size={24} color="green" />
          )}
          label="My Cart"
          onPress={() => {
            props.navigation.navigate("Cart");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="border-color"
              size={24}
              color="green"
            />
          )}
          label="My Order"
          onPress={() => {
            handleRoutesThatRequiredSignInUser("Order");
          }}
        />
 */}

                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="google-maps"
                            size={24}
                            color="green"
                        />
                    )}
                    label="HomePage"
                    onPress={() => {
                        props.navigation.navigate("HomePage");
                    }}
                />



                {/* <DrawerItem
          icon={({ color, size }) => (
            <AntDesign name="questioncircleo" size={24} color="green" />
          )}
          label="About Us"
          onPress={() => {
            props.navigation.navigate("aboutus");
          }}
        /> */}

                {/* <DrawerItem
          icon={({ color, size }) => (
            <MaterialIcons name="contact-page" size={24} color="green" />
          )}
          label="Products"
          onPress={() => {
            props.navigation.navigate("Products");
          }}
        />  */}


                {/* <DrawerItem
          icon={({ color, size }) => (
            <AntDesign name="questioncircleo" size={24} color="black" />
          )}
          label="MapView"
          onPress={() => {
            props.navigation.navigate("mapview");
          }}
        />  */}
                {/* {user.isSignedIn === false ? (
                    <>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialIcons name="account-circle" size={24} color="green" />
                            )}
                            label="Signup"
                            onPress={() => {
                                props.navigation.navigate("Signup");
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <FontAwesome name="sign-in" size={24} color="green" />
                            )}
                            label="SignIn"
                            onPress={() => {
                                props.navigation.navigate("Login");
                            }}
                        />

                    </>
                ) : (
                    <DrawerItem
                        icon={({ color, size }) => (
                            <FontAwesome name="sign-out" size={24} color="green" />
                        )}
                        label="Sign Out"
                        onPress={handleLogout}
                    />
                )}
                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialIcons name="contact-page" size={24} color="green" />
                    )}
                    label="Contact Us"
                    onPress={() => {
                        props.navigation.navigate("contactus");
                    }}
                /> */}
            </DrawerContentScrollView>
        </>
    );
}
