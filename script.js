function randomizer() {
  let max = 20;
  let min = 1;
  return Math.floor(Math.random() * max) + min;
}

async function getRickMorty() {
  try {

    let response = await fetch(
      `https://rickandmortyapi.com/api/character/${randomizer()}`
    );
    let data = await response.json();
    let nombre = data.name.toUpperCase();
    let especie = data.species;
    let foto = data.image;
    let episodios = data.episode;
    let response2 = await fetch(`${episodios[0]}`);
    let data2 = await response2.json();
    let episodiosName = data2.name.toUpperCase();
    let fecha = data2.air_date;
    document.querySelector(".sec").innerHTML = `
              <img src="${foto}">
              <p class="name">${nombre}</p>
              <p class="especie">Especie - ${especie}</p>
              <p class="epi">Aparece en ${episodios.length} episodio/s</p>
              <p class="epiName">Su primera aparición fué en el episodio: <br/> "${episodiosName}" <br/> estrenado en ${fecha} </p>`;
  } catch (error) {
    console.log(`ERROR Error: ${error.stack}`);
  }
}
getRickMorty();
