async function pokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=36', { method: 'GET' });
    const json = await response.json();
    const hasil = json.results;
    console.log(hasil);

    hasil.forEach(async (hasil) => {
      const dataRes = await fetch(hasil.url);
      const dataJson = await dataRes.json();
      const data = dataJson;

      const id = data.id;
      const name = data.name;
      const type = data.types[0].type.name;
      const img = data.sprites.front_default;

      const show = document.getElementById('show');
      show.innerHTML += `
        <div id="box" class="${type}">
            <p>${id} : ${name}</p>
            <img src="${img}" alt="${img}">
            <p>Type: ${type}</p>
        </div>`;
    });
  } catch (error) {
    console.error(error);
  }
}
