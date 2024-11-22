import React from "react";
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./Home.js";
import Add from "./Add.js";
import Edit from "./Edit";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: true}}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Add' component={Add}/>
                <Stack.Screen name='Edit' component={Edit} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navigation;
