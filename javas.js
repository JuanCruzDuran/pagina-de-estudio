function prueba(){
    alert("primera function")
    console.log("primera function");
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





  //calculadora chatgpt
  var operando1 = '';
  var operando2 = '';
  var operador = '';
  
  function agregarNumero(numero) {
    if (operador === '') {
      operando1 += numero;
    } else {
      operando2 += numero;
    }
  }
  
  function agregarPunto() {
    if (operador === '') {
      if (!operando1.includes('.')) {
        operando1 += '.';
      }
    } else {
      if (!operando2.includes('.')) {
        operando2 += '.';
      }
    }
  }
  
  function realizarOperacion(op) {
    operador = op;
  }
  
  function calcularResultado() {
    var resultadoElement = document.getElementById('resultado');
    var resultado;
  
    switch (operador) {
      case '+':
        resultado = parseFloat(operando1) + parseFloat(operando2);
        break;
      case '-':
        resultado = parseFloat(operando1) - parseFloat(operando2);
        break;
      case '*':
        resultado = parseFloat(operando1) * parseFloat(operando2);
        break;
      case '/':
        resultado = parseFloat(operando1) / parseFloat(operando2);
        break;
      default:
        resultado = '';
    }
  
    resultadoElement.value = resultado;
  }
  
  function borrarP() {
    operando1 = '';
    operando2 = '';
    operador = '';
    document.getElementById('resultado').value = '';
  }
  
//lista to do

function notaNueva(){
  var contenedor = document.getElementById('listaToDo');
  var contenido = document.createElement('p');
  var content = document.getElementById('notas');
  var nota = document.createElement('input');
  var btnborrar = document.createElement('button');

  if (content.value === "") {
    return;
  };

  nota.type = 'checkbox';

  contenido.textContent = content.value;
  contenedor.appendChild(nota);
  contenedor.appendChild(contenido);
  contenedor.appendChild(btnborrar);
  
  btnborrar.onclick = function () {
    contenedor.removeChild(nota);
    contenedor.removeChild(contenido);
    contenedor.removeChild(btnborrar);
  };
  btnborrar.textContent = 'borrar';

  content.value = '';
}



//to do list GPT
function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value;

  if (task === "") {
    alert("Por favor, ingresa una tarea.");
    return;
  }

  var taskList = document.getElementById("taskList");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(task));

  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Eliminar"));
  deleteButton.onclick = function() {
    taskList.removeChild(li);
  };

  li.appendChild(deleteButton);
  taskList.appendChild(li);

  input.value = "";
}

//Reloj
function reloj() {
  var date = new Date();
  var reloj = document.getElementById('hora');
  var ho = date.getHours()
  var mins = date.getMinutes()
  var secs = date.getSeconds()
  reloj.innerHTML = `${ho}:${mins}:${secs}`;
}

setInterval(reloj,1000);

function contador() {
  var intervalo;
  var reloj = document.getElementById('reloj');
  
  intervalo = setInterval(function(){
    reloj.value++;
    reloj.value = String(reloj).padStart(8,'0');
  },1000);
}

function ponerTiempo(num) {
  var input = document.getElementById('reloj');
  input.value += num;
}

//temporizador GPT
// Obtener elementos del DOM
const timeDisplay = document.getElementById('time-display');
const increaseMinutesBtn = document.getElementById('increase-minutes');
const decreaseMinutesBtn = document.getElementById('decrease-minutes');
const increaseSecondsBtn = document.getElementById('increase-seconds');
const decreaseSecondsBtn = document.getElementById('decrease-seconds');
const startTimerBtn = document.getElementById('start-timer');

let minutes = 0;
let seconds = 0;
let countdownInterval;

// Función para actualizar la pantalla con el tiempo restante
function updateDisplay() {
  const displayMinutes = String(minutes).padStart(2, '0');
  const displaySeconds = String(seconds).padStart(2, '0');
  timeDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
}

// Función para aumentar los minutos
function increaseMinutes() {
  minutes += 1;
  updateDisplay();
}

// Función para disminuir los minutos
function decreaseMinutes() {
  if (minutes > 0) {
    minutes -= 1;
    updateDisplay();
  }
}

// Función para aumentar los segundos
function increaseSeconds() {
  seconds += 1;
  if (seconds >= 60) {
    seconds = 0;
    increaseMinutes();
  }
  updateDisplay();
}

// Función para disminuir los segundos
function decreaseSeconds() {
  if (seconds > 0) {
    seconds -= 1;
  } else if (minutes > 0) {
    seconds = 59;
    decreaseMinutes();
  }
  updateDisplay();
}

// Función para iniciar el temporizador
function startTimer() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
  countdownInterval = setInterval(() => {
    if (seconds > 0) {
      seconds -= 1;
    } else if (minutes > 0) {
      minutes -= 1;
      seconds = 59;
    } else {
      clearInterval(countdownInterval);
    }
    updateDisplay();
  }, 1000);
}

// Agregar event listeners a los botones
increaseMinutesBtn.addEventListener('click', increaseMinutes);
decreaseMinutesBtn.addEventListener('click', decreaseMinutes);
increaseSecondsBtn.addEventListener('click', increaseSeconds);
decreaseSecondsBtn.addEventListener('click', decreaseSeconds);
startTimerBtn.addEventListener('click', startTimer);

