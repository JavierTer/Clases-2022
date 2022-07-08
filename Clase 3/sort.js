const unaLista = [1,5,3,6,7,10];

//Para ordenar esto se usa sort, se usa para tipos arrays, sino da error.
//
//esto lo ordena de forma alfabetica
//function de callback
//console.log(unaLista.sort((a, b) => a - b));
//si usas sort() vacio, lo ordena por codigo asci, si le mandas la funcion de callback lo ordena como le decis en esa funcion.

//ejercicio pasando a programación funcional
function ordenarLista(param) {
    let listaOrdenada = [...param];
    return listaOrdenada.sort((a, b) => a - b)
}

console.log(unaLista);

console.log(ordenarLista(unaLista));


//eJEMPLO DE ARROW FUNCTION
const ejemplo = function operar(numero1, numero2){
    return numero1 + numero2
}

//Como podriamos transformar esto a una arrow function

const ejemplo1 = ((num1, num2) => (num1 + num2));

//la sintaxis es sacar la palabra function y pones la flecha
//LOS PARAMETROS, TAL QUE , LO QUE HACE.

console.log(ejemplo1(1,2));

//ejercicio, nos pasa 1 lista de objetos y hay que ordenarlo por importe
const listaObjetos = [
    {codigo:1,importe:1000},
    {codigo:1,importe:200},
    {codigo:1,importe:600},
    {codigo:1,importe:800},
]

//Mi solución con prog.funcional
const ordenarPorImp = function(unaLista) {
    let listaOrdenadaPorImporte = [...unaLista]
    return listaOrdenadaPorImporte.sort((a, b) => a.importe - b.importe)
}

/*Lo q hizo el profesor: 
function ordenarListaObjetos(listaObjetos) {
    const aux = [...listaObjetos];
    return aux.sort((o1,o2) => o1.importe-o2.importe);
}
*/

console.log( listaObjetos);
console.log(ordenarPorImp(listaObjetos) );