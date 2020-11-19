
const baseUrl = "https://api.foodprint.konstantinmarx.de";

//  This is a wrapper for the foodprint API, that can be found at '$project/backend'.
//  It communicates in JSON format.
//  
//  More informations can be found on https://github.com/KonstantinM/foodprint

export default {
    getProductScore
};

function getProductScore (barcode) {

    const urlPath = "/product/"
    const url = baseUrl + urlPath + barcode

    var response = fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Application': 'Foodprint'
        }
    })

    if (response.status != 200) return undefined

    response = response.json()
    return response.value
}