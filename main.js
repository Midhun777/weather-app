const apiKey = "0eb2b840d53255297795ddcca37052e5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=0eb2b840d53255297795ddcca37052e5&q=";

async function checkWeather(city) {
	const response = await fetch(apiUrl + searchBox.value);
	var data = await response.json();
}


const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.name.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity;
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if (data.weather[0].main == "Clouds") {
	weatherIcon.src = "./imgs/clouds.png";
}
else if (data.weather[0].main == "Clear") {
	weatherIcon.src = "./imgs/clouds.png";
}
else if (data.weather[0].main == "Rain") {
	weatherIcon.src = "./imgs/rain.png";
}
else if (data.weather[0].main == "Drizzle") {
	weatherIcon.src = "./imgs/drizzle.png";
}
else if (data.weather[0].main == "Mist") {
	weatherIcon.src = "./imgs/mist.png";
}


searchButton.addEventListener("click", () => {
	checkWeather(searchBox.value);
})