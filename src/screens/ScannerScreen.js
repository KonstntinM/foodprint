import { Layout } from '@ui-kitten/components';
import React, { Component } from 'react';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';

import Header from '../components/base/header'
import BarcodeScanner from '../components/BarcodeScanner'


export default class ScannerScreen extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header/>
        <Layout style={styles.body}>
          <BarcodeScanner style={styles.scanner} />
        </Layout>
        <View style={styles.info}>
          <View style={styles.animation}>
              <LottieView source={require('../../assets/animations/world-loader.json')} autoPlay loop/>  
          </View>
          <View style={styles.textBox}>
                <Text style={styles.text}>Start scanning now!</Text>
                <Text style={styles.text}>Thanks for using Foodprint. With your commitment you help to protect our planet.</Text>
          </View> 
        </View>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  scanner: {
    marginTop: 10
  },
  info: {
    flexDirection: 'row'
  },
  animation: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    textAlign: 'right',
  },
  textBox: {
    flexDirection: 'column'
  }
});