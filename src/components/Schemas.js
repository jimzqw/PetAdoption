import Realm from 'realm';
export const SCHEMA = 'Pets';

export const Schema = {
    name: SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        img: 'string',
        age: 'int',
        sex: 'string',
        profile: 'string',
        type: 'string'
    }
};

export const databaseOptions = {
    path: 'PetsAdoption.realm',
    schema: [Schema],
    schemaVersion: 0
};

export const insertPet = newPet => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(SCHEMA, newPet);
        });
    }).catch((error) => reject(error));
});

export const queryPets = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let allPets = realm.objects(SCHEMA);
        resolve(allPets);
    }).catch((error) => reject(error));
});

export default new Realm(databaseOptions);