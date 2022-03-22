

    function Preparacion(nombrePlato,stockPlato,precioPlato,descripcionPlato, tipoPlato, imgPlato){
        this.nombre = nombrePlato;
        this.stock = stockPlato;
        this.precio = precioPlato;
        this.descripcion = descripcionPlato;  
        this.tipo = tipoPlato; 
        this.imagen = imgPlato;  
        }    
        
    const listadoMenu = [];
        listadoMenu.push(new Preparacion('Bamboo', 30, 35000, 'Vegetales Salteados con pollo y camarones al wok con salsa shitake, salsa soya y ajo.', 'comida',"img/oriental 14.jpg" ));
        listadoMenu.push(new Preparacion('Banh',  40 , 27000,'Variedad de zetas con carne de langosta a la parilla cebollin oriental,salsa de miel y aceite de oliva.', 'comida', "img/w1.jpeg"));
        listadoMenu.push(new Preparacion('Salad', 80, 20000, `Plato thai con verduras y tofu con base de pasta de arroz, raiz china, tamarindo y mani tostado.`, 'comida', "img/w2.jpeg"));
        listadoMenu.push(new Preparacion('Spicy California', 40, 44000, 'Salmon Ahumado, aguacate, cebollin, salsa rocoto y salsa chipotle', 'comida',"img/arrozpic.jpeg" ));
        listadoMenu.push(new Preparacion('Ramen Vegetales',  50 , 18000,'Tallarines salteados con vegetales, consome de vegetales, wakame y aceite de chile', 'comida', "img/sopa.jpeg"));
        listadoMenu.push(new Preparacion('Poke atùn', 100, 15400, `Atùn marinado, cilantro, mango biche, limon, salsa poke, arroz`, 'comida', "img/atun.jpeg"));

        listadoMenu.push(new Preparacion('Copoazu', 50, 7000, ' Bebida de Extracto de Zanahoria & pepino', 'bebida', "img/jugo 9 .jpg"));
        listadoMenu.push(new Preparacion('Gulupa', 30, 5000, 'Bebida de Arazá, banano, hierbabuena.', 'bebida', "img/jugo 6.jpg"));
        listadoMenu.push(new Preparacion('Thai Tea', 80, 12000, 'Té de flores con infusión de limonaria y lychees.', 'bebida', "img/jugo 4.jpg"));
        listadoMenu.push(new Preparacion('Cafe', 200, 5000, ' Delicioso y aromatico cafe recien molido', 'bebida', "img/cafe.jpeg"));
        listadoMenu.push(new Preparacion('Te Chai', 40, 12000, 'Bebida típica del sur de la India, mezcla de té con especias y hierbas aromáticas.​​ ', 'bebida', "img/chai.jpeg"));
        listadoMenu.push(new Preparacion('Vino(Temporada)', 120, 90000, 'Las variedades de Vino tinto con notas afrutadas y con baja concentración de taninos ', 'bebida', "img/vino.jpeg"));

        lmenu = JSON.stringify(listadoMenu);
        //console.log(listadoMenu);/* texto */
        //console.log(lmenu);/* objeto */
        


    let comida = document.querySelector('.categoria1')
    let bebida = document.querySelector('.categoria2')

    comida.addEventListener('click', function(){renderProductos("comida")})
    bebida.addEventListener('click', function(){renderProductos("bebida")})

    function renderProductos(categoria){
        const filtroCategoria = listadoMenu.filter(x => x.tipo == categoria)
            let catalogo = document.querySelector('.catalogo')
            catalogo.innerHTML = '' 

            for (const listado of filtroCategoria ) {
                let contenedor= document.createElement("div");
                contenedor.innerHTML = `<div id="containerColumn">
                                            <div class="card mb-3" style="max-width: 540px;">
                                                <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img src="${listado.imagen}" class="img-fluid rounded-start" alt="...">
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                    <h5 class="card-title">${listado.nombre}</h5>
                                                    <p class="card-text">${listado.descripcion}</p>
                                                    <p class="card-text"><small class="text-muted">${listado.precio}</small>
                                                   
                                                    </p>
                                                    
                                                    </div>
                                                </div>
                                                </div>
                                            </div>    
                                        </div> `
        
                catalogo.appendChild(contenedor);       
            } 
    }

/* ----------------- MENU POKE -----------------  */
        function listadoIng(base, proteina, verdura){
            this.base=base;
            this.proteina=proteina;
            this.verdura=verdura;
        }

        ingredientes = [];
            ingredientes.push(new listadoIng('Tallarines', 'carne', 'Cebolla y Zanaoria'));
            ingredientes.push(new listadoIng('Arroz', 'Salmon','Apio y zuchini'));
            ingredientes.push(new listadoIng('Noodles', 'Atun','Pimenton y Brocoli'));
            ingredientes.push(new listadoIng('Ban mian', 'Camaron','Champiñones'));
            ingredientes.push(new listadoIng('Fried sauce noodles', 'Tofu','Puerro y Rabano'));       
