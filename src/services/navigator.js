import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import HistoryScreen from '../screens/History';
import SettingsScreen from '../screens/Settings';
import ProductScreen from '../screens/Product';

const Stack = createStackNavigator();

export default function navigationContainer () {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: 'white', flex: 1 }}}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="History" component={HistoryScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Product" component={ProductScreen} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
}