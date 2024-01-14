import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ForgetScreen, LoginScreen, SignupScreen} from '../navigation';

const Stack = createStackNavigator();
const MainNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={LoginScreen} name="LoginScreen" />
      <Stack.Screen component={SignupScreen} name="SignupScreen" />
      <Stack.Screen component={ForgetScreen} name="ForgetScreen" />
    </Stack.Navigator>
  );
};

export default MainNav;
