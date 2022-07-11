<template>
  <div>
    <Cabecera />
    <h1>Sistema 1</h1>

    <Item
      v-for="libro in libros"
      :key="libro.id"
      :id="libro.id"
      :descripcion="libro.descripcion"
    />

    <Libros @agregarDelPadre="agregar($event)" />
    <Pie :autor="autor" />
  </div>
</template>

<script>
import Cabecera from "./Cabecera.vue"; //importamos desde otro componente
import Pie from "./Pie.vue";
import Item from "./Item.vue";
import Libros from "./Libros.vue";

export default {
  components: {
    Cabecera, // aca hay que "registrarlo para poder usarlo en este template"
    Pie,
    Item,
    Libros,
  },

  data() {
    return {
      autor: "Juan",
      libros: [],
      libro: { id: 0, descripcion: "" },
    };
  },
  methods: {
    agregar(libro) {
      console.log("agregar en el padre " + libro.descripcion);
      this.libros.push({ ...libro }); // los 3 puntos significa hacer una copia, queremos agregar un objeto en la lista
      //pero queda enganchada, para tener otro espacio en memoria usamos esto.
    },
  },
};
</script>

<style>
h1 {
  color: red;
  font-size: 5em;
}
</style>