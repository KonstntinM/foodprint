import realm from '../services/getRealmApp'

//  This Handler is built with realm.js .

export default {
    getIngredientById
}

/**
 * Request an ingredient from local storage.
 */
function getIngredientById (id) {
    let ingredients = realm.objects('Ingredient')
    let ingredient = ingredients.filtered('id = "' + id + '"');

    ingredient = ingredient[0];

    if (!ingredient) {
        return { id: id , value: 0}
    }

    return ingredient
}