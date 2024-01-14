import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import AboutScreen from '../screen/AboutScreen';
import SettingScreen from '../screen/SettingScreen';
import HomeScreen from '../screen/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Conta from '../screen/Conta';
import AccountScreen from '../screen/AccountScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='HomeRoute'>
            <Stack.Screen name="HomeRoute" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Conta" component={Conta} options={{ headerShown: false, tabBarVisible: false, }} />
        </Stack.Navigator>
    )
}


const AboutStack = () => {
    return (
        <Stack.Navigator initialRouteName='AboutRoute'>
            <Stack.Screen name="AboutRoute" component={AboutScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const SettingStack = () => {
    return (
        <Stack.Navigator initialRouteName='SettingRoute'>
            <Stack.Screen name="SettingRoute" component={SettingScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
const AccountStack = () => {
    return (
        <Stack.Navigator initialRouteName='AccountRoute'>
            <Stack.Screen name="AccountRoute" component={AccountScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}



const DashNav = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? require('../../assets/home.png') : require('../../assets/home1.png');
                    } else if (route.name === 'About') {
                        iconName = focused ? require('../../assets/description.png') : require('../../assets/description1.png');
                    }
                    else if (route.name === 'Settings') {
                        iconName = focused ? require('../../assets/settings.png') : require('../../assets/settings1.png');
                    }
                    else if (route.name === 'Account') {
                        iconName = focused ? require('../../assets/settings.png') : require('../../assets/settings1.png');
                    }

                    // Return the customized icon component
                    return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="About" component={AboutStack} />
            <Tab.Screen name="Settings" component={SettingStack} />
            <Tab.Screen name="Account" component={AccountStack} />
        </Tab.Navigator>
    );
};

export default DashNav;
