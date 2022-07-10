const objeto = Vue.createApp ( {
    data() {
        return {
            mensaje: 'Hola Vue!',
            color: {color:"red", background:"black"},
            numero: 0,
            ok: true
        }
     },
     mounted() {                    // esto imprime cada vez que se actualiza la pagina
        console.log('componente creado');
    }
}).mount('#app')