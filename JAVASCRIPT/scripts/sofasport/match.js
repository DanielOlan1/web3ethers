const axios = require("axios");
//const hoy = new Date();
//const dia = hoy.getDate();
//const mes = hoy.getMonth() + 1; // Los meses en JavaScript se indexan desde 0, por lo que hay que sumar 1
//const año = hoy.getFullYear();
//const fechaHoy = `${año}-${mes}-${dia}`; // En este caso, la fecha se está formateando como una cadena en formato 'YYYY-MM-DD'

const options = {
    method: 'GET',
    url: 'https://sofasport.p.rapidapi.com/v1/events/schedule/category',
    params: { date: '2023-03-29', category_id: '1' },
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

        // START TIME STAMPconvierte la fecha en una cadena con formato de zona horaria local
        const idStarTime = evento.startTimestamp;
        const date1 = new Date(idStarTime * 1000);
        const timeString1 = date1.toLocaleString();
        console.log(`Start Time: ${timeString1}`);

        // MIDLE TIME convierte la fecha en una cadena con formato de zona horaria local
        const idTime = evento.time.currentPeriodStartTimestamp;
        const date = new Date(idTime * 1000);
        const timeString = date.toLocaleString();
        console.log(`Midle Time: ${timeString}`);

        // FINISH TIME convierte la fecha en una cadena con formato de zona horaria local
        const idTimeChanges = evento.changes.changeTimestamp;
        const date2 = new Date(idTimeChanges * 1000);
        const timeString2 = date2.toLocaleString();
        console.log(`Finis Times: ${timeString2}`);

        //SLUG es el tipo de copa o partido
        // const idslug = evento.slug;
        // console.log(`Slug: ${idslug}`);

        // NOMBRE DE LA LIGA
        const nombreTorneo = evento.tournament.name;
        console.log(`Nombre de la liga: ${nombreTorneo}`);

        //A
        const homescore = evento.homescore;
        console.log(`Homescore: ${homescore}`);
        const current = evento.homeScore.current;
        console.log(`Current: ${current}`);
        const display = evento.homeScore.display;
        console.log(`Display: ${display}`);
        const period1 = evento.homeScore.period1;
        console.log(`Period1: ${period1}`);
        const period2 = evento.homeScore.period2;
        console.log(`Period2: ${period2}`);
        const normaltime = evento.homeScore.normaltime;
        console.log(`Normal Time: ${normaltime}`);

        //B
        const awaycore = evento.awayScore.name;
        console.log(`Awaycore: ${awaycore}`);
        const current1 = evento.awayScore.current;
        console.log(`Current: ${current1}`);
        const display1 = evento.awayScore.display;
        console.log(`Display: ${display1}`);
        const period3 = evento.awayScore.period1;
        console.log(`Period1: ${period3}`);
        const period4 = evento.awayScore.period2;
        console.log(`Period2: ${period4}`);
        const normaltime1 = evento.awayScore.normaltime;
        console.log(`Normal Time: ${normaltime1}`);

        const status = evento.status.description;
        console.log(`Status: ${status}`);

        const coverage = evento.coverage;
        console.log(`Coverage: ${coverage}`);

        //  const hometeam = evento.homeTeam.name;
        //  const hometeamid = evento.homeTeam.id;
        //  console.log(`Equipo Casaid: ${hometeamid}`, `Equipo Casa: ${hometeam}` );

        //  const awayteam = evento.awayTeam.name;
        //  const awayteamid = evento.awayTeam.id;
        //  console.log(`Equipo Visitaid: ${awayteamid}`, `Equipo Visita: ${awayteam}` );

        const finalresult = evento.finalResultOnly;
        console.log(`Final Result Only: ${finalresult}`);

    } else {
        console.log("No se encontraron eventos para la fecha especificada");
    }

    const homescore = evento.homeScore.current;
    const awayscore = evento.awayScore.current;

    console.log(`Home Score: ${homescore}`);
    console.log(`Away Score: ${awayscore}`);

    if (homescore > awayscore) {
        console.log("Home team wins!");
    } else if (homescore < awayscore) {
        console.log("Away team wins!");
    } else {
        console.log("It's a tie!");
    }



    console.log(evento);
}).catch(function (error) {
    console.error(error);
});