/* import Swal from '../node_modules/sweetalert2/src/sweetalert2' */


let botonsweet = document.querySelector('.fruit')
botonsweet.addEventListener('click', info)

const { value: Zona } = await 
function info (){
    Swal.fire({
        title: 'Selecciona tu ubicacion',
        input: 'select',
        inputOptions: {
          'Bogota': {
            Chico: 'Chico',
            Rosales: 'Rosales',
          },
          'Medellin': {
            poblado: 'poblado',
            
          },  
        },

        inputPlaceholder: 'Selecciona tu barrio ',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === 'Chico') {
              resolve( "18 Agosto 2022 /CRA 13 # 24 - 12 / CARFOOD 11")
            } 
            if (value === 'Rosales') {
                resolve( " 5 Diciembre 2022 /CLL 93 # 12 -42 / CARFOOD 48")
              } 
            else {
              resolve('No tenemos fechas asignadas aun')
            }
          })
        }
      })
      
      if (Zona) {
        Swal.fire(`You selected: ${Zona}`)
      }   
}






