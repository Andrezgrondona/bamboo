





let botonsweet = document.querySelector('.fruit')
botonsweet.addEventListener('click', info)

const { value: fruit } = await 
function info (){
    Swal.fire({
        title: 'Selecciona tu ubicacion',
        input: 'select',
        inputOptions: {
          'Bogota': {
            chico: 'chico',
            rosales: 'rosales',
          },
          'Medellin': {
            poblado: 'Ppoblado',
            abejorral: 'abejorral', 
          },
          
        },


        inputPlaceholder: 'Selecciona tu barrio ',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === 'chico') {
              resolve( "cra13 24 - 12")
            } 
            if (value === 'rosales') {
                resolve( "cll 93 # 12 -42")
              } 
            else {
              resolve('You need to select oranges :)')
            }
          })
        }
      })
      
      if (fruit) {
        Swal.fire(`You selected: ${fruit}`)
      }   
}






