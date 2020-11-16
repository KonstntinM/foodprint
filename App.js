/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './src/navigator';
import * as eva from '@eva-design/eva';

const Realm = require('realm');

import IngredientSchema from './src/storage/schemas/IngredientSchema'
import PackageSchema from './src/storage/schemas/PackageSchema'

export default class foodprint extends Component {

  // setting up the local database (realm.js)

  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  componentDidMount() {

    Realm.open({
      schema: [IngredientSchema, PackageSchema]
    }).then(realm => {
      this.setState({ realm });
    });
  }

  componentWillUnmount() {
    // Close the realm if there is one open.
    const { realm } = this.state;
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }

  // render the app

  render() {

    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <AppNavigator />
        </ApplicationProvider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

//export default App;
