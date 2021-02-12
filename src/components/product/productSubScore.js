import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

export default function productSubScore(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.score}>{props.score}</Text>
            <Text style={styles.title}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
      "container": {
        "width": 65,
        "height": 56,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
      },
      "title": {
        "fontSize": 12,
        "fontWeight": "700",
        "fontStyle": "normal",
        "fontFamily": "Raleway",
        "textAlign": "left",
        marginLeft: 3,
      },
      "score": {
        "fontSize": 36,
        "fontWeight": "700",
        "fontStyle": "normal",
        "fontFamily": "Raleway",
        "textAlign": "left",
        "width": 61,
        "height": 42
      }
});
