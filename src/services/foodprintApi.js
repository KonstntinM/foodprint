
const baseUrl = "https://api.foodprint.konstantinmarx.de";

//  This is a wrapper for the foodprint API, that can be found at '$project/backend'.
//  It communicates in JSON format.
//  
//  More informations can be found on https://github.com/KonstantinM/foodprint

export default {
    getProductScore
};

async function getProductScore (barcode) {

    const urlPath = "/product/"
    const url = baseUrl + urlPath + barcode

    var response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Application': 'Foodprint'
        }
    })

    if (!response.ok) return null

    response = await response.json()
    return response.value
}