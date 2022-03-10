


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
        listadoMenu.push(new Preparacion('Spicy California', 40, 44000, 'Sushi con salmon, aguacate, cebollin, salsa rocoto y salsa chipotle', 'comida',"img/arrozpic.jpeg" ));
        listadoMenu.push(new Preparacion('Ramen Vegetales',  50 , 18000,'Tallarines salteados con vegetales, consome de vegetales, wakame y aceite de chile', 'comida', "img/sopa.jpeg"));
        listadoMenu.push(new Preparacion('Poke atùn', 100, 15400, `Atùn marinado, cilantro, mango biche, limon, salsa poke, arroz`, 'comida', "img/atun.jpeg"));

        listadoMenu.push(new Preparacion('Copoazu', 50, 7000, ' Bebida de Extracto de Zanahoria & pepino', 'bebida', "img/jugo 9 .jpg"));
        listadoMenu.push(new Preparacion('Gulupa', 30, 5000, 'Bebida de Arazá, banano, hierbabuena.', 'bebida', "img/jugo 6.jpg"));
        listadoMenu.push(new Preparacion('Thai Tea', 80, 12000, 'Té de flores con infusión de limonaria y lychees.', 'bebida', "img/jugo 4.jpg"));
        listadoMenu.push(new Preparacion('Cafe', 200, 5000, ' Delicioso y aromatico cafe recien molido', 'bebida', "img/cafe.jpeg"));
        listadoMenu.push(new Preparacion('Te Chai', 40, 12000, 'Bebida típica del sur de la India, mezcla de té con especias y hierbas aromáticas.​​ ', 'bebida', "img/chai.jpeg"));
        listadoMenu.push(new Preparacion('Vino(Temporada)', 120, 90000, 'Las variedades de Vino tinto con notas afrutadas y con baja concentración de taninos ', 'bebida', "img/vino.jpeg"));


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
                                                        <button type="button" class="btn btn-secondary">Agregar</button>
                                                    </p>
                                                    
                                                    </div>
                                                </div>
                                                </div>
                                            </div>    
                                        </div> `
        
                catalogo.appendChild(contenedor);       
            } 

    }


/* SELECCION MULTIPLE  DEL MENU*/

    var boton = document.getElementById('boton');
var lista = document.getElementById('lista');
var checks = document.querySelectorAll('.valores');

boton.addEventListener('click', function(){
    lista.innerHTML ='';
    checks.forEach((e)=>{
        if(e.checked == true){
            var elemento =document.createElement('P');
            elemento.innerHTML =e.value;
            lista.appendChild(elemento);

        }
    });
});

/* SELECCION MULTIPLE  DEL MENU*/




                      







