import { Layout } from '@ui-kitten/components';
import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';


export default class HistoryScan extends Component {

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text category='h1'>History</Text>
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
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});