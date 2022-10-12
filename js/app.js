// console.log('Archivo app.js loaded');
const personas = [
    new Persona('Joselo', 'Chuporico'),
    new Persona('Armando', 'Parches')
];

function mostrarPersonas(){
    console.log('Ejecutando mostrarPersonas()...');
    let salidaTexto = '';
    for (let persona of personas){
        console.log(persona);
        salidaTexto += `<li>${persona.nombre} ${persona.apellido}</li>`;        
    }
    document.getElementById('personas').innerHTML = salidaTexto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if (nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    } else{
        console.log('No hay informacion que agregar');
    }
}