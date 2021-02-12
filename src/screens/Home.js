import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import MainHeader from '../components/mainHeader';
import RecentPosts from '../components/recentPosts';
import BarcodeInput from '../components/barcodeInput';

export default class Home extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }

  render() {
    return (
    <View style={styles.home}>
      <MainHeader slogan="Scan and 
Score">
        <RecentPosts/>
      </MainHeader>
      
      <BarcodeInput style={styles.BarcodeInput} withTextInput={false} withBorder={false} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
  }
});