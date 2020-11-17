import realm from '../services/getRealmApp'

//  This Handler is built with realm.js .

export default {
    getIngredientById
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

    ingredient = ingredient[0];

    if (!ingredient) {
        emptyIngredient.id = id
        ingredient = emptyIngredient
    }

    return ingredient
}