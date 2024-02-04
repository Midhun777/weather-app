const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

//api handling 
const apiKey = "0eb2b840d53255297795ddcca37052e5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=0eb2b840d53255297795ddcca37052e5&q=";

async function checkWeather(city) {
	const response = await fetch(apiUrl + city);
	var data = await response.json();
	console.log(data);
	displayWeather(data);
}

//checkWeather();

function displayWeather(data) {
	if (new String(data.cod).startsWith("4")) {
		document.querySelector('.error').style.display = "block";
	} else {
		//data update
		document.querySelector(".city").innerHTML = data.name;
		document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
		document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
		document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

		//image update 
		if (data.weather[0].main == "Clouds") {
			weatherIcon.src = "./imgs/clouds.png";
		} else if (data.weather[0].main == "Clear") {
			weatherIcon.src = "./imgs/clouds.png";
		} else if (data.weather[0].main == "Rain") {
			weatherIcon.src = "./imgs/rain.png";
		} else if (data.weather[0].main == "Drizzle") {
			weatherIcon.src = "./imgs/drizzle.png";
		} else if (data.weather[0].main == "Mist") {
			weatherIcon.src = "./imgs/mist.png";
		}
		document.querySelector('.weather').style.display = "block";
		document.querySelector('.error').style.display = "none";

	}

}

//onclick
searchButton.addEventListener("click", () => {
	checkWeather(searchBox.value);
})