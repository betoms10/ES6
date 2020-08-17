// const user = {
//     name: 'Roberto',
//     lastName: 'Mello'
// };

// function getUserWithFullName(user){
//     return{
//         ...user,
//         fullName: `${user.name} ${user.lastName}`
//     }
// }

// const userWithFullName = getUserWithFullName(user);
// console.log(userWithFullName);

const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);