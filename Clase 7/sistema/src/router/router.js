//2) se debe importar los componentes que usamos en el arrays de objetos
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Pelicula from '../components/Pelicula.vue'
import Usuario from '../components/Usuario.vue'
import Reserva from '../components/Reserva.vue'
import GestionVenta from '../components/GestionVenta.vue'
import NotFound from '../components/NotFound.vue'





//1) se crea un objeto llamado routes
const routes = [
    { path: '/', component: Home },               //cuando arranca el sistema irá a Home
    { path: '/Usuario', component: Usuario },
    { path: '/Pelicula', component: Pelicula },
    { path: '/Reserva', component: Reserva },
    { path: '/GestionVenta', component: GestionVenta },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }


]

//3- Esto sirve para crear la instancia de vue, hay que importar los 2 objetos que utilizá arriba de todo también
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  //Al objeto router se le esta pasando las rutas, asi que hay que exportarlo con toda la info esa
  export default router

  
