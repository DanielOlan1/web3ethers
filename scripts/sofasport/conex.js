fetch("https://sofasport.p.rapidapi.com/", {
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "2393f87588msh0c8df3b6ecf540dp1cde7cjsn6a9e8302348b",
        "X-RapidAPI-Host": "sofasport.p.rapidapi.com"
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
