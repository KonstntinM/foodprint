import realm from '../services/getRealmApp'

//  This Handler is built with realm.js .

export default {
    getPackageById,
    getEveryPackaging
}

/**
 * Request a package from local storage.
 */
function getPackageById (id) {
    let packaging = realm.objects('Package')
    let _package_ = packaging.filtered('id = "' + id + '"');

    _package_ = _package_[0];

    if (!_package_) {
        let name = id.substring(id.indexOf(":") + 1) 
        return { id: id , value: 0, name: name }
    }

    return _package_
}

function getEveryPackaging () {
    let packaging = realm.objects('Package')
    return packaging
}