import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function Packaging(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Packaging</Text>
            <View style={styles.tagContainer}>
                {props.packaging.map((APackaging, i) => {         
                    return (
                        <View key={i} style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => alert('Packaging clicked!')}>
                                <Text style={styles.packagingTitle}>{APackaging.title}</Text>
                            </TouchableOpacity>
                            {/*<Button style={styles.packagingButton} title={APackaging.title}></Button>*/}
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
        backgroundColor: '#ffc478',
        margin: 4,
        borderRadius: 100,
        "shadowColor": "rgb(0,  0,  0)",
        "shadowOpacity": 0.1207843137254902,
        "shadowOffset": {
            "width": 2,
            "height": 2
        },
    },
    packagingTitle: {
        "fontSize": 12,
        "fontWeight": "900",
        "fontStyle": "normal",
        "fontFamily": "Raleway",
        "textAlign": "left",
    },
    packagingButton: {
        backgroundColor: 'red',
        color: 'red'
    }
});