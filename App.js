import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import { BarCodeScanner } from 'expo-barcode-scanner';

import NavigationContainer from './src/services/navigator'
import NavigationBar from './src/components/navigation/navigationBar'

export default class App extends Component {

  state = {
    fontsLoaded: false,
    firebaseInitialized: false,
    hasCameraPermission: null
  };

  async loadFonts() {
    await Font.loadAsync({
      // Load fonts from static resources
      LemonMilk: require('./assets/fonts/LEMONMILK-Medium.ttf'),
      Raleway: require('./assets/fonts/Raleway-Regular.ttf'),
      'Open Sans': require('./assets/fonts/OpenSans-Regular.ttf')
    });
    this.setState({ fontsLoaded: true });
  }

  async requestPermissions () {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    this.state.hasCameraPermission = status === 'granted';
  }

  componentDidMount() {
    this.loadFonts();
    this.requestPermissions();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <NavigationContainer style={styles.container}/>
          <NavigationBar style={styles.navigationBar}/>
        </View>
      );
    } else {
      return null;
    } 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  navigationBar: {
    position: 'absolute',
    bottom: 0
  }
});
