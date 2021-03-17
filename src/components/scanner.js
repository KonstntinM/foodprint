import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacityBase } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import productService from '../services/productService';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Scanner() {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    productService.getProductByBarcode("737628064502")
      .then((product) => {
        console.log("Produktdetails erfolgreich empfangen. Navigation zu 'product'. Produktdetails:", product);
        navigation.navigate('Product', { product: product });
      })
      .catch((error) => {
        console.error(error)
      })

    /*if (product.status && product.status == 404) {
        return navigation.navigate('home', { message: "UPS!"});;
    } else if (product.status && product.status == 500) {
        return navigation.navigate('home', { message: "UPS! 2"});;
    }*/

    
  };

  if (hasPermission === null) {
    return <Image source={require('../../assets/img/camera.png')} />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.scanner]}
        type={BarCodeScanner.Constants.Type.back}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    "width": 179,
    "height": 179,
    overflow: 'hidden',
    borderRadius: 30,
  },
  scanner: {
    width: 195,
    height: 195,
    borderRadius: 37,
    overflow: 'hidden'
  }
});
