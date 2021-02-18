import React, { useContext } from "react";
import { View, Text, Button, useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppContext } from '../App';

import Login from "./Login";
import Home from "./Home";
import Register from "./Register" ;
import Logout from "./Logout";

const Drawer = createDrawerNavigator();

function LeftDrawer() {
    const state = useContext(AppContext);
    
    const dimensions = useWindowDimensions();

    const isLargeScreen = dimensions.width >= 1920;

    return (
        <Drawer.Navigator
            drawerType={isLargeScreen ? 'permanent' : 'back'}
            drawerStyle={isLargeScreen ? {width: '30%'} : { width: '40%' }}
            overlayColor="transparent"
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Login" component={Login} />
            { state.loginState.isLoggedIn || <Drawer.Screen name="Register" component={Register} />}
            { state.loginState.isLoggedIn && <Drawer.Screen name="Logout" component={Logout} />}
        </Drawer.Navigator>
    );
}

export default LeftDrawer;