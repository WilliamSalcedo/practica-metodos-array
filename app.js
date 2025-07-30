const amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre == "") {
    alert("por favor, inserte un nombre");
    return;
  }

  // Agregar el arreglo

  amigos.push(nombre);
  mostrarLista();

  //limpiar el input

  input.value = "";
}

function mostrarLista() {
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista antes de agregar nuevos elementos
  lista.innerHTML = "";

  // Recorrer el array con un bucle for
  for (let i = 0; i < amigos.length; i++) {
    const nombre = amigos[i];

    // Crear un elemento <li>
    const li = document.createElement("li");
    li.textContent = nombre;

    // Agregarlo a la lista <ul>
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  // Validar que haya al menos un amigo
  if (amigos.length === 0) {
    alert("No hay amigos para sortear. Agrega al menos uno.");
    return;
  }

  // Generar índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre correspondiente
  const nombreSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en el HTML
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${nombreSorteado} ha sido sorteado 🎁</li>`;
}

