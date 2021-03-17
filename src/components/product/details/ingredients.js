import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function Ingredients(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingredients</Text>
            <View style={styles.tagContainer}>
                {props.ingredients.map((ingredient, i) => {         
                    return (
                        <View key={i} style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => alert('Ingredients clicked!')}>
                                <Text style={styles.IngredientsTitle}>{ingredient.title}</Text>
                            </TouchableOpacity>
                            {/*<Button style={styles.IngredientsButton} title={AIngredients.title}></Button>*/}
                        </View>
                    ) 
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        maxWidth: 333,
        marginTop: 33
    },
    title: {
        marginLeft: 20,
        marginBottom: 5,
        "fontSize": 20,
        "fontWeight": "400",
        "fontStyle": "normal",
        "fontFamily": "LemonMilk",
    },
    tagContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    buttonContainer: {
        padding: 10,
        marginTop: 12,
        backgroundColor: '#bbdfc8',
        margin: 4,
        borderRadius: 100,
        "shadowColor": "rgb(0,  0,  0)",
        "shadowOpacity": 0.1207843137254902,
        "shadowOffset": {
            "width": 2,
            "height": 2
        },
    },
    IngredientsTitle: {
        "fontSize": 12,
        "fontWeight": "900",
        "fontStyle": "normal",
        "fontFamily": "Raleway",
        "textAlign": "left",
    },
    IngredientsButton: {
        backgroundColor: 'red',
        color: 'red'
    }
});