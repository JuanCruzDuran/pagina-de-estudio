function prueba(){
    alert("primera function")
    console.log("primera function");
};

function id(param){
  return document.getElementById(`${param}`);
};

//calculadora
var numero1 = '';
var numero2 = '';
var operacion = '';

function editarInput(num) {
    // Obtén el elemento <input> por su ID
    var calculadora = document.getElementById('pantallaCalc');
  
    // Modifica el valor del <input>
    calculadora.value = calculadora.value + num;
    if (operacion === '') {
        numero1 += num;
      } else {
        numero2 += num;
      }
  };

  function agregarPuntos() {
    if (operacion === '') {
      if (!numero1.includes('.')) {
        numero1 += '.';
      }
    } else {
      if (!numero2.includes('.')) {
        numero2 += '.';
      }
    }
    var calculadora = document.getElementById('pantallaCalc');
    calculadora.value += '.';
  };

function borrar(){
    var calculadora = document.getElementById('pantallaCalc');
    calculadora.value = '';
    numero1 = '';
    numero2 = '';
    operacion = '';
  };

  function resultado(){
    var calculadora = document.getElementById('pantallaCalc');
    var resultados = '';
  
    switch (operacion) {
      case '+':
        resultados = parseFloat(numero1) + parseFloat(numero2);
        break;
      case '-':
        resultados = parseFloat(numero1) - parseFloat(numero2);
        break;
      case '*':
        resultados = parseFloat(numero1) * parseFloat(numero2);
        break;
      case '/':
        resultados = parseFloat(numero1) / parseFloat(numero2);
        break;
    };
        numero1 = resultados
        numero2 = ''
        calculadora.value = resultados;
       
  };

  function cambiarOperacion(op) {
    var calculadora = document.getElementById('pantallaCalc');
    calculadora.value = '';
    operacion = op;
  };






  
//lista to do

document.addEventListener('DOMContentLoaded', function() {
  mostrarTareas();

  function notaNueva() {
    var contenedor = document.getElementById('listaToDo');
    var contenido = document.createElement('p');
    var content = document.getElementById('notas');
    var nota = document.createElement('input');
    var btnborrar = document.createElement('button');

    if (content.value === "") {
      return;
    }

    nota.type = 'checkbox';

    contenido.textContent = content.value;
    contenedor.appendChild(nota);
    contenedor.appendChild(contenido);
    contenedor.appendChild(btnborrar);

    var nuevaTarea = {
      contenido: content.value,
      completada: false
    };

    var tareas = obtenerTareas();
    tareas.push(nuevaTarea);
    guardarTareas(tareas);

    btnborrar.onclick = function () {
      contenedor.removeChild(nota);
      contenedor.removeChild(contenido);
      contenedor.removeChild(btnborrar);

      var tareas = obtenerTareas();
      var index = tareas.findIndex(function (tarea) {
        return tarea.contenido === nuevaTarea.contenido;
      });
      if (index !== -1) {
        tareas.splice(index, 1);
      }
      guardarTareas(tareas);
    };
    btnborrar.textContent = 'borrar';

    content.value = '';
  }

  function obtenerTareas() {
    const tareas = localStorage.getItem('tareas');
    if (tareas) {
      return JSON.parse(tareas);
    } else {
      return [];
    }
  }

  function guardarTareas(tareas) {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }

  function mostrarTareas() {
    var contenedor = document.getElementById('listaToDo');
    contenedor.innerHTML = '';

    var tareas = obtenerTareas();

    tareas.forEach(function (tarea) {
      var nota = document.createElement('input');
      var contenido = document.createElement('p');
      var btnborrar = document.createElement('button');

      nota.type = 'checkbox';
      contenido.textContent = tarea.contenido;

      nota.checked = tarea.completada;

      contenedor.appendChild(nota);
      contenedor.appendChild(contenido);
      contenedor.appendChild(btnborrar);

      nota.onchange = function () {
        tarea.completada = nota.checked;
        var tareas = obtenerTareas();
        var index = tareas.findIndex(function (t) {
          return t.contenido === tarea.contenido;
        });
        if (index !== -1) {
          tareas[index].completada = tarea.completada;
        }
        guardarTareas(tareas);
      };

      btnborrar.onclick = function () {
        contenedor.removeChild(nota);
        contenedor.removeChild(contenido);
        contenedor.removeChild(btnborrar);

        var tareas = obtenerTareas();
        var index = tareas.findIndex(function (t) {
          return t.contenido === tarea.contenido;
        });
        if (index !== -1) {
          tareas.splice(index, 1);
        }
        guardarTareas(tareas);
      };

      btnborrar.textContent = 'borrar';
    });
  }

  var form = document.getElementById('formulario');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    notaNueva();
  });
});


