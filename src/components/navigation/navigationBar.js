import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

import * as RootNavigation from '../../services/rootNavigation';

export default function NavigationBar() {

  const myFunction = () => {
    console.log('Function called');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => alert('Image clicked!')}>
        <Image style={styles.icon} source={require('../../../assets/icons/home.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => myFunction()}>
        <Image style={styles.icon} source={require('../../../assets/icons/history.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => RootNavigation.navigate('settings')}>
        <Image style={styles.icon} source={require('../../../assets/icons/settings.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 55,
    height: 55,
    marginLeft: 17,
    marginRight: 17,
    marginTop: 10
  },
  isActive: {
    tintColor: 'blue'
  }
});