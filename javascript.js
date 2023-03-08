let estado1=false;
let estado2=false;
let estado3=false;
let estado4=false;


document.getElementById("boton1").addEventListener("click", function () {
    if(estado1==false){
        document.getElementById("boton1").innerHTML = "<b> PERFIL PROFESIONAL - </b>";
        document.getElementById("vermas1").innerHTML = "Enfermera profesional y trabajadora con experiencia en el cuidado de pacientes, ofreciendo comodidad y seguridad y siguiendo los estándares protocolarios. Con gran capacidad para la gestión avanzada y organizada de los medios a mi alcance.";
        estado1=true;
    }
    else{
        document.getElementById("boton1").innerHTML = "<b> PERFIL PROFESIONAL + </b>";
        document.getElementById("vermas1").innerHTML = "";
        estado1=false;
        
    }
});


document.getElementById("boton2").addEventListener("click", function () {
    if(estado2==false){
        document.getElementById("boton2").innerHTML = "<b> APTITUDES - </b>";
        document.getElementById("vermas2").innerHTML = "<ul><li>Vocación innata por la asistencia sociosanitaria.</li><li>Asistencia a médicos.</li><li> Buen trato al paciente.</li><li>Administración de medicamentos.</li><li>Técnicas asépticas y de esterilización.</li><li>Pruebas de diagnóstico.</li></ul>";
        estado2=true;
    }
    else{
        document.getElementById("boton2").innerHTML = "<b> APTITUDES + </b>";
        document.getElementById("vermas2").innerHTML = "";
        estado2=false;
    }
});

document.getElementById("boton3").addEventListener("click", function () {
    if(estado3==false){
        document.getElementById("boton3").innerHTML = "<b> AFILIACIONES - </b>";
        document.getElementById("vermas3").innerHTML = "Miembro del SATSE desde 2011.";
    estado3=true;
    }
    else{
        document.getElementById("boton3").innerHTML = "<b> AFILIACIONES + </b>";
        document.getElementById("vermas3").innerHTML = "";
        estado3=false;
    }
});

document.getElementById("boton4").addEventListener("click", function () {
    if(estado4==false){
        document.getElementById("boton4").innerHTML = "<b> FORMACIÓN ADICIONAL - </b>";
        document.getElementById("vermas4").innerHTML = "<ul><li>Curso de Especialista en Urgencias Cardiovasculares para Enfermería - Escuela Clínica y de Ciencias de la Salud, 2015.</li></ul>";
    estado4=true;
    }
    else{
        document.getElementById("boton4").innerHTML = "<b> FORMACIÓN ADICIONAL + </b>";
        document.getElementById("vermas4").innerHTML = "";
    estado4=false;
    }
});






