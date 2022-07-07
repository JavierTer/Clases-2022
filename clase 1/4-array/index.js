console.log("Arrays");

const listaNumeros = [3,4,9];

console.log(listaNumeros);

//cambiar un valor de los datos
listaNumeros[1] = "chau";
console.log(listaNumeros);

//se pueden mezclar los datos

let nuevaListaNumeros = [3,4,9, "hola", true ]; 

console.log(nuevaListaNumeros);

nuevaListaNumeros.push(5)
console.log(nuevaListaNumeros);


//Ejercicio hecho por mi la resolucion
let lista = [4,3,-2,5,8,20,-30]

let sumaDePositivos = 0;
let sumaDeNegativos = 0;
let cantPos = 0;
let cantNeg = 0;

for(let i = 0; i < lista.length; i++){
    if(lista[i] >= 0) {
        sumaDePositivos += lista[i];
        cantPos++;
    }
    else {
        sumaDeNegativos += lista[i];
        cantNeg++;
    }
}

console.log("suma de positivos: " + sumaDePositivos);
console.log("suma de negativos: " + sumaDeNegativos);
console.log("cant de pos: " + cantPos);
console.log("cant de neg: " + cantNeg);

//Probar en una sola variable hacer lo mismo

let arrayDeResultados = [0,0,0,0];

for(let i = 0; i < lista.length; i++){
    if(lista[i] >= 0) {
        arrayDeResultados[0] += lista[i];
        arrayDeResultados[1]++;
    }
    else {
        arrayDeResultados[2] += lista[i];
        arrayDeResultados[3]++;
    }
}


console.log("La suma de los positivos es: " + arrayDeResultados[0]);
console.log("La cantidad de números positivos son: " +  arrayDeResultados[1] );

console.log("La suma de los negativos es: " + arrayDeResultados[2]);
console.log("La cantidad de números negativos son: " +  arrayDeResultados[3] );


//