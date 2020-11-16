//  This function is called if a barcode was scanned. 
//  It calls the openFoodFacts API, calculates the carboon value and loads the next page.
//  
//  parameters: barcode obj.

export default function (barcode) {
    console.debug("The barcode handler was called.")

    const barcodeData = barcode[0].data
    const product = openFoodFacts.getProductByBarcode(barcodeData);

    product.calculateFootprint()

    console.log("The Foodprint of the product is", product.score)
}