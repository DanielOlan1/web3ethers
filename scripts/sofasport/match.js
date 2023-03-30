const axios = require("axios");

const hoy = new Date();
const dia = hoy.getDate();
const mes = hoy.getMonth() + 1; // Los meses en JavaScript se indexan desde 0, por lo que hay que sumar 1
const año = hoy.getFullYear();
const fechaHoy = `${año}-${mes}-${dia}`; // En este caso, la fecha se está formateando como una cadena en formato 'YYYY-MM-DD'

const options = {
    method: 'GET',
    url: 'https://sofasport.p.rapidapi.com/v1/events/schedule/category',
    params: {date: fechaHoy, category_id: '1'},
    headers: {
      'X-RapidAPI-Key': '2393f87588msh0c8df3b6ecf540dp1cde7cjsn6a9e8302348b',
      'X-RapidAPI-Host': 'sofasport.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    const eventos = response.data;
    const evento = eventos.data[0]; // Obtener el primer evento del array
    
    if (evento) {
      const idEvento = evento.id; 
      console.log(`ID del evento: ${idEvento}`);
    } else {
      console.log("No se encontraron eventos para la fecha especificada");
    }

    if (evento) {
        const idslug = evento.slug; 
        console.log(`Slug: ${idslug}`);
      } else {
        console.log("No se encontraron eventos para la fecha especificada");
      }

      if (evento) {
        const idtournament = evento.winnerCode; 
        console.log(`WinerCode: ${idtournament}`);
      } else {
        console.log("No se encontraron eventos para la fecha especificada");
      }

      if (evento) {
        const homescore = evento.homescore; 
        console.log(`HomeScore: ${homescore}`);
      } else {
        console.log("No se encontraron eventos para la fecha especificada");
      }

      
  }).catch(function (error) {
    console.error(error);
  });