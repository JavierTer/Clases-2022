<template>
  <div>
    <h2>Reserva</h2>
    <div>
        Codigo de reserva <input type="text" />
    </div>
    <br>
    <div>
     Nombre de la Pelicula <input type="text" v-model="reserva.nombrePelicula"/> 
     <br>
     Nombre de usuario     <input  type="text" v-model="reserva.nombreUsuario"/> 
      <button @click="agregarReserva">Reservar</button>
    </div>
    {{listaReservas}}
  </div>
</template>

<script>
import { useStore } from "../store/store.js"; //Para usar el store hay que importarlo:
import { storeToRefs } from "pinia"; //esta linea es como un mapeador

export default {
  setup() {
    const store = useStore();
    const { listaReservas } = storeToRefs(store);
    // Nos traemos un objeto del store y hay que retornarlo como si fuera un DATA
    const { agregarReserva } = store;
    //nombre = "";
    //descripcion = "";

    return {
      store,
      agregarReserva,
      listaReservas,
    };
  },
  data() {
    return {
      id: 0,
      reserva: {
        id: 0,
        nombrePelicula: '',
        nombreUsuario: ''
      }
    }
  },

  methods: {
    agregarReserva() {
      //console.log('cambio');
      this.agregarReserva({...this.reserva});
      //this.agregarPelicula([...this.pelicula, pelicula])
      
    },
  },
};
</script>

<style>
</style>