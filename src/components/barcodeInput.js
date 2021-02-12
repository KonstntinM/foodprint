import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Scanner from './scanner';

export default class barcodeInput extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    var barcodeTextInput;

    if (this.props.withTextInput) {
      barcodeTextInput = (
        <View style={styles.barcodeTextInput}>
          <Text style={styles.enterBarcodeText}>or enter your barcode</Text>
          <View style={styles.enterBarcodeInputWrapper}>
            <View style={styles.home_gruppe7_gruppe4_gruppe2_rechteck3}></View>
            <Text style={styles.home_gruppe7_gruppe4_gruppe2_enterBarcode}>Enter Barcode ...</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.scannerWrapper}>
          <View style={this.props.withBorder ? styles.cameraBorder : styles.scannerWrapper}>
            <Scanner style={styles.scanner} />
          </View>
        </View>
        {barcodeTextInput}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  "container": {
    position: 'relative',
    top: 310,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  "barcodeTextInput": {
    "backgroundColor": "transparent",
    "width": 316,
    "height": 316,
  },
  scanner: {
  },
  scannerWrapper: {
  },
  "cameraBorder": {
    "backgroundColor": "transparent",
    borderWidth: 10,
    borderRadius: 37,
    borderColor: 'rgba(0, 86, 80, 1)',
    "width": 222,
    "height": 222,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  "enterBarcodeText": {
    "opacity": 0.800000011920929,
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Raleway",
    "textAlign": "left",
    "lineHeight": 25,
    "width": 153,
    "height": 28,
    "left": 84,
    "top": 237.5
  },
  "enterBarcodeInputWrapper": {
    "opacity": 1,
    "backgroundColor": "transparent",
    "width": 315,
    "height": 45,
    "left": 0,
    "top": 271
  },
  "home_gruppe7_gruppe4_gruppe2_rechteck3": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 16,
    "borderTopRightRadius": 16,
    "borderBottomLeftRadius": 16,
    "borderBottomRightRadius": 16,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 315,
    "height": 45,
    "left": 0,
    "top": 0
  },
  "home_gruppe7_gruppe4_gruppe2_enterBarcode": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(188, 188, 188, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Open Sans",
    "textAlign": "left",
    "lineHeight": 25,
    "width": 115,
    "height": 30,
    "left": 30,
    "top": 10.5
  },
});
