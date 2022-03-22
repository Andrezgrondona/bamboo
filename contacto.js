

function guardarDatos(){
    let anombre,atelefono,aemail;

    anombre = document.getElementById("nombre").value/* ES IMPORTANTE PONER (.value) PARA QUE SALGA el texto CONSOLE.LOG */
    atelefono = document.getElementById("telefono").value
    aemail = document.getElementById("mail").value
    Aasunto = document.getElementById("asunto").value

    localStorage.setItem("nombre",anombre);
    localStorage.setItem("telefono",atelefono);
    localStorage.setItem("mail",aemail);
    localStorage.setItem("asunto",Aasunto);


}

