const apiKey = "0eb2b840d53255297795ddcca37052e5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metrics&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const whetherIcon = document.querySelector(".whether-icon");

async function checkWhether(city) {
	const response = await fetch(apiUrl + city + '&appid=${apiJey}');
	var data = await response.json();

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.name.temp) + "°c";
	document.querySelector(".humidity").innerHTML = data.main.humidity;
	document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

	if (data.whether[0].main == "Clouds") {
		whetherIcon.src = "./imgs/clouds.png";
	}
	else if (data.whether[0].main == "Clear") {
		whetherIcon.src = "./imgs/clouds.png";
	}
	else if (data.whether[0].main == "Rain") {
		whetherIcon.src = "./imgs/rain.png";
	}
	else if (data.whether[0].main == "Drizzle") {
		whetherIcon.src = "./imgs/drizzle.png";
	}
	else if (data.whether[0].main == "Mist") {
		whetherIcon.src = "./imgs/mist.png";
	}

}

searchButton.addEventListener("click", () => {
	checkWhether(searchBox.value);
})
