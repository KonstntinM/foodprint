import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class Header extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>
                    Foodprint
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        
    },
    headerText: {
        margin: 30,
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Roboto-Medium'
    }
  });