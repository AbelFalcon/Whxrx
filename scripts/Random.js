let rCountry

export const generateRandom = () => {
  return fetch("../data/countries.json")
    .then((response) => response.json())
    .then((data) => {
      const randomCountry = data[Math.floor(Math.random() * data.length)]
      const rCountry = randomCountry.name
      console.log(randomCountry.name)
      return randomCountry.name
    })
    .catch((error) => {
      console.error("Error:", error)
    })
}

export { rCountry }
