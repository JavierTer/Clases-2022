<template>
  <div>
    <button @click='aviso'>Aviso</button>
  </div>
</template>

<script>
export default {
emits: ['avisoPadre'],
methods: {
    aviso(){
        console.log("Avisar");
        this.$emit('avisoPadre', {propiedad: "Avisar hora de fin de clase"})
    }
}
}
</script>

<style>

</style>