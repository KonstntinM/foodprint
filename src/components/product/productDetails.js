import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import Packaging from './details/packaging';
import Ingredients from './details/ingredients';

export default function productDetails(props) {

    return (
        <View style={styles.container}>
            <Ingredients ingredients={props.ingredients}/>
            <Packaging packaging={props.packaging}/>
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