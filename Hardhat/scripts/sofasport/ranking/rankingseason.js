const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://sofasport.p.rapidapi.com/v1/rankings/season',
  params: {ranking: 'uefa_country', year: '2022'},
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