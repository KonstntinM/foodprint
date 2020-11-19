import realm from '../services/getRealmApp'

//  This Handler is built with realm.js .

export default {
    getPackageById
}

// empty package template for non existent categories
let emptyPackage = {
    id: 'string',
    value: 0
}

/**
 * Request a package from local storage.
 */
function getPackageById (id) {
    let packaging = realm.objects('Package')
    let _package_ = packaging.filtered('id = "' + id + '"');

    _package_ = _package_[0];

    if (!_package_) {
        emptyPackage.id = id
        _package_ = emptyPackage
    }

    return _package_
}