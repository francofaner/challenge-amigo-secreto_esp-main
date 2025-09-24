// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Paso 1: Declarar el array que almacenará los nombres
let amigos = [];

// Paso 2: Función para agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista en pantalla
    mostrarLista();
}

// Paso 3: Función para mostrar la lista de amigos
function mostrarLista() {
    // Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y crear elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Paso 4: Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos uno.");
        return;
    }

    // Generar un índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indice];

    // Mostrar el resultado
    resultado.innerHTML = `<li>🎉 El amigo secreto es: ${amigoSorteado}</li>`;
}
