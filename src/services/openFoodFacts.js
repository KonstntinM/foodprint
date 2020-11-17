
const baseUrl = "https://world.openfoodfacts.org/api/v0";

//  The Open Food Facts API is a free database for food.
//  It communicates in JSON format and offers besides the product name and product name also product categories, which we will use in this case.
//  
//  
//  ** All data is published under the Open Data Commons Open Database License (ODbL) v1.0 (https://opendatacommons.org/licenses/odbl/1-0/)
//  
//  More informations can be found on https://de.openfoodfacts.org/data 

import Product from '../models/product';

export default {
    getProductByBarcode 
};

async function getProductByBarcode (barcode) {

    console.log("The method getProductByBarcode was called. The data is " + JSON.stringify(barcode));

    const urlPath = "/product/"
    const url = baseUrl + urlPath + barcode + ".json"

    console.debug("Okay, we are just before calling our API. If this is the last thing I'll write I want you to know that the URL I am calling is " + url + " .");

    var response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Application': 'Foodprint'
        }
    })

    response = await response.json()

    console.debug("Huston! We have a response! The response is " + JSON.stringify(response));

    //Todo! Add request success check!

    var product = new Product(response.product)
    console.debug("Our newly created product is " + JSON.stringify(product)); 

    return product
}