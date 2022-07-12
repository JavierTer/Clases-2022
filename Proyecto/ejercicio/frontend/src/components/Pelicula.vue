<template>
  <div>
    <h2>Pelicula</h2>
    <div>Código de pelicula<input type="text" /></div>
    <div>
      {{listaPeliculas}}
    </div>
    <br>
    <div>
     Nombre de la Pelicula <input type="text" v-model="pelicula.nombre"/> 
     Descripcion           <input  type="text" v-model="pelicula.descripcion"/> 
      <button @click="agregarPelicula">Agregar Pelicula</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "../store/store.js"; //Para usar el store hay que importarlo:
import { storeToRefs } from "pinia"; //esta linea es como un mapeador

export default {
  setup() {
    const store = useStore();
    const { listaPeliculas } = storeToRefs(store);
    // Nos traemos un objeto del store y hay que retornarlo como si fuera un DATA
    const { agregarPelicula } = store;
    //nombre = "";
    //descripcion = "";

    return {
      store,
      agregarPelicula,
      listaPeliculas,
    };
  },
  data() {
    return {
      id: 0,
      pelicula: {
        id: 0,
        nombre: '',
        descripcion: ''
      }
    }
  },

  methods: {
    agregarPelicula() {
      //console.log('cambio');
      this.agregarPelicula({...this.pelicula});
      //this.agregarPelicula([...this.pelicula, pelicula])
      
    },
  },
};
</script>

<style>
</style>