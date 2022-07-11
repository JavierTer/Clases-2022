<!--Este componente equivale al carrito de compras visto en clase -->
<template>
  <div>
    Informe de Reservas
    {{contador}} 
    <button @click="cambio">Aumentar contador</button>
  </div>
</template>

<script>

import { useStore } from '../store/store.js'        //Para usar el store hay que importarlo:
import { storeToRefs } from 'pinia'                   //esta linea es como un mapeador


export default {
setup() {
    const store = useStore()
    const { contador } = storeToRefs(store)
    // Nos traemos un objeto del store y hay que retornarlo como si fuera un DATA
    const {aumentar} = store;                   

    return {
      store,
      contador, 
      aumentar
    }
  },
  methods: {
    cambio() {
        //console.log('cambio');
        this.aumentar();
    }
  }
}
</script>

<style>

</style>