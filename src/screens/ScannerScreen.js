import { Layout } from '@ui-kitten/components';
import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';


import BarcodeScanner from '../components/BarcodeScanner'


export default class ScannerScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      torchOn: true,
      barcodeScanned: false
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text category='h1'>Scanner</Text>
          <BarcodeScanner class="scanner" />
        </Layout>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  }
});