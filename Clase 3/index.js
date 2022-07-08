console.log("Programacion funcional");

//el Criterio de la prog funcional se basa en funciones puras que no modifiquen las variables globales.
//Si se cambia una variable global , se llama MUTACION 
//Para evitar eso se puede hacer objet.freeze(miLista)

//Tenemos una lista y s/prog funcional, no deberiamos alterar la lista original.
//Se busca manener la lista sin cambios, entonces hay que crear una nueva y devolverla.


const miLista = [30,40,50,60]


function cambiarPrimerElemento (miLista, elemento) {

    //let listaParaMostrar = miLista;

    //Como hacer una copia sin modificar lo anterior
    listaParaMostrar = [...miLista]

    listaParaMostrar[0] = elemento;

    return listaParaMostrar;
}

console.log(miLista)

console.log(cambiarPrimerElemento(miLista, 100))