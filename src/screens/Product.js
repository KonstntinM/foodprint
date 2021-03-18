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
            product: null
        };
    }

    UNSAFE_componentWillMount() {
        this.state.product = this.props.route.params.product;
        console.log("The product screen was called with the following product.", this.props.route.params.product)
        return product;
    }

    render() {
        return (
            <ScrollView bounces={false}>
                <Header name={this.state.product.name} category={this.state.product.categories[0]} image={this.state.product.image}/>
                <View style={styles.productBody}>
                    <Score style={styles.productInformation} score={this.state.product.score}/>
                    <Details style={styles.productInformation} ingredients={this.state.product.ingredients} packaging={this.state.product.packaging}/>
                    <Nutritions style={styles.productInformation} nutritions={this.state.product.nutritions}/>
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