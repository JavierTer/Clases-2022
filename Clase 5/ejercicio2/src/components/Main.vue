<template>
    <div>
        <Cabecera :titulo='titulo'/>
        <h2>Main</h2>
        <Detalle @avisoPadre="avisar($event)"/>
        <h4>{{mensaje}}</h4>
    </div>
</template>

<script>
import Cabecera from './Cabecera.vue'
import Detalle from './Detalle.vue'
export default {
    components: {
        Cabecera, Detalle
    },
    data() {
        return {
            titulo: 'ejercicio sistema...',
            mensaje: ''
        }
    },
    methods: {
        avisar(obj) {
            console.log('aviso padre ' + obj.propiedad);
            this.mensaje = obj.propiedad;
        }
    }
}
</script>

<style>

</style>