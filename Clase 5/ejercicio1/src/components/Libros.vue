<template>
    <div>
        Codigo: <input v-model="libro.id">
        Descripcion: <input v-model="libro.descripcion">
        <button @click="agregar">Agregar</button>
    </div>
</template>

<script>
export default {
    emits: ['agregarDelPadre'], //al hacer click queremos llamar al metodo del padre
    data(){
        return {
            libro: {id: 0, descripcion: ''}
        }
    },
    methods: {
        agregar() {
            this.$emit('agregarDelPadre', this.libro)   //este método esta llamando al agregar del padre, puede ir otro nombre acá.
            //console.log("Agregar desde el componente");
        }
    }
}
</script>

<style>

</style>