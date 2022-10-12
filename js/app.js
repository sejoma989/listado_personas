// console.log('Archivo app.js loaded');
const personas = [
    new Persona('Joselo', 'chuporico'),
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