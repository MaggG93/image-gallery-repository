const boton_anterior = document.getElementById("boton_anterior");
const boton_siguiente = document.getElementById("boton_siguiente");
const imagen = document.getElementById("imagen");
const galeria = [
  {
    url: "../ejercicio_galeria/src/image1.jpg",
    alt: "La rata encuentra un limón",
  },
  {
    url: "../ejercicio_galeria/src/image2.jpg",
    alt: "La rata se come el limón",
  },
  { url: "../ejercicio_galeria/src/image3.jpg", alt: "La rata se arrepiente" },
];

let index = 0;

function actualizarImagen() {
  imagen.src = galeria[index].url;
  imagen.alt = galeria[index].alt;
  descripcion.textContent = galeria[index].alt;
}

boton_anterior.addEventListener("click", function () {
  if (index === 0) {
    index = galeria.length - 1;
  } else {
    index -= 1;
  }
  actualizarImagen();
});

boton_siguiente.addEventListener("click", function () {
  if (index === galeria.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  actualizarImagen();
});

actualizarImagen();
