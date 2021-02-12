import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import Packaging from './details/packaging';
import Ingredients from './details/ingredients';

export default function productDetails(props) {

    return (
        <View style={styles.container}>
            <Ingredients ingredients={[{title: "Milch"}, {title: "Milchpulver"}, {title: "Milchzucker"}, {title: "Milchkonzentrat"}, {title: "Milchersatzprodukt"}, {title: "Milchzähne"}, {title: "Milchschaum"}, {title: "Milcherzeugnisse"}]}/>
            <Packaging packaging={[{title: "Hello World"}, {title: "Bello Borld"}, {title: "Cello"}, {title: "Dello Dorld"}]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    detail: {
        marginTop: 20
    }
});