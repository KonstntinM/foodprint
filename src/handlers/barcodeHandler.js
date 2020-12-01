import openFoodFacts from '../services/openFoodFacts'
import * as navigator from './navigationRef'

//  This function is called if a barcode was scanned. 
//  It calls the openFoodFacts API, calculates the carboon value and loads the next page.
//  
//  parameters: barcode obj. 

export default async function (barcode) {
    console.debug("The barcode handler was called.")

    const barcodeData = barcode[0].data
    const product = await openFoodFacts.getProductByBarcode(barcodeData);

    await product.calculateFootprint()

    console.debug("The final Product is", JSON.stringify(product))
    navigator.navigate('Product', { product: product })
}