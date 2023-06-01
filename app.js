const API_URL = "https://randomuser.me/api/?results=50";



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

//trae los perfiles desde la API
async function fetchProfiles() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const profiles = data.results ? data.results : [];
    return profiles;
  } catch (error) {
    console.log("Error fetching profiles:", error);
    return [];
  }
}

// perfil para cards de usuarios
function renderProfileThumbnails(profiles) {
  const gridContainer = document.getElementById("profile-grid");
  gridContainer.innerHTML = "";

  profiles.forEach((profile) => {
    const thumbnail = document.createElement("card");
    thumbnail.classList.add("profile-thumbnail");
    let estrellas = generarEstrellas();
    thumbnail.innerHTML = `
   
        <div class="card">
          <div class="front">
            <div class="imagen">
              <img src="${profile.picture.large}" alt="" />
            </div>
            <div class="nombre">
              <p>${profile.name.first} ${profile.name.last}</p>
            </div>
            <div id="estrellas">
              ${estrellas}
            </div>
            <div>
              <p>Pais: ${profile.location.country}</p>
              <p>Ciudad:${profile.location.city}</p>
            </div>
          </div>
        </div>` ;

    thumbnail.addEventListener("click", () => showProfileDetail(profile));
    gridContainer.appendChild(thumbnail);
  });
}

