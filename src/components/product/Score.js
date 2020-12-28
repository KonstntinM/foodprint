import React, { Component } from 'react';
import LottieView from 'lottie-react-native';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default class Score extends Component {

    state = {
        barcodeScanned: false
    }

    componentDidMount = () => {
        this.setState({ barcodeScanned: false })
    }

    render() {
        return (
            <View style={styles.container}>
                <LottieView source={require('../../../assets/animations/score_01.json')} style={styles.animation} autoPlay loop/>  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center"
    },
    animation: {
        width: 290
    }
});