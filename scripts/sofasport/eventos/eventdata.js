const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://sofasport.p.rapidapi.com/v1/events/data',
  params: {event_id: '10277254'},
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