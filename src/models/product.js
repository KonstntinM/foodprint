import Ingredient from '../storage/IngredientHandler'

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

        // calculate
        let score = 0;

        console.log(score);

        this.convertIngredients()
        
        // add categorie values
        for (i in this.ingredients) {
            console.log(JSON.stringify(this.ingredients[i]), score);
            score = score + this.ingredients[i].value;
        }

        // add packaging values
        //for (packaging in this.packaging) {
        //    score = score + packaging.value;
        //}

        console.log("The Foodprint of the product is", score)

        this.score = score
        return this.score
    }

    /**
     * Converts the attached categoryIds into category objects. 
     */
    convertIngredients () {

        console.debug("Converting categories...");

        for (i in this.ingredients) {
            // check wether or not its already converted
            if (this.ingredients[i] instanceof String) continue

            let ingredientObj = Ingredient.getIngredientById(this.ingredients[i])
            this.ingredients[i] = ingredientObj
        }

        console.debug("Converting finished!")
    }
}