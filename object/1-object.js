let user = {
    name = 'Roberto'
};

// Alterando a propriedade de um onjeto
user.name = 'Outro nome 1';
user['name'] = 'Outro nome 2';

const prop = 'name';
user[prop] = 'Outro nome 3';

//Criando uma propriedade
user.lastName = 'Roberto Mello';

//Deletando uma propriedade
delete user.name;