import foodprintApi from '../services/foodprintApi';
import Ingredient from '../storage/IngredientHandler'
import Package from '../storage/PackageHandler'

//  This Product Object represents a scanned product, whos product informations were called from the openFoodFacts api.
//  Lateron the carbon footprint will be attached to this object. 

export default class Product {

    // This API does not require any authentication.

    constructor (productData) {

        console.debug("A new Product will be created! The recived data is " + JSON.stringify(productData));

        this.name = productData.product_name;
        this.barcode = productData.code;
        this.image = productData.image_front_url;
        this.ingredients = productData.ingredients_tags;
        this.packaging = productData.packaging_tags;
        this.categories = productData.categories_hierarchy;

        // restructuring some values, so they will be easyer to process

        // Archived -> Will maybe used in a further version...
        // for (categorie in this.categories) {
        //     categorie = categorie.substring(categorie.indexOf(":") + 1); // removes the language code in front of the categorie
        // }
        // 
        // for (ingredient in this.ingredients) {
        //     ingredient = ingredient.substring(ingredient.indexOf(":") + 1); // removes the language code in front of the categorie
        // }

        if ((!this.image.includes("https")) && this.image.includes("http")) {
            this.image.replace("http", "https");
        }

        console.debug("The Product was created. The name of the Product is " + this.name);
    }

    calculateFootprint () {

        // TODO Check wether or not the product has a fixed footprint

        let product = foodprintApi.getProductScore(this.barcode)
        if (product) {
            this.score = product.value
            return this.score
        }

        // calculate

        let score = 0;

        this.convertIngredients()
        this.convertPackaging()
        
        // add categorie values
        for (i in this.ingredients) {
            score = score + this.ingredients[i].value;
        }

        // add packaging values
        for (p in this.packaging) {
            score = score + this.packaging[p].value;
        }

        console.log("The Foodprint of the product is", score)

        this.score = score
        return this.score
    }

    /**
     * Converts the attached ingredientIds into category objects. 
     */
    convertIngredients () {

        console.debug("Convert ingredients...");

        for (i in this.ingredients) {
            // check wether or not its already converted
            if (this.ingredients[i] instanceof String) continue

            let ingredient = Ingredient.getIngredientById(this.ingredients[i])
            this.ingredients[i] = ingredient
        }

        console.debug("Converting finished!")
    }

    /**
     * Converts the attached packagingIds into category objects.
     */
    convertPackaging () {

        console.debug("Convert packaging...");

        for (p in this.packaging) {
            // check wether or not its already converted
            if (this.packaging[p] instanceof String) continue

            let _package_ = Package.getPackageById(this.packaging[p])
            this.packaging[p] = _package_
        }

        console.debug("Converting finished!")
    }
}