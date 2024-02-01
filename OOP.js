const person = {
    name: 'arif',
    age: 25,
    profession: 'developer',
    salary: '00',
    married: true,
    favPlaces: ['sylhet', 'bandarban', 'sajek']
}

console.log('name : ',person.name,'profession : ',person.profession,'married : ',person.married);

// [] bracket use kore access
console.log('print in third bracket way : ',person['name']);

person.salary = 30000;
person['age'] = 26;
person['favPlaces'] = ['maldives', 'bali', 'pataya'];

const propName = 'profession';
person[propName] = 'devops';
console.log(person)
