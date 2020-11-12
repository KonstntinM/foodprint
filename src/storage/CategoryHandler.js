import App from '../../App'

//  This Handler is built with realm.js .

const realm = App.state.realm;

export default {
    getCategoryById
}

// empty category template for non existent categories
let emptyCategory = {
    id: 'string',
    value: 0
}

/**
 * Request a category from local storage.
 */
async function getCategoryById (id) {
    let categories = realm.objects('Category')
    let category = categories.filtered('id = "' + id + '"');

    if (!category) {
        emptyCategory.id = id
        category = emptyCategory
    }

    return category
}