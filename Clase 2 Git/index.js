console.log("Clase 2");

/* 
Repaso de variables
var ya no se usa
se usa let para declarar variables
para las constantes: 
const MI_VARIABLE = 45; esto hace que no cambie el tipo de valor

Pero esto es distinto a que se escriba:
const unVector y luego
unVector.push(34)
esto si se puede, lo que da error en tiempo de ejecución seria: let unVector = 30, porque se cambia el tipo de dato
se usa en js y es distinto si es un tipo de dato de js o para un objeto o arrays.

Muestra
const unVector = [];
unVector.push(34);
unVector.push(true);
unVector.push("algun texto");
console.log(unVector);
console.log((typeof unVector));



const otroVector = unVector;

//Que pasa cuando copiamos el objeto unVector hacia otro nuevo
//Y cambiamos la posicion sub[0]

otroVector[0] = "Principio";

console.log("Vector original " + unVector);
console.log("Vector nuevo " + otroVector);
*/

//Hacemos un objeto que nos a el profesor

const proceso = {
    
    codigo: 1,
    descripcion: "Proceso stock",
    
    getCodigo : function(){
        return this.codigo
    },
//Habria que recorrer esta lista y devolver cual es el minimo y devolver esa lista.
    stockActual: [{codigoProducto: 1, cantidad: 10, stockMinimo: 5}, 
                  {codigoProducto: 2, cantidad: 8, stockMinimo: 12},
                  {codigoProducto: 3, cantidad: 8, stockMinimo: 13}

    ],
    //el prod 3 pasar a tener 11 y el 2 a 18
    //Hay q actualizar el stock actual 
    stockNuevo: [{codigoProducto: 3, paraAgregar: 3},
                 {codigoProducto: 2, paraAgregar: 10}],

                        //js es un lenguaje de 1er orden, porue a una funcion anonima en est caso la podemos asignar a una variable.
                        //Esta funcion desde afuera la llamariamos proceso.calcularMinimos();

                        //recorrer stockActual y devolver los productos con stock minimo
        
    calcularMinimos: function (){

        //Para evitar un cambio del estilo let proceso = 5, se usa const
        const productosStockMinimo = [];
        let minimo = 10000000;
        //Recorremos el stockActual buscando el minimo
        for (let index = 0; index < this.stockActual.length; index++) {
            if (this.stockActual[index].stockMinimo <= minimo) {
                minimo = this.stockActual[index];
            }                       
        }
        productosStockMinimo.push(minimo)
                     
        return productosStockMinimo
    },
                        //Si dejamos una funcion que no tiene nada devolveria undefined
                        actualizarStock: function(){
                            for (let index = 0; index < this.stockNuevo.length; index++) {
                                let codigoBuscadoStockNvo = this.stockNuevo[index].codigoProducto;
                                
                                for (let x = 0; x < this.stockActual.length; x++) {
                                    
                                    let codBuscado = this.stockActual[x].codigoProducto
                    
                                    if (codigoBuscadoStockNvo == codBuscado){
                                        this.stockActual[x].cantidad = this.stockActual[x].cantidad + this.stockNuevo[index].paraAgregar
                                    }
                                    
                                }
                            }
                        }
}

console.log(proceso.stockActual);

console.log(proceso.calcularMinimos());

proceso.actualizarStock();
 
console.log("Mostramos actualizado");
console.log(proceso.stockActual);



