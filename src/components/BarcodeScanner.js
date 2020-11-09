import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

import openFoodFacts from '../services/openFoodFacts'

export default class BarcodeScan extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            torchOn: true,
            barcodeScanned: false
        }
    }

    onBarCodeRead = (barcode) => {

        if (this.state.barcodeScanned) {
            console.warn("There was alreade a barcode in front of me!");
            return []
        }

        this.setState({ barcodeScanned: true })

        // Check wether or not the Barcode is an EAN barcodee
        if (barcode[0].type != "EAN_13") {
            return [] // If the Barecode isn't of an EAN type, the process will be stopped
        }

        const barcodeData = barcode[0].data
        openFoodFacts.getProductByBarcode(barcodeData)
    }

    restartBarCode = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        this.onBarCodeRead(barcodes)
                    }}
                    captureAudio={false}
                />
            </View>
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