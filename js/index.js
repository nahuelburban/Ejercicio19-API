// Tu codigo JS va acá
const searchBtn = document.querySelector("#buscar");
const key = `f2c977a96c271e2248398dd8d845aa68`;



const getData= ()=> {

    peticionDeClima(document.querySelector("#ciudad").value);

}

const peticionDeClima = (city)=> {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2c977a96c271e2248398dd8d845aa68`)
    .then(res => res.json())
    .then(climate => {
        let {name, main:{temp, humidity}, wind: {speed}, weather:{0:{description, icon}}} = climate;
        let celsiusTemp = temp - 273.1; // celsius temp

        // Modifiying the DOM
        document.querySelector("#texto-ciudad").textContent = name; 
        document.querySelector("#temperatura").textContent = `${celsiusTemp.toFixed(1)} °C`;
        document.querySelector("#icono").src = `http://openweathermap.org/img/w/${icon}.png`;
        document.querySelector("#pronostico").textContent = description;
        document.querySelector("#humedad").textContent = `${humidity} %`;
        document.querySelector("#viento").textContent = `${speed}`;
        document.querySelector("#ciudad").value = " ";
    }
    )
};

searchBtn.addEventListener("click", getData);
