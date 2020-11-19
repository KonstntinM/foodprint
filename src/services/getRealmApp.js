import Realm from 'realm';

import IngredientSchema from '../storage/schemas/IngredientSchema'
import PackageSchema from '../storage/schemas/PackageSchema'

// Returns the shared instance of the Realm app.
export default new Realm({schema: [IngredientSchema, PackageSchema]});