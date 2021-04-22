import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight } from 'react-native';
import BouncingPreloader from 'react-native-bouncing-preloaders';

export default class Loading extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <BouncingPreloader
                    icons={[
                        'https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png',
                        'https://www.shareicon.net/data/128x128/2016/05/21/768370_food_512x512.png',
                        'https://www.shareicon.net/data/128x128/2016/11/15/852960_coffee_512x512.png'
                    ]}
                    leftRotation="-680deg"
                    rightRotation="360deg"
                    leftDistance={-180}
                    rightDistance={-250}
                    speed={1000}
                />
                <Text>We are currently retrieving data from our server, this seems to be taking longer than usual.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 350,
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});