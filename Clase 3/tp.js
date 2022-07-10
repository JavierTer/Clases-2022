//Devolver una lista donde la cantidad sea menor que el minimo
//Una lista con los productos donde cantidad sea menor que el stock minimo




//es como un totalizador
//es como hacer un for y  hacer acumulacion

//lista.reduce ( (suma, objeto) => suma + objeto.valor, 0)




const proceso = {
    codigo: 1,
    descripcion: "Proceso stock",
    getCodigo: function() {
        return this.codigo;
    },
    stockAcutal: [{codigoProducto: 1, cantidad: 10, stockMinimo: 5},
                  {codigoProducto: 2, cantidad: 8, stockMinimo: 12},
                  {codigoProducto: 3, cantidad: 8, stockMinimo: 13}],
    stockNuevo: [{codigoProducto: 3, paraAgregar: 3},
                 {codigoProducto: 2, paraAgregar: 10}],

    
    //Usando sort
    ordenarPorCandidad(param) {
        let listaOrdenadaPorCantidad = [...param]
        return listaOrdenadaPorImporte.sort((a, b) => a.cantidad - b.cantidad)
    },       

    
    //Devolver lista de productos con stock minimo 
    //con el stock menor minimo, el objeto con sus 3 atributos

    // Devolver lista de productos con 
    // stock menor al minimo            
    // los mismos objetos de la lista
    calcularMinimos() {
        const productosStockMinimo = [];
        let minimo = 10000000;
        for (let index = 0; index < this.stockActual.length; index++) {
            if (this.stockActual[index].stockMinimo <= minimo) {
                minimo = this.stockActual[index];
            }                       
        }
        productosStockMinimo.push(minimo)
                     
        return productosStockMinimo

        //otra opcion si compara la cantidad con sus propiios stock minimos
        //productosStockMinimo = this.stockAcutal.filter (e => (e.cantidad < e.stockMinimo));
    } ,   
    

    // lista.reduce( (suma, objeto) => suma + objeto.valor , 0)
    cantidadTotal(param) {
        const valorInicial = 0;
        const total = 0;

        const suma = this.stockAcutal.reduce ( (total, evento)  => (total + evento.cantidad), valorInicial);
        return  suma
    },
    cantidadStockMinimo() {

    },
    //
    // Desafio, actualizar stock con la lista nueva
    // devolver una nueva lista
    //
    actualizarStock() {
        const aux = [...this.stockAcutal];    //copiamos el stock actual al auxiliar

        aux.filter((nuevo) => 
            this.stockNuevo.map( (e) => {
                if(e.codigoProducto === nuevo.codigoProducto) {
                    nuevo.cantidad += e.paraAgregar
                }
                else {
                    nuevo
                }
            }
            )
        )




        return aux;
    }

}

console.log(proceso.actualizarStock());
