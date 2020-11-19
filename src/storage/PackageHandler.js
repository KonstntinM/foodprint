import realm from '../services/getRealmApp'

//  This Handler is built with realm.js .

export default {
    getPackageById
}

/**
 * Request a package from local storage.
 */
function getPackageById (id) {
    let packaging = realm.objects('Package')
    let _package_ = packaging.filtered('id = "' + id + '"');

    _package_ = _package_[0];

    if (!_package_) {
        return { id: id , value: 0}
    }

    return _package_
}