// Detalles del usuario 
function showProfileDetail(profile) {
  const detailContainer = document.getElementById("profile-detail");
  let estrellas = generarEstrellas();
  detailContainer.innerHTML = `
    <div class="profile-detail">

    <header id="mainheader"> 
        <div id="showcase" class="section-content-color light">
            <div class="container">
                <div class="showcase-row">
                    <div class="showcase-row-hi">
                        <h2>Bienvenido a mi Portfolio </h2>
                        <h1>Mi nombre es ${profile.name.first} ${profile.name.last}</h1>
                        <div class="container-anim">
                            <h2 class="tipear">Soy Desarrollador Web</h2>
                        </div>
                        
                    </div>
                   <div class="showcase-row-avatar">
                    <img src="${profile.picture.large}" alt="">
                    </div>
                    
                </div>
            </div>
        </div>
      
      </header>
      
      <section id="sobre-mi" class="section-content light">
        <div class="container">
            <h2>${profile.name.first} ${profile.name.last}</h2>
            <div id="estrellas">${estrellas}</div>
            <p>Usuario: ${profile.login.username}</p>
            <p>Email: ${profile.email}</p>
            <p>Pais: ${profile.location.country}</p>
            <p>Provincia: ${profile.location.state}</p>
            <p>Ciudad: ${profile.location.city}</p>
            <p>Codigo Postal: ${profile.location.postcode}</p>
            
        </div>
      </section>
      
      <section id="resumen" class="section-content light">
        <div class="container">
           
            <div id="resumen-column">
                <div class="My-education-column columnasexp">
                    <h4>Mi educacion</h4>
                    <div id="Education-column" class="educacion">
                        <h5>Ingenieria en Sistemas</h5>
                        <h6>Universidad de El Salvador 2018-Actualidad</h6>
                    </div>
                    <div id="Service-pc-columm" class="educacion">
                        <h5>Reparador de Pc/Instalador de Redes</h5>
                        <h6>CMFP/ 2018-2019</h6>
                    </div>
                    <div id="Digitalers" class="educacion">
                        <h5>Desarrollador Frontend Digitalers/Telecom</h5>
                        <h6>2018</h6>
                    </div>
                </div>
                <div class="My-experience-column columnasexp">
                    <h4>Mi Experiencia</h4>
                    <div id="autonomo" class="experiencia">
                        <h5>Trabajo autonomo/Freelance Service Pc-Frontend</h5>
                        <h6>Autonomo/ 2018-Actualidad</h5>
                    </div>
                    <div id="negocio" class="experiencia">
                        <h5> Junior Web Developer </h5>
                        <h6>Glory Tech Inc/2021-Actualidad</h6>
                    </div>
                    <div id="Callcenter"
                    class="experiencia">
                        <h5>CallCenter</h5>
                        <h6>T-Call/ 2018-2019</h6>
                    </div>
                </div>
            </div>
            <div id="skills">
                <div class="container">
                <h4>Mis Habilidades</h4>
                <div class="skillbars">
                    <div id="web-design">
                        <p>Diseño Web 65%</p>
                        <div class="container-bar">
                            <div class="skill web-design"></div>
                        </div>
                    </div>
                    <div id="html-css">
                        <p>HTML/CSS 90%</p>
                        <div class="container-bar">
                            <div class="skill html-css"></div>
                        </div>
                    </div>
                    <div id="javascript">
                        <p>Javascript 50%</p>
                        <div class="container-bar">
                            <div class="skill js"></div>
                        </div>
                    </div>
                
                
                    <div id="React JS">
                        <p>React Js 15%</p>
                        <div class="container-bar">
                            <div class="skill React"></div>
                        </div>
                    </div>
                    <div id="PHP">
                        <p>PHP 30%</p>
                        <div class="container-bar">
                            <div class="skill PHP"></div>
                        </div>
                    </div>
                    <div id="Bootstrap">
                        <p>Bootstrap 95%</p>
                        <div class="container-bar">
                            <div class="skill Bootstrap"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      
      <section id="contacto" class="section-content-color light">
        <div class="container">
            <div class="contact-row centerheader">
                <div id="touch">
                    <h3>Mantegamos el Contacto</h3>
                    <p>Estoy dispuesto a nuevos proyectos y desafios, por favor comparta tanta información como sea posible para que podamos aprovechar al máximo nuestra primera impresion.</p>
                   
                </div>
      
                <div id="form">
                    <h3>Me quieres en tu proyecto?</h3>
                    <form action="">
                        <label for="username"><h5>Cual es tu nombre?</h5></label>
                        <input class="textarea" type="text" id="username" name="usename">
                        <label for="email"><h5>tu Email</h5></label>
                        <input class="textarea" type="email" id="email" name="email">
                        <label for="comment"><h5>Como puedo ayudarte</h5></label>
                        <textarea class="textarea" id="comment" name="comment" row="5" cols="50"></textarea>
                        <div id="btn-holder">
                            <input type="submit" id="submit" name="submit" value="Enviar">
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </section>
      
      <section id="footer" class="section-content-color light">
        <div class="container">
            <div id="footer-row">
                
            </div>
        </div>
      </section>

    </div>
  `;

  // oculta el perfil completo hasta que se haga clic
  const gridContainer = document.getElementById("profile-grid");
  gridContainer.style.display = "none";
  detailContainer.style.display = "flex";
  detailContainer.style.background = "white";
}

// inicializa la pagina
async function initializePage() {
  const profiles = await fetchProfiles();
  renderProfileThumbnails(profiles);
}

initializePage();

  // function loadUser() {
  //    let users = await fetch(API_URL);
    
  //     if (users) {
  //        changeInformation(users);
  //     }
  //   }
  //   window.document.addEventListener("DOMContentLoaded", loadUser);


// const API_URL = "https://randomuser.me/api/?results=50";

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// /**
//  * Genera un conjunto aleatorio de estrellas.
//  */
// function generarEstrellas() {
//   let numEstrellas = getRandomInt(1, 5);
//   let estrellas = "";

//   for (let i = 0; i < numEstrellas; i++) {
//     estrellas += '<i class="fas fa-star"></i>';
//   }
//   for (let i = 0; i < 5 - numEstrellas; i++) {
//     estrellas += '<i class="far fa-star"></i>';
//   }

//   return estrellas;
// }

// /**
//  * Cambia la información en el DOM.
//  */

