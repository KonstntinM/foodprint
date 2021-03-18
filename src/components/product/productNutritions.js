import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

export default function productNutritions(props) {

    return (
        <View style={styles.container}>
            {props.nutritions.map((nutrition, i) => {         
                return (
                    <View key={i} style={styles.nutritionContainer}>
                        <ProgressCircle
                            percent={nutrition.per100g}
                            radius={28}
                            borderWidth={5}
                            color="#005650"
                            shadowColor="#999"
                            bgColor="#fff"
                            outerCircleStyle={styles.percentageOuterCircle}
                            containerStyle={styles.percentageContainerStyle}
                        >
                            <Text>{nutrition.per100g}%</Text>
                        </ProgressCircle>
                        <Text style={styles.nutritionText}>{nutrition.name}</Text>
                    </View>
                ) 
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        width: 333,
        marginTop: 40,
        maxWidth: 300,
    },
    "nutritionContainer": {
        "position": "relative",
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 100,
        marginTop: 15
    },
    "percentageOuterCircle": {
    },
    "percentageContainerStyle": {
    },
    "nutritionText": {
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(0, 0, 0, 1)",
        "fontSize": 20,
        "fontWeight": "700",
        "fontStyle": "normal",
        "fontFamily": "Raleway",
        "textAlign": "left",
        marginTop: 10
    },
});