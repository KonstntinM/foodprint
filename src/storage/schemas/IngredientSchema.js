import { Object } from 'realm';

class Ingredient extends Object {}

Ingredient.schema = { 
    name: 'Ingredient', 
    properties: { 
        id: 'string', 
        value: { 
            type: 'int', 
            default: 0 
        },
        name: 'string'
    } 
}

export default Ingredient