const cartas = [
    { nombre: "El gallo", imagen: "Cartas-imagenes/gallo.jpg" },
    { nombre: "El diablito", imagen: "Cartas-imagenes/diablo.jpg" },
    { nombre: "La dama", imagen: "Cartas-imagenes/dama.jpg" },
    { nombre: "El catrin", imagen: "Cartas-imagenes/catrin.jpg" },
    { nombre: "El paraguas", imagen: "Cartas-imagenes/paraguas.jpg" },
    { nombre: "La sirena", imagen: "Cartas-imagenes/sirena.jpg" },
    { nombre: "La escalera", imagen: "Cartas-imagenes/escalera.jpg" },
    { nombre: "La botella", imagen: "Cartas-imagenes/botella.jpg" },

    // y así sucesivamente para cada carta
  ];
  
  let cartaMostrada = "";
  mostrarCarta();
  
  document.getElementById("mostrarCartaBtn").addEventListener("click", () => {
    mostrarCarta();
  });
  
  function mostrarCarta() {
    if (cartas.length > 0) {
      const indiceCartaSeleccionada = Math.floor(Math.random() * cartas.length);
      cartaMostrada = cartas[indiceCartaSeleccionada];
      cartas.splice(indiceCartaSeleccionada, 1);
  
      const imgCartaMostrada = document.getElementById("cartaMostrada");
      imgCartaMostrada.src = "";
      imgCartaMostrada.src = cartaMostrada.imagen;
      imgCartaMostrada.alt = cartaMostrada.nombre;

    } else {
      console.log("Se han mostrado todas las cartas");
    }
    const cartaImagen = document.getElementById('cartaMostrada');
    const mostrarCartasBtn = document.getElementById('mostrarCartasUnaPorUnaBtn');
    let index = 0;
    let intervalID;
    
    function mostrarCarta() {
      const carta = cartas[index];
      cartaImagen.src = carta.imagen;
      cartaImagen.alt = carta.nombre;
      index = (index + 1) % cartas.length;
      if (index === 0) {
        clearInterval(intervalID);
        mostrarCartasBtn.disabled = false;
      }
    }
    
    mostrarCartasBtn.addEventListener('click', () => {
      intervalID = setInterval(() => {
        mostrarCarta();
      }, 200);
      mostrarCartasBtn.disabled = true;
    });

  }