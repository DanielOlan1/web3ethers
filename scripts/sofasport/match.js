const axios = require("axios");
const hoy = new Date();
const dia = hoy.getDate();
const mes = hoy.getMonth() + 1; // Los meses en JavaScript se indexan desde 0, por lo que hay que sumar 1
const año = hoy.getFullYear();
const fechaHoy = `${año}-${mes}-${dia}`; // En este caso, la fecha se está formateando como una cadena en formato 'YYYY-MM-DD'

const options = {
    method: 'GET',
    url: 'https://sofasport.p.rapidapi.com/v1/events/schedule/live',
    params: {sport_id: '1', array_params: []},
    headers: {
      'X-RapidAPI-Key': '2393f87588msh0c8df3b6ecf540dp1cde7cjsn6a9e8302348b',
      'X-RapidAPI-Host': 'sofasport.p.rapidapi.com'
    }
  };

//let objetos = [];

axios.request(options).then(function (response) {
    console.log(response.sport_id);
   // let objetos = [];
  //  let options = JSON.stringify(response.data);
    //console.log(JSON.stringify(response.data));
  //  objetos.push(options);
   // console.log(objetos);
}).catch(function (error) {
    console.error(error);
});