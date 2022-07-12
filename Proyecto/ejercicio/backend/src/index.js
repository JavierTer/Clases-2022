import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3001  //cambiamos el puerto por defecto

//por seguridad se debe instalar cors


//simulo una base de datos en memoria 
//Peliculas
const lista = [{ codigo: 1, nombre: "Titanic", descripcion: "romance" },
{ codigo: 2, nombre: "Rocky 4", descripcion: "accion" },
{ codigo: 3, nombre: "El señor de los anillos II", descripcion: "aventura" }
];

//Ahora hay que exponer esta listaDeLasPeliculas
app.get('/api/lista', (req, res) => {
    res.json(lista);
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})