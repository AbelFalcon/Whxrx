import { generateRandom, rCountry } from "./Random.js"
const box = document.getElementById("box")

const indexHistory = new Set()

export async function queetion(rCountry) {
  try {
    const response = await fetch("../data/perCountry/" + rCountry + ".json")
    const data = await response.json()
    const curiosidades = data.curiosidades

    if (indexHistory.size === curiosidades.length) {
      console.log("Reiniciando historial ...")
      indexHistory.clear()
    }

    let randomIndex

    do {
      randomIndex = Math.floor(Math.random() * curiosidades.length)
    } while (indexHistory.has(randomIndex))

    const generatedQuestion = curiosidades[randomIndex]
    box.innerHTML = generatedQuestion
    indexHistory.add(randomIndex)
  } catch (error) {
    console.error("Error:", error)
  }
}
