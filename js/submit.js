const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',enviarForm);

function enviarForm(e){

    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#correo').value;
    const texto = document.querySelector('#texto').value;
    const send = document.querySelector('#send')

    const objDatos = {
        nombre,
        email,
        texto       
    }

    if(Object.values(objDatos).every(input => input !== '') || validarEmail(email)){
        send.setAttribute('href', `mailto:enriquevazquez675@gmail.com?subject=Nombre: ${nombre}  Correo: ${email}&body=${texto}`)
        send.click()
    } else{
        imprimirAlerta('Todos los campos deben estar completos');
    }
}

function validarEmail(mail) { 
    return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail); 
}

function imprimirAlerta(mensaje){
    
    var newElement= document.createElement('div')
    newElement.setAttribute("class", "mensaje");
    newElement.setAttribute("id","mensaje");
    newElement.style.borderRadius= '5px';
    newElement.textContent = mensaje;

    newElement.style.backgroundColor = '#E62020';

    formulario.appendChild(newElement); 

    setTimeout( () => {
        var alertaMensaje = document.querySelector('#mensaje')

        alertaMensaje.remove();
    }, 5000);
}