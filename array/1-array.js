const users = ['Roberto', 'Pedro', 'Jeniffer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN:Symbol('W')
}

const persons = [
    {
        name: 'Roberto',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 20,
        gender: gender.MAN
    },
    {
        name: 'Jeniffer',
        age: 23,
        gender: gender.WOMAN
    }
];

// Retorna a quantidade de itens de um array
console.log('Itens: ', persons.length);

// Verificar se é array
console.log('A variável person é um array: ', Array.isArray(persons));

// Iterar os itens do array
persons.forEach(person =>{
    console.log(`Nome: ${person.name}`);
    console.log(`Age: ${person.age}`);
});

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens: ', mens);

// Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JS';
    return person;
});

console.log('\nPessoas com a adição do course:', personsWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
},0);

console.log('\n Soma de idade das pessoas', totalAge);

// Juntando operações
const totalEvenAges = persons
            .filter(person => person.age % 2 === 0)
            .reduce((age, person) => {
                age += person.age;
                return age;
            }, 0);

            console.log('\n Soma de idades das pessoas que possuem idade par', totalEvenAges);