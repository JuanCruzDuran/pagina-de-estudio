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

var intervalo;

function contador(param) {
  var reloj = document.getElementById('reloj');
  var ho = 0;
  var mins = 0;
  var secs = 1;
  if(param === 1){
  intervalo = setInterval(function(){

    reloj.innerHTML = `${ho}:${mins}:${secs}`;
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
  }
  if(param === 2){
    clearInterval(intervalo);
  }
  if(param === 3){
    ho = 0;
    mins = 0;
    secs = 1;
    reloj.innerHTML = "0:0:0";
  }
}

function ponerTiempo(num) {
  var input = document.getElementById('reloj');
  input.value += num;
}


