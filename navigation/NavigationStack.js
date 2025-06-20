import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Test from "../screens/Test";
import LoginScreen from "../screens/LoginScreen";
import NavigationTabs from "./NavigationTabs";

const Stack = createNativeStackNavigator();

export default function NavigationStack(){
    return(
        <Stack.Navigator initialRouteName="HomeTabs">

            <Stack.Screen name="HomeTabs" component={NavigationTabs} options={{ headerShown: false }}  />

            <Stack.Screen name="Test" component={Test} options={{ headerShown: false }}  />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}  />
        </Stack.Navigator>
    )
}