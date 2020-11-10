import { Layout } from '@ui-kitten/components';
import React, { Component } from 'react';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Header from '../components/base/header'


import BarcodeScanner from '../components/BarcodeScanner'


export default class ScannerScreen extends Component {

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <Header/>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
          <BarcodeScanner style={styles.scanner} />
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
  },
  scanner: {
    marginTop: 10
  }
});