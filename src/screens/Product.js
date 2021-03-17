import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight } from 'react-native';

import Header from '../components/product/productHeader';
import Score from '../components/product/productScore';
import Nutritions from '../components/product/productNutritions';
import Details from '../components/product/productDetails';

export default class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount () {
        var product = this.props.route.params.product;
        console.log("The product screen was called with the following product.", product)
        return product;
    }

    render() {
        return (
            <ScrollView bounces={false} style={styles.product}>
                <Header name={"Milk"} category={"some food"} image={"https://cdn.pixabay.com/photo/2016/08/07/15/01/blueberries-1576405_960_720.jpg"} />
                <View style={styles.productBody}>
                    <Score style={styles.productInformation} score={{ total: 500, ingredients: 100, shipping: 200, packaging: 300 }}/>
                    <Details style={styles.productInformation}/>
                    <Nutritions style={styles.productInformation}/>
                </View>
                    
                <Text style={styles.categories}>#vegan #vegtable #Food #usw</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    productBody: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    categories: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 25,
        "fontSize": 12,
        "fontWeight": "900",
        "fontStyle": "normal",
        "fontFamily": "Raleway",
        "textAlign": "left",
        
    }
});