const lista = [3,4,5,23,34];

/*MÉTODO FILTER
Este método retorna un array con los elementos que coinciden con la condición que viaja en la función flecha que mandamos por parametro.
lista no se MODIFICA como sort 
por eso no hace falta hacer una copia.
*/
console.log(lista.filter(o1 => (o1 < 20)));
console.log("Lista original " + lista);

//------------------
const listaObjetos = [
    {codigo: 1, importe: 100},
    {codigo: 2, importe: 1000},
    {codigo: 3, importe: 2000},
    {codigo: 4, importe: 100},
]

/*Ejercicio: tener los objetos mayores a 100*/
console.log(listaObjetos.filter(param => (param.importe > 100)));
console.log( listaObjetos);