<template>
  <div>
    <h2>Alta de pelicula</h2>
    <li v-for="pelicula in lista" :key="pelicula.codigo">
      {{ pelicula.codigo }} {{ pelicula.nombre }} {{ pelicula.descripcion }}
      <button @click="eliminar(pelicula.codigo)">ANULAR</button>
    </li>

    <p>
      Código <input type="text" v-model="pelicula.codigo" /> Nombre
      <input type="text" v-model="pelicula.nombre" /> Descripcion
      <input type="text" v-model="pelicula.descripcion" />
      <button @click="agregar">Agregar Pelicula</button>
    </p>

    {{ mensajeError }}

    <!--    {{ lista }} -->

    <!--
    <div>Código de pelicula<input type="text" /></div>
    <div>
      {{listaPeliculas}}
    </div>
    <br>
    <div>
     Nombre de la Pelicula <input type="text" v-model="pelicula.nombre"/> 
     Descripcion           <input  type="text" v-model="pelicula.descripcion"/> 
      <button @click="agregarPelicula">Agregar Pelicula</button>
    </div> -->
  </div>
</template>

<script>
//import { useStore } from "../store/store.js"; //Para usar el store hay que importarlo:
//import { storeToRefs } from "pinia"; //esta linea es como un mapeador
import peliculaService from "../services/peliculaService.js";
export default {
  data() {
    return {
      lista: [],
      mensajeError: "",
      pelicula: { codigo: 0, nombre: "", descripcion: "" },
      //ver: false,
    };
  },
  //cuando se carga el componente llama al servicio de peliculaService
  created: async function () {
    //esto es para que al cargar el componente haga una funcion asincronica con los datos
    try {
      const rta = await peliculaService.getPeliculas();
      //console.log(data);
      //agregamos lo que devuelve el back a la lista
      this.lista = rta.data;
    } catch (error) {
      console.log(error);
      //mostrar();
      this.mensajeError = "No se pudo obtener los datos";
    }
  },
  methods: {
    agregar() {
      try {
        const peliculaAgregar = { ...this.pelicula };
        peliculaService.setPelicula(peliculaAgregar);
        this.lista.push(peliculaAgregar);
      } catch (error) {
        this.mensajeError = "No se pudo obtener los datos ";
        //console.log(error.error);
      }
    },
    eliminar(unCodigo) {
      try {
        peliculaService.deletePelicula(unCodigo);
        const listaCodigos = this.lista.map((e) => {
          return e.codigo;
        });
        const indice = listaCodigos.indexOf(unCodigo);
        this.lista.splice(indice, 1);
      } catch (error) {
        this.mensajeError = "No se pudo obtener los datos ";
        console.log(error.error);

      }
    },
    
  },
  /*
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
  },*/
};
</script>

<style>
</style>