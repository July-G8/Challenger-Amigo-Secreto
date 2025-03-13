const inputAmigo = document.getElementById("amigo");

const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo(){

    //console.log(inputAmigo);

    //Validar que el campo no este vacio
    if (inputAmigo.value === ""){
       alert("Debes ingresar un nombre");
       //return;
    }
    else{
      // Valida que no se ingrese un texto en blanco a la lista

      listaAmigos.push(inputAmigo.value);
      //ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value; es la misma linea de abajo
      ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;  
    }

    //Limpiar el campo de entrada
    inputAmigo.ariaValu = "";

    console.log(listaAmigos);
};


function sortearAmigo(){
  
  //Validar que haya amigos disponibles en la lista
  if(listaAmigos.length === 0) {
    alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
    return;
  }

    //Genera un número aleatorio entre 0 y la longitud del array.
    const random = Math.floor(Math.random() * listaAmigos.length);

    //Usa el random para obtener el nombre del amigo sorteado.
    const amigoSecreto = listaAmigos[random]; 

    const resultado = document.getElementById('resultado');
   // ulResultado.innerHTML = `<li>El amigo secreto es : ${amigoSecreto}</li>`;
   resultado.innerHTML = `El Amigo Secreto sorteado es: ${amigoSecreto}`;
};


