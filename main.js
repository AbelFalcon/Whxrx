import { generateRandom } from "./scripts/Random.js"
import { queetion } from "./scripts/questions.js"
import { getTiempo } from "./scripts/tiempo.js"

const respuesta = document.getElementById("respuesta")
const modal = document.getElementById("modal")

export let randomCity

generateRandom().then((rCountry) => {
  randomCity = rCountry
  queetion(rCountry)

  respuesta.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      if (respuesta.value.toLowerCase() === rCountry.toLowerCase()) {
        modal.showModal()
      } else {
        console.log("Incorrecto")
      }
    }
  })
})

getTiempo("madrid")
