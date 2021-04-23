export const getRandomIndex = (arr) => {
  return Math.floor(Math.random() * arr.length)
}

export const shuffleCharacters = array => {
  return array.sort(() => 0.5 - Math.random());
}