const API_URL = "https://randomuser.me/api/?results=15";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Genera un conjunto aleatorio de estrellas.
 */
function generarEstrellas() {
  let numEstrellas = getRandomInt(1, 5);
  let estrellas = "";

  for (let i = 0; i < numEstrellas; i++) {
    estrellas += '<i class="fas fa-star"></i>';
  }
  for (let i = 0; i < 5 - numEstrellas; i++) {
    estrellas += '<i class="far fa-star"></i>';
  }

  return estrellas;
}
/**
 * Cambia la información en el DOM.
 */
async function changeInformation(users) {
  let userhtml = document.getElementById("usuarios");

  users.map((user) => {
    let estrellas = generarEstrellas();

    userhtml.innerHTML += `
    <div class="content">
    <div class="card" >
    <div class="front">
    <div class="imagen">
      <img src=${user.picture.large} alt="" /> 
    </div>
    <div class="nombre">
      <p>${user.name.first}</p>
    </div>
    <div id="estrellas">
     ${estrellas}
    </div>
    <div>
      <p >${user.location.city}</p>
      <p >${user.email}</p>
    </div>
    <div>
          
    <div>
    <a href="portfolio.html" id="btn">Leer Mas</a>  
      
    </div>
    
    </div>
  </div></div>`;
    console.log(userhtml);
  });
}

/**
 * Obtiene los datos de usuario desde la api.
 */
async function fetchUser() {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log("Error en la petición AJAX:", error);

      return null;
    });

  // Almaceno usuario
  let userFetch = response.results ? response.results : null;
  return userFetch;
}

/**
 * Procesa la descarga de usuario y los asigna en el DOM.
 */
async function loadUser() {
  let users = await fetchUser();

  if (users) {
    changeInformation(users);
  }
}
window.document.addEventListener("DOMContentLoaded", loadUser);

//[ ]//`