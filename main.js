const apiKey = "0eb2b840d53255297795ddcca37052e5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=0eb2b840d53255297795ddcca37052e5&q=";

//api handling 
async function checkWeather(city) {
	const response = await fetch(apiUrl + city);
	var data = await response.json();
}

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

//data update
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.name.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity;
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

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

//onclick
searchButton.addEventListener("click", () => {
	checkWeather(searchBox.value);
})