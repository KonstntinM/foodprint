import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';

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
                <Text class="divider_text">BarcodeScanner</Text> 
                <View style={styles.cameraWrapper}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.cameraView}
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
                    >
                        <Image style={styles.borderImage} source={require("../../assets/img/QR-Circle.png")} />
                    </RNCamera>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    // Styles from https://stackoverflow.com/questions/45518740/how-can-i-add-a-border-frame-in-the-camera

    container: {
        flex: 1,
    },
    cameraWrapper: {
        height: 240,
        width: 240,
        borderRadius: 120,
        overflow: 'hidden'
    },
    cameraView: {
        height: 240,
        width: 240,
        alignContent: 'center'
    },
    borderImage: {
        height: 240,
        width: 240
    }
});