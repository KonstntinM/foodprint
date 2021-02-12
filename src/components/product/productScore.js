import React, { Component, useRef } from 'react';
import { Text, View, StyleSheet, Button, Image, Animated } from 'react-native';
import Svg, { Path as SvgPath } from 'react-native-svg';

import SubScore from './productSubScore';

export default class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emojiAnimation: useRef(new Animated.Value(3)).current
    };
  }

  render() {

    // Value (min-max):(5-1500)= (Max = 1500) 1500 = 217 1500 = 100% 1500/1500 = 1 ; 1000
    let value = 217*(this.props.score.total/1500)
    if (value>217) value = 217;

    Animated.timing(this.state.emojiAnimation, {
      toValue: value,
      duration: 1500,
    }).start();

    return (
        <View style={styles.container}>
            <View style={styles.scoreFeedback}>
                <View style={styles.scoreBar}>
                  <Image source={require("../../../assets/icons/emojis/thumbs-up.png")} style={[styles.emoji, { left: this.state.emojiAnimation }]}/>
                </View>
            </View>
            <View style={styles.scoreTextContainer}>
                <View style={styles.scoreMainContainer}>
                    <Text style={styles.scoreMainScore}>{this.props.score.total}</Text>
                    <Text style={styles.scoreMainTitle}>Score</Text>
                </View>
                <View style={styles.scoreSubContainer}>
                    <SubScore score={this.props.score.ingredients}>Ingredient</SubScore>
                    <SubScore score={this.props.score.packaging}>Packaging</SubScore>
                    <SubScore score={this.props.score.shipping}>Shipping</SubScore>
                </View>
            </View>
        </View>
    );
  };
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 50
    },
    // animation from X to 217
    emoji: {
      position: 'relative',
      width: 50,
      height: 50,
      top: -13
    },
    scoreTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 10
    },
    "scoreMainContainer": {
        "width": 107,
        "height": 94,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    "scoreMainTitle": {
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(0, 0, 0, 1)",
        "fontSize": 20,
        "fontWeight": "700",
        "fontStyle": "normal",
        "fontFamily": "Raleway",
        "textAlign": "left",
        "width": 55,
        "height": 24,
    },
    "scoreMainScore": {
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(0, 0, 0, 1)",
        "fontSize": 60,
        "fontWeight": "700",
        "fontStyle": "normal",
        "fontFamily": "Raleway",
        "textAlign": "left",
        "width": 107,
        "height": 70,
    },
    "scoreFeedback": {
        display: 'flex',
        justifyContent: 'center'
    },
    scoreBar: {
      backgroundColor: 'red',
      width: 269,
      height: 29,
      "shadowColor": "rgb(0,  0,  0)",
      "shadowOpacity": 0.1607843137254902,
      "shadowOffset": {
          "width": 3,
          "height": 3
      },
      borderRadius: 100,
      "backgroundColor": "rgba(255, 7, 75, 1)",
    },
    "scoreSubContainer": {
        "width": 237,
        "height": 56,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }
});
