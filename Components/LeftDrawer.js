import React, { useContext } from "react";
import { View, Text, Button, useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./Login"
import Home from "./Home"

const Drawer = createDrawerNavigator();

function LeftDrawer() {
    const dimensions = useWindowDimensions();

    const isLargeScreen = dimensions.width >= 1920;

    return (
        <Drawer.Navigator
            openByDefault
            drawerType={isLargeScreen ? 'permanent' : 'back'}
            drawerStyle={isLargeScreen ? {width: '30%'} : { width: '40%' }}
            overlayColor="transparent"
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
    );
}

export default LeftDrawer;