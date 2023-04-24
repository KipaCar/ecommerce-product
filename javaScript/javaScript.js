// Maximizar las fotos
let imagenParaVerModal = document.getElementById("marco");

imagenParaVerModal.addEventListener("click", (e) => {
  document.getElementById("gallery").style.display = "flex";

  if (window.matchMedia("(max-width: 375px)").matches) {
    document.getElementById("gallery").style.display = "none";
  }
});

//Cerrar modal fotos
let cerrarModal = document.getElementById("cerrar");

cerrarModal.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("gallery").style.display = "none";
});

//Navbar responsive

let hamburguesa = document.getElementById("hamburguesa");

hamburguesa.addEventListener("click", (e) => {
  document.getElementById("cabecera__responsive").style.display = "flex";
});

//Cerrar navBar responsive
let cerrarMenu = document.getElementById("cabecera__responsive__close");

cerrarMenu.addEventListener("click", (e) => {
  document.getElementById("cabecera__responsive").style.display = "none";
});

//Modal carrito
let iconoCarrito = document.getElementById("icono-carrito");
let modalCarrito = document.getElementById("cabecera__dropdown");

iconoCarrito.addEventListener("click", function () {
  if (modalCarrito) {
    modalCarrito.style.display =
      modalCarrito.style.display == "none" ? "block" : "none"; //damos un atributo display:none que oculta el div
  }

  window.onload = function () {
    modalCarrito.style.display == "block";
  };
});
//Incrementar o decrementar el numero de articulo

let restarNumero = document.getElementById("menos");
let sumarNumero = document.getElementById("mas");
let cantidad = document.getElementById("cantidad");
let valor = 0;
restarNumero.addEventListener("click", function () {
  event.preventDefault();
  valor--;
  cantidad.innerText = valor;
});

sumarNumero.addEventListener("click", function () {
  event.preventDefault();
  valor++;
  cantidad.innerText = valor;
});

// Sumar productor al carrito de compra
let divAPintar = document.getElementById("carrito");
let botonAñadir = document.getElementById("boton-añadir");
let containerBotones = document.getElementById("container__info__buttons");

botonAñadir.addEventListener("click", (e) => {
  e.preventDefault();
  divAPintar.style.display = "flex";

  divAPintar.innerHTML = valor;

  document.getElementById("cabecera__dropdown__text").style.display = "none";
  document.getElementById("nuevo-producto").style.display = "block";
  document.getElementById("numero-producto").innerHTML = valor;
  let calcularTotal = 125 * valor;
  document.getElementById("precio-total").innerHTML = ` $${calcularTotal}.00`;
  cantidad.innerHTML = "0";
  valor = "0";
});

//borrar datos del carrito

let papelera = document.getElementById("papelera");

papelera.addEventListener("click", (e) => {
  divAPintar.style.display = "none";
  document.getElementById("cabecera__dropdown__text").style.display = "block";
  document.getElementById("nuevo-producto").style.display = "none";
});

/////////////////////
//Desplazamiento de las imagenes principal

let currentIndex = 0;
let thumbnailsPrincipal = document.querySelectorAll(
  ".container__carrusel__thumbnail__img"
);
let marcoPrincipal = document.querySelector(".marco img");
// let marcoImg=document.querySelector('.marco img');
//////////////
function showImagePrincipal(index) {
  marcoPrincipal.src = thumbnailsPrincipal[index].src;
}

// Evento de clic en las miniaturas
thumbnailsPrincipal.forEach(function (thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    currentIndex = index;
    showImagePrincipal(currentIndex);

    for (let index = 0; index < thumbnailsPrincipal.length; index++) {
      thumbnailsPrincipal[index].style.border = "none";
      thumbnailsPrincipal[index].style.opacity = "1";
    }
    thumbnailsPrincipal[index].style.border = "2px solid orange";
    thumbnailsPrincipal[index].style.opacity = "0.5";
  });
});

let leftArrowPrincipal = document.querySelector(".arrow-left-principal");
let rightArrowPrincipal = document.querySelector(".arrow-right-principal");
// Evento de clic en la flecha izquierda
leftArrowPrincipal.addEventListener("click", function () {
  currentIndex =
    currentIndex === 0 ? thumbnailsPrincipal.length - 1 : currentIndex - 1;
  showImagePrincipal(currentIndex);
});

// Evento de clic en la flecha derecha
rightArrowPrincipal.addEventListener("click", function () {
  currentIndex =
    currentIndex === thumbnailsPrincipal.length - 1 ? 0 : currentIndex + 1;
  showImagePrincipal(currentIndex);
});


// Desplazamiento de imágenes con las flechas en el modal
let thumbnails = document.querySelectorAll(".thumbnail");
let mainImage = document.querySelector(".main-image img");
let leftArrow = document.querySelector(".left");
let rightArrow = document.querySelector(".right");

// Muestra la imagen seleccionada en la imagen grande
function showImage(index) {
  mainImage.src = thumbnails[index].src;
}

// Evento de clic en las miniaturas
thumbnails.forEach(function (thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    currentIndex = index;
    showImage(currentIndex);

    for (let index = 0; index < thumbnails.length; index++) {
      thumbnails[index].style.border = "none";
      thumbnails[index].style.opacity = "1";
    }
    thumbnails[index].style.border = "2px solid orange";
    thumbnails[index].style.opacity = "0.5";
  });
});

// Evento de clic en la flecha izquierda
leftArrow.addEventListener("click", function () {
  currentIndex = currentIndex === 0 ? thumbnails.length - 1 : currentIndex - 1;
  showImage(currentIndex);
});

// Evento de clic en la flecha derecha
rightArrow.addEventListener("click", function () {
  currentIndex = currentIndex === thumbnails.length - 1 ? 0 : currentIndex + 1;
  showImage(currentIndex);
});
