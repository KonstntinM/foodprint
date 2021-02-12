import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default class MainHeader extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bgHeader}></View>
        <SafeAreaView style={styles.title}>
          <Text style={styles.slogan}>
            {this.props.slogan}
          </Text>
        </SafeAreaView>
        <View style={styles.children}>
          {this.props.children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  "children": {
    marginTop: 40,
  },
  "bgHeader": {
    "position": "absolute",
    "backgroundColor": "rgba(0, 86, 80, 1)",
    "width": 375,
    "height": 263,
  },
  "title": {
    "position": "relative",
    "left": 11.01,
    "top": 45
  },
  "slogan": {
    "opacity": 1,
    "position": "absolute",
    "color": "white",
    "fontSize": 42,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": 'LemonMilk',
    "textAlign": "left",
    "left": 19.99,
  }
});
