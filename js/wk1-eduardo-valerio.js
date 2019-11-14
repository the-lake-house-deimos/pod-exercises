"use strict";

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

// Create a function makeSuperPet() that takes in the pets array as input and returns a single pet object with the following shape...
//
// {
//     name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
//         age: THE_TOTAL_OF_ALL_PET_AGES,
//     breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
// }

function makeSuperPet(arr){
    const superpet = arr.reduce((allPets, pet) =>{
        let property = 'name';

        if(typeof allPets[property] === 'undefined'){
            allPets[property] = pet.name;
        }else{
            allPets[property] += pet.name;
        }

        property = 'age';

        if(typeof allPets[property] === 'undefined'){
            allPets[property] = pet.age;
        }else{
            allPets[property] += pet.age;
        }

        property = 'breed';

        if(typeof allPets[property] === 'undefined'){
            allPets[property] = pet.breed.substring(0,1);
        }else{
            allPets[property] += pet.breed.substring(0,1);
        }

        return allPets;
    }, {});

    return superpet;
}

console.log(makeSuperPet(pets));

// Create a function that when given an array of strings, returns an array of objects with properties
// for the given string value and the length of the string and the string without vowels (not including y)

function createObject(arr){
    const arrayStringObject = arr.reduce((stringProperty, str) => {
        let myObject = [];
        myObject['original'] = str;
        myObject['length'] = str.length;
        myObject['no-vowels'] = takeOutVowels(str);

        stringProperty.push(myObject);

        return stringProperty;

    }, []);

    return arrayStringObject;
}

function takeOutVowels(str){
    let bucket = [];

    for(let x = 0; x < str.length; x++){

        let word = str.substring(x, x + 1).toLowerCase();

        if((word !== 'a') && (word !== 'e') && (word !== 'i') && (word !== 'o') && (word !== 'u')){
            bucket.push(str.substring(x, x + 1));
        }
    }

    return bucket.join('');
}

console.log(createObject(fruits));