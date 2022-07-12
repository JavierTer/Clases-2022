//acá hacemos la conexion 
import axios from 'axios'

//este obj hace la conexion
//crea 1 objeto con el parametro que necesita acios en create, ese obj de configuracion lleva
//la base URL
const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'              //en esta linea se indica el formato de lo que viaja
    }
})
//este método llama a la api y trae la informacion a traves de axios
export default {
    getPeliculas() {
        return apiClient.get('/api/lista')
    }
}