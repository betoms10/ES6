//in
something in somethingItens

//Arrays
var arvores = new Array("pau-brasil", "loureiro",
 "cedro", "carvalho","sicômoro");
0 in arvores; // true
3 in arvores; // true
6 in arvores; // false
"cedro" in arvores; // false( necessário especificar valor do índice)
"length" in arvores; // true (length é um propriedade de Array

//Objetos predefinidos
"PI" in Math;  //true
var minhaString = new String("coral");
"length" in minhaString; // true

// Objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro;  // true
"modelo" in meucarro; // true

//instaceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {
    //code here
}