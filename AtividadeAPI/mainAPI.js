var chaveAPI = "6b1c0330fa8f1d7bbf33665d5e763659";

const input = document.getElementById("city-input");
const button = document.getElementById("search-button");
const img = document.querySelector("img");

const city = document.getElementById("Cidade");
const degree = document.getElementById("Graus");

button.addEventListener("click", () => {
    if (input.value) {
        obterDadosClima();
    }
});

async function obterDadosClima() {
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${chaveAPI}&units=metric`;

    try {
        const resposta = await fetch(urlApi);
        if (!resposta.ok) {
            throw new Error("Erro ao buscar dados.");
        }
        const dados = await resposta.json();
        carregarInfoClima(dados);
    } catch (error) {
        alert("Erro ao obter dados do clima: " + error.message);
    }
}

function carregarInfoClima(dados) {
    city.innerHTML = `${dados.name}, ${dados.sys.country}`;
    degree.innerHTML = `Temperatura: ${Math.floor(dados.main.temp)}°C`;
    img.src = `http://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`;
}