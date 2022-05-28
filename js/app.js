import { proyectos } from "./db.js";

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
});

sr.reveal(`.usuario__logo`);
sr.reveal(`.usuario__nombre`, { delay: 500 });
sr.reveal(`.usuario__texto`, { delay: 600 });
sr.reveal(`.usuario__iconos`, { delay: 700 });
sr.reveal(`.items__item`, { interval: 100, delay: 700 });
sr.reveal(`.botones`, { delay: 800 });
sr.reveal(`.navegacion`, { delay: 900 });
sr.reveal(`.contenedor`, { delay: 1000 });

//===== variables =====
const btnProyectos = document.querySelector("#btn-proyectos");
const btnKills = document.querySelector("#btn-kills");
const proyectosContenido = document.querySelector("#proyectos");
const tecnologiasContenido = document.querySelector("#tecnologias");
const temaMoon = document.querySelector(".tema__moon");
const temaSun = document.querySelector(".tema__sun");
const body = document.querySelector("body");

//===== eventos =====
btnProyectos.addEventListener("click", () => {
    btnKills.classList.remove("active");
    btnProyectos.classList.add("active");
    tecnologiasContenido.style.display = "none";
    proyectosContenido.style.display = "flex";
});

btnKills.addEventListener("click", () => {
    btnProyectos.classList.remove("active");
    btnKills.classList.add("active");
    tecnologiasContenido.style.display = "block";
    proyectosContenido.style.display = "none";
});
temaMoon.addEventListener("click", () => {
    body.classList.add("oscuro");
    localStorage.setItem("modo-miniPortafolio", "oscuro");
});
temaSun.addEventListener("click", () => {
    body.classList.remove("oscuro");
    localStorage.setItem("modo-miniPortafolio", null);
});
const getModo = localStorage.getItem("modo-miniPortafolio");
if (getModo) {
    body.classList.add(getModo);
}
function rellenarProyectos() {
    proyectos.forEach((proyecto) => {
        const { imagen, titulo, url, source, id } = proyecto;

        const item = document.createElement("DIV");
        item.classList.add("proyectos__item");

        const img = document.createElement("IMG");
        img.classList.add("proyectos__img");
        img.src = imagen;
        img.alt = titulo

        const informacion = document.createElement("DIV");
        informacion.classList.add("proyectos__informacion");

        const categoriaP = document.createElement("P");
        categoriaP.classList.add("proyecto__categoria");
        categoriaP.textContent = "Web";

        const tituloB = document.createElement("B");
        tituloB.classList.add("proyecto__titulo");
        tituloB.textContent = titulo;

        const contenidoDiv = document.createElement("DIV");
        contenidoDiv.classList.add("proyectos__enlaces");

        const enlaceA1 = document.createElement("A");
        enlaceA1.classList.add("proyectos__enlace");
        enlaceA1.title = "Visitar";
        enlaceA1.href = url;
        enlaceA1.target = "_blank";

        const span1 = document.createElement("SPAN");
        span1.classList.add("ico");

        const i1 = document.createElement("I");
        i1.className = "bx bx-link-alt";

        const enlaceA2 = document.createElement("A");
        enlaceA2.classList.add("proyectos__enlace");
        enlaceA2.title = "Visitar";
        enlaceA2.href = source;
        enlaceA2.target = "_blank";

        const span2 = document.createElement("SPAN");
        span2.classList.add("ico");

        const i2 = document.createElement("I");
        i2.className = "bx bxl-github";

        span1.appendChild(i1);
        enlaceA1.appendChild(span1);
        span2.appendChild(i2);
        enlaceA2.appendChild(span2);

        contenidoDiv.appendChild(enlaceA1);
        contenidoDiv.appendChild(enlaceA2);
        informacion.appendChild(categoriaP);
        informacion.appendChild(tituloB);
        informacion.appendChild(contenidoDiv);
        item.appendChild(img);
        item.appendChild(informacion);

        proyectosContenido.appendChild(item);
    });
}
rellenarProyectos();