/* ----------------- MENU POKE -----------------  */  

/* ----------------- LOCALSTORAGE -----------------  */ 
    //localStorage.setItem("ing", JSON.stringify(ingredientes))
        //ingredientes=JSON.parse(localStorage.getItem("ing"))
        //console.log(ingredientes)
/* ----------------- LOCALSTORAGE-----------------  */  

/* ----------------------------------------BASE--------------------------------------------------------- */
    ingredientes.forEach(element => {
        let elements = document.getElementById("ListBase");
        let div = document.createElement("div")
        div.innerHTML= `<div class="box">
                            <input type="checkbox" value="${element.base}" class="checkbox" id="${element.base}">
                            <label for="Tallarines" class="txtIngredientres">${element.base} </label>
                        </div>`

                        ListBase.appendChild(div)   
    });

/* ----------------------------------------BASE--------------------------------------------------------- */

/* ----------------------------------------PROTEINA----------------------------------------------------- */
    ingredientes.forEach(element => {
        let elements = document.getElementById("ListProteina");
        let div = document.createElement("div")
        div.innerHTML= `<div class="box">
                            <input type="checkbox" value="${element.proteina}" class="checkbox" id="${element.proteina}">
                            <label for="Tallarines" class="txtIngredientres">${element.proteina} </label>
                        </div>`
                        ListProteina.appendChild(div)    
    });
    localStorage.setItem("ing", JSON.stringify(ingredientes))
  
/* ----------------------------------------PROTEINA----------------------------------------------------- */

/* ----------------------------------------VERDURA------------------------------------------------------ */
    ingredientes.forEach(element => {
        let elements = document.getElementById("ListVerdura");
        let div = document.createElement("div")
        div.innerHTML= `<div class="box">
                            <input type="checkbox" value="${element.verdura}" class="checkbox" id="${element.verdura}">
                            <label for="Tallarines" class="txtIngredientres">${element.verdura} </label>
                        </div>`
                        ListVerdura.appendChild(div)
        
    });
/* ----------------------------------------VERDURA------------------------------------------------------ */

/* ------------------------------ SELECCION MULTIPLE  DEL MENU ----------------------------------------  */

    var valueList= document.getElementById('valueList');
    var text = '<span> Los ingredientes seleccionados son:</span>';
    var listArray = [];

    valueList.innerHTML = ''

    var checkboxes = document.querySelectorAll('.checkbox');
    for(var checkbox of checkboxes) { checkbox.addEventListener('click', function(){

        if(this.checked==true) {

        listArray.push(this.value);
        
        valueList.innerHTML = `<div class="card text-center">                                  
                                    <div class="card-body">
                                        <h5 class="card-title">Tu poke sera preparado</h5>
                                        <p class="card-text">${text } </p>
                                        <p class="card-text">${listArray} </p>
                                        <button type="button" id="btnRegistrar">registrar</button>
                                    </div> 
                                </div>`

    } else {    

    // ACCION DE REMOVER "UNCHECKED"

        listArray  = listArray.filter(e => e !== this.value); 
        valueList.innerHTML = `<div class="card text-center">                                  
                                    <div class="card-body">
                                        <h5 class="card-title">Tu poke sera preparado</h5>
                                        <p class=  "card-text">${text } </p>
                                        <p class= id="kard" class "card-text">${listArray} </p>
                                        <button onclick="guardarCard()" type="button" id="btnRegistrar">registrar</button>
                                    </div> 
                                </div>`
            }
        })
    }
/* ------------------------------ SELECCION MULTIPLE  DEL MENU ----------------------------------------  */

/* ------------------------------ TOASTIFY -------------------------------------------  */


let botontoast = document.querySelector('.botontoast')

botontoast.addEventListener('click', saludar)

function saludar (){
    Toastify({
        text: "hola janeth!!!",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
    
}


/* ------------------------------ TOASTIFY -------------------------------------------  */
/* ------------------------------ OPERADOR TERNARIO -------------------------------------------  */

function mayorEdad(){
    var edad = document.getElementById('edadVer').value;
   /*  if (edad > 18){
        alert("Si puedes asistir al evento, Pronto sabras mas sobre esta experiencia!")  
    }
    else{
        alert("No tienes la edad para asisr al avento")
    }
 */

(edad > 18) ? alert("Si puedes asistir al evento, Pronto sabras mas sobre esta experiencia!"): alert("No tienes la edad para asisr al avento");

}


/* ------------------------------ OPERADOR TERNARIO -------------------------------------------  */

