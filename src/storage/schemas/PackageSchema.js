import { Object } from 'realm';

class Package extends Object {}

Package.schema = { 
    name: 'Package', 
    properties: { 
        id: 'string', 
        value: { 
            type: 'int', 
            default: 0 
        } 
    } 
}

export default Package