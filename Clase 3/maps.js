console.log("Maps");

const lista = [3,4,5,23,34];

//MAP NO MODIFICA LA LISTA ORIGINAL, RETORNA UNA LISTA NUEVA
//PARA CADA OBJETO SUMARLE 10 CON MAPS
//const listaSumada = lista.map(obj1 => obj1 + 1000)


const listaSumada = lista.map(obj1 => {
                            if(obj1 > 20) {return obj1 + 1000} else {return obj1 + 1}
                            })

console.log(lista);
console.log(listaSumada);





const listaObjetos = [
    {codigo:1,importe:1000},
    {codigo:1,importe:200},
    {codigo:1,importe:600},
    {codigo:1,importe:800},
]


console.log(listaObjetos.map(x => x.importe + 1000));

//También se puede retornar un nuevo objeto con map, alterando el objeto anterior, mapeando por cada uno lo que le indiques
//Esto retorna un nuevo array de objetos
console.log(listaObjetos.map(object => {return {codigo: object.codigo + 5000, importe: 1000}}));