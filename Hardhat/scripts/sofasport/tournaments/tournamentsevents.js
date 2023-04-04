const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://sofasport.p.rapidapi.com/v1/tournaments/events',
  params: {page: '0', course_events: 'last', tournament_id: '95741'},
  headers: {
    'X-RapidAPI-Key': '2393f87588msh0c8df3b6ecf540dp1cde7cjsn6a9e8302348b',
    'X-RapidAPI-Host': 'sofasport.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});