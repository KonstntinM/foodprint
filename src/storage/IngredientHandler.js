import realm from '../services/getRealmApp'

//  This Handler is built with realm.js .

export default {
    getIngredientById,
    write
}

// empty ingredient template for non existent categories
let emptyIngredient = {
    id: 'string',
    value: 0
}

/**
 * Request an ingredient from local storage.
 */
function getIngredientById (id) {
    let ingredients = realm.objects('Ingredient')
    let ingredient = ingredients.filtered('id = "' + id + '"');

    console.log("getIngredientById", JSON.stringify(ingredients), JSON.stringify(ingredient));

    ingredient = ingredient[0];

    console.log("new ingredient", ingredient);

    if (!ingredient) {
        console.log("empty!");
        emptyIngredient.id = id
        ingredient = emptyIngredient
    }

    return ingredient
}

async function write () {
    await realm.write(() => {
        realm.create('Ingredient', {
            id: 'en:sweet-whey', 
            value: 10
        });
    })
}