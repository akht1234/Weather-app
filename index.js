function getData(){

    const city= search.value;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
    const options = {
	    method: 'GET',
	    headers: {
		    'x-rapidapi-key': '7dc3b740afmsh9171ffbb581b39dp16278bjsnc32b15a7c282',
		    'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	    }
    };

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
        .then(response => response.json())
        .then(res=>{
            console.log(res);
            temp.innerHTML= res.temp;
            ws.innerHTML=res.wind_speed;
            hd.innerHTML=res.humidity;
        })
        .then(err => console.log(err));
}