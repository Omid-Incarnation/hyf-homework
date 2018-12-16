const ContactList = require("./contactList");

const my_contact_list = new ContactList()

my_contact_list.add({
    name: "Gino",
    phone: 123456,
    country: "Italy"
})

my_contact_list.add({
    name: "Frank",
    phone: 789456
})

my_contact_list.add({
    name: "Albert",
    phone: 951623
})


//my_contact_list.remove("Maria")
//my_contact_list.remove("Frank")
//my_contact_list.searchBy("phone", 42)
//my_contact_list.searchBy("name", "M")

/*// Contact list
console.log(my_contact_list.getList())*/

//Loking for a contact by a name.
console.log(my_contact_list.searchBy("name", "frank"));

//Looking for a conntact which is not exsist in contact List.
console.log(my_contact_list.searchBy("name", "Omid"));

//Looking for a contact by Phone number.
console.log(my_contact_list.searchBy("phone", 951623));

