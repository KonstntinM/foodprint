import { useNavigation } from '@react-navigation/native';
const navigation = useNavigation();

import productService from './productService';

export default async function handleBarcode (barcode) {
    const product = await productService.getProductByBarcode(barcode)

    if (product.status == 404) {
        return navigation.navigate('home', { message: "UPS!"});;
    } else if (product.status == 500) {
        return navigation.navigate('home', { message: "UPS! 2"});;
    }

    console.log("Produktdetails erfolgreich empfangen. Navigation zu 'product'. Produktdetails:", product);
    navigation.navigate('product', product);
}