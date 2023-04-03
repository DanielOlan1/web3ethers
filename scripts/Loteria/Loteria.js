function mostrarCarta() {
    // Crear un array con las cartas de lotería
    const cartas = [
      "El Gallo", "El Diablito", "La Dama", "El Catrín", "El Paraguas", "La Sirena",
      "La Escalera", "La Botella", "El Barril", "El Árbol", "El Melón", "El Valiente",
      "El Gorrito", "La Muerte", "La Pera", "La Bandera", "El Bandolón", "El Violoncello",
      "La Garza", "El Pájaro", "La Mano", "La Bota", "La Luna", "El Cotorro",
      "El Borracho", "El Negrito", "El Corazón", "La Sandía", "El Tambor", "El Camarón",
      "Las Jaras", "El Músico", "La Araña", "El Soldado", "La Estrella", "El Cazo",
      "El Mundo", "El Apache", "El Nopal", "El Alacrán", "La Rosa", "La Calavera",
      "La Campana", "El Cantarito", "El Venado", "El Sol", "La Corona", "La Chalupa",
      "El Pino", "El Pescado", "La Palma", "La Maceta", "El Arpa", "La Rana"
    ];
  
    // Seleccionar una carta al azar
    const cartaSeleccionada = cartas[Math.floor(Math.random() * cartas.length)];
  
    // Mostrar la carta seleccionada en el cuadro de texto
    const cuadroTexto = document.getElementById("cartaMostrada");
    cuadroTexto.value = cartaSeleccionada;
  }