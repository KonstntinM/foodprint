import Category from '../storage/CategoryHandler'

//  This Product Object represents a scanned product, whos product informations were called from the openFoodFacts api.
//  Lateron the carbon footprint will be attached to this object. 

export default class Product {

    // This API does not require any authentication.

    constructor (productData) {

        console.debug("A new Product will be created! The recived data is " + JSON.stringify(productData));

        this.name = productData.product_name
        this.barcode = productData.code
        this.image = productData.image_front_url
        this.ingredients = productData.ingredients_tags
        this.packaging = productData.packaging_tags
        this.categories = productData.categories_hierarchy

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
            this.image.replace("http", "https")
        }

        console.debug("The Product was created. The name of the Product is " + this.name);
    }

    calculateFootprint () {
        // TODO Check wether or not the product has a fixed footprint

        // calculate
        let score
        
        // add categorie values
        for (category in this.categories) {
            score = score + category.value;
        }

        // add packaging values
        for (package in this.packaging) {
            score = score + package.value;
        }

        this.score = score
        return this.score
    }

    /**
     * Converts the attached categoryIds into category objects.
     */
    convertCategories () {
        for (category in this.categories) {
            // check wether or not its already converted
            if (!(category instanceof String)) continue

            let categoryObj = Category.getCategoryById(category)

            category = categoryObj
        }
    }
}