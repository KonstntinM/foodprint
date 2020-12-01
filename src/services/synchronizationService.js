import realm from '../services/getRealmApp'
import IngredientHandler from '../storage/IngredientHandler'
import PackageHandler from '../storage/PackageHandler'
import foodprintApi from './foodprintApi'

//  This function synchronizes the Local Memory with the Foodprint API. 
//  The actual calls are made in other services.

async function synchronize() {

    console.debug("The synchronization was started.")

    const ingredients = await foodprintApi.getAllIngredients()
    const packaging = await foodprintApi.getEveryPackaging()

    if ( ingredients || packaging ) {

        // Delete all existing objects
        realm.write(() => {
            realm.deleteAll()
        })
    }

    for (i in ingredients) {
        let ingredient = ingredients[i]

        ingredient.name = ingredient.id.substring(ingredient.id.indexOf(":") + 1);

        realm.write(() => {
            realm.create('Ingredient', {
                id: ingredient.id,
                value: ingredient.value,
                name: ingredient.name
            });
        })
    }

    for (p in packaging) {
        let _package = packaging[p]

        _package.name = _package.id.substring(_package.id.indexOf(":") + 1);

        realm.write(() => {
            realm.create('Package', {
                id: _package.id,
                value: _package.value,
                name: _package.name
            });
        })
    }
    
    console.debug("The synchronization was finished.")
}

module.exports = {
    synchronize
}