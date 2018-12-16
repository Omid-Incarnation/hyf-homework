//It is just a test file :)


/*function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

console.log(duck);
console.log(canary);*/

//--------------------------------------------------//

/*function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

// Add your code above this line
let beagle = new Dog("Snoopy");

console.log(beagle.numLegs);*/

//--------------------------------------------------//

/*let loveObj = {
    firstKey: 'I ',
    secondKey: 'Love ',
    thirdKey: 'You :)'
}

let theSentence = ''

for(let key in loveObj){
    theSentence += loveObj[key]
}

console.log(theSentence);*/

//--------------------------------------------------//

/*my_contact_list = {
    name: "Frank",
    phone: 789456
}

console.log(my_contact_list.hasOwnProperty('name'));*/

//--------------------------------------------------//

my_contact_list = [{
        name: "Gino",
        phone: 123456,
    },

    {
        name: "Frank",
        phone: 789456
},
    {
        name: "Albert",
        phone: 951623
}
]

/*let listOfKeys = []
for(let i = 0; i < my_contact_list.length; i++){
    listOfKeys.push(Object.keys(my_contact_list[i]));
}
console.log(listOfKeys)*/

/*
let searchBy = function (key, value) {
    for (let i = 0; i < my_contact_list.length; i++) {
        let eachElement = my_contact_list[i];
        if (eachElement.hasOwnProperty(key) && (eachElement[key].toString().toLowerCase() == value.toString().toLowerCase())) {
            return eachElement;
        }
    }
    console.log(`There is no any contact in your list!`)
}
*/

let searchBy = function (key, value) {
    let theContact = my_contact_list.filter((contact) => {
        if (contact.hasOwnProperty(key) && contact[key] === value) {
            return contact;
        }
    })
    return theContact;
}
console.log(searchBy('name', 'frank'))
console.log(searchBy("phone", 951623));

console.log('There is no such a this contact!')