//Reloj
function reloj() {
  var date = new Date();
  var reloj = document.getElementById('hora');
  var ho = date.getHours()
  var mins = date.getMinutes()
  var secs = date.getSeconds()
  reloj.innerHTML =  addLeadingZero(ho) + ":" + addLeadingZero(mins) + ":" + addLeadingZero(secs);
}

var intervaloCont;
var intervalo;

function contador(param) {
  var reloj = document.getElementById('reloj');
  var starbtn = document.getElementById('startContador');
  var reset = document.getElementById('resetContador');
  var pause = document.getElementById('pauseContador');
  var ho = 0;
  var mins = 0;
  var secs = 1;
  if(param === 1){
  intervaloCont = setInterval(function(){

    reloj.innerHTML = addLeadingZero(ho) + ":" + addLeadingZero(mins) + ":" + addLeadingZero(secs);
    secs++;
    if(secs === 60){
      secs = 0;
      mins++;
    }
    if(mins === 60){
      mins = 0;
      ho++;
    }
  },1000);
  pause.disabled = false;
  starbtn.disabled = true;
  }
  if(param === 2){
    clearInterval(intervaloCont);
    reset.disabled = false;
  }
  if(param === 3){
    ho = 0;
    mins = 0;
    secs = 1;
    reloj.innerHTML = "00:00:00";
    starbtn.disabled = false;
    reset.disabled = true;
    pause.disabled = true;
  }
}

function ponerTiempo(num) {
  var input = document.getElementById('timer');
  var tiempo = num;
  
  if(input.innerText.length > 5){
    return;
  }
  else{
    input.innerHTML += tiempo;
  }
  

}
function borrarLast(){
  var input = document.getElementById('timer');
  var contenido = input.innerText;

  if (contenido.length > 0) {
    var nuevoValor = contenido.substring(0, contenido.length - 1);
    input.innerText = nuevoValor;
  }
}

function convertToTime() {
  var timer = document.getElementById('timer');
  var seconds = timer.innerText;
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var remainingSeconds = seconds % 60;

  var timeString = addLeadingZero(hours) + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(remainingSeconds);
    timer.innerText = timeString;
}

function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}

function temporizador(num){
  var timer = document.getElementById('timer');
  var tiempo = parseInt(timer.innerHTML);
  var delBtn = document.getElementById('delBtn')
  var tempBtn = document.getElementById('tempBtn')
  
  if(num === 1){
  delBtn.disabled=true
  intervalo = setInterval(function(){
    tiempo--;
    timer.innerText = tiempo
    if(tiempo === 0 ){
      clearInterval(intervalo);
      tempBtn.disabled = false;
      delBtn.disabled = false;
    };  
  },1000)
  tempBtn.disabled = true;

  }
  if(num === 2 || tiempo < 1){
    clearInterval(intervalo);
    tempBtn.disabled = false;
    delBtn.disabled = false;
  }
}

function randomImg() {
  var imagen = document.getElementById("imgR");
  var srcActual = imagen.src;
  var timestamp = new Date().getTime(); // Genera un timestamp único
  imagen.src = srcActual + "?timestamp=" + timestamp;
}

var imagenes = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqIlGHgf1YJfPEZ7saB8WSOYj5nqekiCvqA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkViOnhOO30R_qjaBKzxQkRttOhq7o6PlatA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-E7PuX_JBVFmpwRiOXGx_zN87iPBdguRsWQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8_u8XwRFCpu6W8DmiAuINZutk8W-Z7U26A&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2CU9wZZwg7zNA9QWNGYmJod1rrKrGcb4cQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3T-IcWtOmM3S2fkZp2FOEKQ3oMADur2hKg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCu4PjG5h7FN1AtWlUlL_d9CY7NepVY0yIZw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_q6LQhSCHu2Mmo7Ol3gAyToy0zfIG7OdFog&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgz6kOFmWqaAXXseQvLGpu0oSMDNehLNwkQ&usqp=CAU"
];

var indiceActual = 0; // Variable para rastrear el índice actual

function pasarImg(param) {
  var img = document.getElementById("galeria1");
  
  // Actualizar el índice en función del parámetro recibido
  indiceActual = (indiceActual + param) % imagenes.length;
  
  // Ajustar el índice si es menor que cero
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }

  // Establecer la imagen actual
  img.src = imagenes[indiceActual];
}

function comprobarForm() {
  var nombre = document.getElementById("fnombre");
  var apellido = document.getElementById("fapellido");
  var nombreU = document.getElementById("fnombreu");
  var email = document.getElementById("femail");
  var telefono = document.getElementById("ftel");

  if(nombre.value.length === 0 || apellido.value.length === 0){
    alert('el campo nombre,apellido o telefono es invalido');
  }
  if(telefono.value.length !== 10){
    alert("numero de telefono invalido");
  }
  if(!email.value.endsWith("@gmail.com")){
    alert("correo no valido");
  }
}