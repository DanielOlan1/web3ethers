// Configuramos los parámetros para la solicitud HTTP
const options = {
    method: 'GET',
    url: 'https://sofasport.p.rapidapi.com/v1/sports',
    headers: {
      'X-RapidAPI-Key': '2393f87588msh0c8df3b6ecf540dp1cde7cjsn6a9e8302348b',
      'X-RapidAPI-Host': 'sofasport.p.rapidapi.com'
    }
  };
  
  // Realizamos la solicitud HTTP utilizando Axios
  axios.request(options).then(function (response) {
    // Obtenemos los datos de la respuesta
    const sports = response.data;
  
    // Creamos una lista de deportes en formato HTML
    const sportsList = document.createElement('ul');
    sports.forEach(function (sport) {
      const listItem = document.createElement('li');
      listItem.innerText = sport.name;
      sportsList.appendChild(listItem);
    });
  
    // Agregamos la lista de deportes a la página HTML
    const container = document.getElementById('sports-container');
    container.appendChild(sportsList);
  }).catch(function (error) {
    // Manejamos errores de la solicitud HTTP
    console.error(error);
  });
  