<template>
  <div>
      <Cabecera/>
      <h1>Sistema 1 </h1>
      
      <Item v-for="libro in libros" :key ="libro.id" :id  ="libro.id" :descripcion ="libro.descripcion" />
      
      <Pie :autor='autor'/> 
  </div>
  
</template>

<script>
import Cabecera from "./Cabecera.vue"; //importamos desde otro componente
import Pie from "./Pie.vue"
import Item from "./Item.vue"

export default {
    components: {
        Cabecera,            // aca hay que "registrarlo para poder usarlo en este template"
        Pie,
        Item
    },
    
    data() {
      return   {
        autor:  "Juan",
        libros: [{id: 1, descripcion: 'Don Segundo Sombra'},
                 {id: 2, descripcion: 'Martin Fierro'},
                 {id: 3, descripcion: 'Los miserables'} 
                ],
        libro: {id: 0, descripcion: ''}
      }
    }
}
</script>

<style>
h1 {
  color:red;
  font-size: 5em;
}
</style>