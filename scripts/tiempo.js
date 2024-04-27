const grados = document.getElementById("grados")

// TODO: Tengo que agregar en el JSON. Pais y capital. Para poder sacar todos estos datos.

export function getTiempo(randomCity) {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=" +
      process.env.Weather_API +
      "&q=" +
      randomCity +
      "&aqi=no"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.current.temp_c)
      grados.innerHTML = data.current.temp_c + "°C"
    })
}
