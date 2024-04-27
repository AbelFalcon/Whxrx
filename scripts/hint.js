import { queetion } from "./questions.js"
import { randomCity } from "../main.js"

const hints = document.querySelectorAll("[id^='hint']")

hints.forEach((hint) => {
  hint.addEventListener("click", () => {
    hint.classList.add("hint-used")
    queetion(randomCity)
  })
})
