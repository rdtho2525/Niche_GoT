const fetchCharacters = async () => {
  const response = await fetch('https://game-of-thrones-quotes.herokuapp.com/v1/characters')
  const characters = await response.json();
  return characters;
}

export default fetchCharacters;