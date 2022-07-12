import { defineStore } from 'pinia'

/*STORE ES UN OBJETO GLOBAL QUE MANTIENE EL ESTADO*/

// Definimos el Store
// Cualquier componente puede acceder a esto
export const useStore = defineStore('main', {

    //se debe crear 1 variable para mantener el estado
    state: () => {
        return {
          // Todas las propiedades se pueden inferir
          contador: 10,
          listaReservas: [],
        }
      },
      //Para obtener la info del estado se usan los getters
      //llama a este método para aumentar el estado.
      getters: {
        aumentar1: (state) => state.contador ++,
      },
      actions: {
        aumentar() {
          this.contador++;
        },
        agregarReserva(reserva) {
          this.listaReservas.push(reserva)
        }
      }
})
