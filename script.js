const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a9d34a6c3mshf8f03e9f2353a87p101707jsn56fea1a9d610',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

  function msTohm(milliseconds) {
    const dateObject = new Date(milliseconds)
    hours = dateObject.toLocaleString("en-US", {hour: "numeric"}) 
    // minutes =  dateObject.toLocaleString("en-US", {minute: "numeric"})
    return hours;

  }

const getWeather = (city) =>{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp +"c"
		// feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		// wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = msTohm(response.sunrise)
		sunset.innerHTML = msTohm(response.sunset)
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e) =>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Pune")