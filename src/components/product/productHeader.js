import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button, Image, ImageBackground } from 'react-native';

export default function productHeader(props) {

    return (
        <ImageBackground source={{ uri: props.image}} style={styles.container} blurRadius={50}>
            <SafeAreaView>
                <Image source={{ uri: props.image}} style={styles.imageMain} />
            </SafeAreaView>
            <View style={styles.basicInfoContainer}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.category}>{props.category}</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    "container": {
        "width": 375,
        "height": 350,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    "imageMain": {
        "position": "relative",
        borderRadius: 53,
        "width": 200,
        "height": 200,
        marginTop: 5,
        marginBottom: 8
    },
    "basicInfoContainer": {
        "position": "relative",
        "width": 160,
        "height": 95,
        alignSelf: "baseline",
        marginLeft: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline'
    },
    "name": {
        "fontSize": 60,
        "fontWeight": "700",
        "fontStyle": "normal",
        "fontFamily": "LEMON MILK",
        "textAlign": "left",
        "width": 160,
        "height": 65
    },
    "category": {
        "fontSize": 16,
        "fontWeight": "700",
        "fontStyle": "normal",
        "fontFamily": "Raleway",
        "textAlign": "left",
        "width": 86,
        "height": 19,
    },
});
