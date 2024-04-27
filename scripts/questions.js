import { rCountry } from "./Random.js"
const box = document.getElementById("box")

export async function queetion(rCountry) {
  try {
    const response = await fetch("../data/perCountry/" + rCountry + ".json")
    const data = await response.json()
    console.log(data)
    const curiosidades = data.curiosidades
    const randomIndex = Math.floor(Math.random() * curiosidades.length)
    const randomCuriosidad = curiosidades[randomIndex]
    box.innerHTML = randomCuriosidad
  } catch (error) {
    console.error("Error:", error)
  }
}
