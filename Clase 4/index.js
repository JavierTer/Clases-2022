
const objeto = Vue.createApp ( {
    data() {
        return {
            mensaje: 'Hola Vue!',
            color: {color:"red", background:"black"},
            numero: 0,
            ok: false, 
            ver: true
        }
     },
     mounted() {                    // esto imprime cada vez que se actualiza la pagina
        console.log('componente creado');
    }, 
    methods: {
        incrementar() {
            this.numero++  //con this hacemos referencia al data
        },
        mostrar(){
            if(this.ver == true){
                this.ver = false;
            }
            else {
                this.ver = true;
            }
             
        }
    }
}).mount('#app')