<template>
  <h4>Autor: {{autor}}</h4>
</template>

<script>
export default {
    props: ['autor'] //declaramos una propiedad y la usamos con la interpolación en el template
}
</script>

<style>
h4 {
    font-size:  2em;
}


</style>