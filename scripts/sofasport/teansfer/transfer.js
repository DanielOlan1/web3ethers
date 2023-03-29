const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://sofasport.p.rapidapi.com/v1/transfers/search',
  params: {
    page: '0',
    max_age: '50',
    sort_type: 'transfer_fee_max',
    min_age: '15',
    popularity: '10',
    nationality: 'ENG',
    position_type: 'G',
    joined: 'true'
  },
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