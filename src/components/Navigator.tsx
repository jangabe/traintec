import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./HomeScreen";
import { SecondaryScreen } from "./SecondaryScreen";
import  LoginScreen from "./LoginScreen";

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                },
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
            />
            <StackNavigator.Screen
                name="Secondary"
                component={SecondaryScreen}
            />

            <StackNavigator.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