// async function changeInformation(users) {
//   let userhtml = document.getElementById("usuarios");
//    const readMoreClickFuntion = () => {
//     console.log(users)
//   };
//   window.readMoreClick = readMoreClickFuntion;

//   users.map((user) => {
//     let estrellas = generarEstrellas();

//   userhtml.innerHTML += `
//     <div class="content">
//     <div class="card" >
//     <div class="front">
//     <div class="imagen">
//       <img src=${user.picture.large} alt="" />
//     </div>
//     <div class="nombre">
//     <p>Nombre: ${user.name.first}, ${user.name.last}</p>
//    </div>
//     <div id="estrellas">
//      ${estrellas}
//     </div>
//     <div>
//       <p >Pais: ${user.nat}</p>
//       <p >Ciudad: ${user.location.city}</p>
//     </div>
//     <div>

//     <div>
//     <a href="portfolio.html" id="btn" onclick="readMoreClick()">Leer Mas</a>

//     </div>

//     </div>
//   </div></div>`;
//     console.log(userhtml);
//   });}

// /**
//  * Obtiene los datos de usuario desde la api.
//  */
// async function fetchUser() {
//   const response = await fetch(API_URL, {
//     method: "GET",
//     headers: {
//       "Content-type": "application/json",
//     },
//   })
//     .then(function (response) {
//       return response.json();
//     })

//     .catch(function (error) {
//       console.log("Error en la petición AJAX:", error);

//       return null;
//     });

//   //Redirige a la pagina portfolio

//   //Almaceno usuario
//   let userFetch = response.results ? response.results : null;
//   return userFetch;
// }

// /**
//  * Procesa la descarga de usuario y los asigna en el DOM.
//  */
// async function loadUser() {
//   let users = await fetchUser();

//   if (users) {
//     changeInformation(users);
//   }
// }
// window.document.addEventListener("DOMContentLoaded", loadUser);

//[ ]
// function readMoreClick() {
//   fetch(API_URL)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.results);
//       window.Location.href = "portfolio.html";
//     })
//     .catch((error) => console.error(error));
// }
//
// const UserData = JSON.parse(localStorage.getItem("userData"));
//`localStorage.setItem("userData", JSON.stringify(data.results));

// Para pasar los datos de la API a un botón que lleva a un enlace para mostrar más datos, puedes hacer lo siguiente:

//     Crea una función que tome como parámetro el usuario seleccionado y que redirija a la página donde se mostrarán los datos adicionales. Por ejemplo:

// function mostrarMasDatos(usuario) {
//   // Redirigir a la página de detalles del usuario
//   window.location.href = `https://mi-sitio.com/usuarios/${usuario.id}`;
// }

//     Dentro del loop map que recorre los usuarios, agrega el atributo onclick al enlace "Leer Más" y llama a la función mostrarMasDatos pasando el usuario correspondiente como parámetro. Por ejemplo:

// users.map((user) => {
//   // ...
//   userhtml.innerHTML += `
//     <div class="content">
//       <div class="card">
//         <div class="front">
//           <!-- ... -->
//           <div>
//             <a href="#" onclick="mostrarMasDatos(${JSON.stringify(user)})">Leer Más</a>
//           </div>
//         </div>
//       </div>
//     </div>`;
// });

//     En la función mostrarMasDatos, puedes acceder a los datos del usuario seleccionado y mostrarlos en la página de detalles. Por ejemplo:

// function mostrarMasDatos(usuario) {
//   // Redirigir a la página de detalles del usuario
//   window.location.href = `https://mi-sitio.com/usuarios/${usuario.id}`;

//   // Mostrar los datos adicionales
//   const detallesUsuario = document.getElementById("detalles-usuario");
//   detallesUsuario.innerHTML = `
//     <h2>${usuario.name.first} ${usuario.name.last}</h2>
//     <p>Correo electrónico: ${usuario.email}</p>
//     <p>Teléfono: ${usuario.phone}</p>
//     <!-- ... -->
//   `;
// }