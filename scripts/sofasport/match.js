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
  
    if (eventos && eventos.id) {
      console.log(`ID: ${eventos.id}`);
      console.log(`Torneo: ${eventos.tournament.name}`);
      console.log(`Categoría: ${eventos.tournament.category.name}`);
      console.log(`Estado: ${eventos.status.type}`);
      console.log(`Equipo local: ${eventos.homeTeam.name}`);
      console.log(`Equipo visitante: ${eventos.awayTeam.name}`);
      console.log(`Marcador: ${eventos.homeScore.current} - ${eventos.awayScore.current}`);
      console.log(`Hora: ${eventos.time.full}`);
    } else {
      console.log("No se encontraron eventos para la fecha especificada");
    }  
  }).catch(function (error) {
    console.error(error);
  });
  