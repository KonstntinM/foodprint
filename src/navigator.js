import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text, Icon  } from '@ui-kitten/components';

import ScannerScreen from './screens/ScannerScreen'
import HistoryScreen from './screens/HistoryScreen'
import SettingsScreen from './screens/SettingsScreen'
import ProductScreen from './screens/ProductScreen'


const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Home" icon={ScannerIcon}/>
    <BottomNavigationTab title="History" icon={HistoryIcon}/>
    <BottomNavigationTab title="Settings" icon={SettingsIcon}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={ScannerScreen}/>
    <Screen name='History' component={ProductScreen}/>
    <Screen name='Settings' component={SettingsScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);

// Icon definition

const ScannerIcon = (props) => (
  <Icon {...props} name='loader-outline'/>
);

const HistoryIcon = (props) => (
  <Icon {...props} name='clock-outline'/>
);

const SettingsIcon = (props) => (
  <Icon {...props} name='settings-2-outline'/>
);