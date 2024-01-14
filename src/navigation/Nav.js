import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DashNav from './DashNav';
import MainNav from './MainNav';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="DashNav"
          component={DashNav}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="MainNav"
          component={MainNav}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
