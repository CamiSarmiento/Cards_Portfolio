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
        <div id="showcase">
            <div class="container">
                <div class="showcase-row">
                    <div class="showcase-row-hi">
                        <h3>Bienvenido a mi Portfolio </h3>
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
      
      <section>
        <div class="container">
           <div id="sobre-mi datos">
               <h2>${profile.name.first} ${profile.name.last}</h2>
               <div id="estrellas">${estrellas}</div>
            </div>
          </div>
      </section>

      <section>
        <div class="container">
            <div id="resumen">
                <p>Usuario: ${profile.login.username}</p>
                <p>Email: ${profile.email}</p>
                <p>Pais: ${profile.location.country}</p>
                <p>Provincia: ${profile.location.state}</p>
                <p>Ciudad: ${profile.location.city}</p>
                <p>Codigo Postal: ${profile.location.postcode}</p>
            </div>

        </div>
      </section>
      
      <section>
        <div class="container">
           
            
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
      
      
      <section id="contacto">
        <div class="container">
            <div class="contact-row centerheader">
                <div id="touch">
                    <h3>Mantegamos el Contacto</h3>
                    <p>Estoy dispuesto a nuevos proyectos y desafios, por favor comparta tanta información como sea posible para que podamos aprovechar al máximo nuestra primera impresion.</p>
                   
                </div>
      
                <div id="form">
                    <h3>Me quieres en tu proyecto?</h3>
                    <form action="">
                        <label for="username"><h5>¿Cual es tu nombre?</h5></label>
                        <input class="textarea" type="text" id="username" name="usename">
                        <label for="email"><h5>Tu Email</h5></label>
                        <input class="textarea" type="email" id="email" name="email">
                        <label for="comment"><h5>¿Como puedo ayudarte?</h5></label>
                        <textarea class="textarea" id="comment" name="comment" row="5" cols="50"></textarea>
                        <div id="btn-holder">
                            <input type="submit" id="submit" name="submit" value="Enviar">
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </section>
      
      <section id="footer">
      <form action=""> 
      <div id="btn-holder">
      <input type="submit" id="submit" name="submit" value="Volver al inicio"></div>
      </form>      
        
      </section>

    </div>
  `;


  // oculta el perfil completo hasta que se haga clic
  const gridContainer = document.getElementById("profile-grid");
  gridContainer.style.display = "none";
  detailContainer.style.display = "flex";
  detailContainer.style.background = "#7a88da";
}

// inicializa la pagina
async function initializePage() {
  const profiles = await fetchProfiles();
  renderProfileThumbnails(profiles);
}

initializePage();

