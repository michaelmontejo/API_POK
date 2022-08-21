console.log('hello everybody')

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}






document.addEventListener('DOMContentLoaded', () => {
  const random = getRandomIntInclusive(1, 300);
  const random2 = getRandomIntInclusive(1, 300);
  const random3 = getRandomIntInclusive(1, 40);
  fetchData(random);
  id2 = random2;
  id3 = random3;

})


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const fetchData = async (id) => {
  try {


    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();



    const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`);
    const data2 = await res2.json();



    const res3 = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const data3 = await res3.json();

    console.log(data3)




    const pokemon = {
      img: data.sprites.other["official-artwork"].front_default,
      name: data.name,
      hp: data.stats[0].base_stat,
      exp: data.base_experience,
      attack: data.stats[1].base_stat,
      special: data.stats[3].base_stat,
      defending: data.stats[2].base_stat,

      img2: data2.sprites.other["official-artwork"].front_default,
      name2: data2.name,
      hp2: data2.stats[0].base_stat,
      exp2: data2.base_experience,
      attack2: data2.stats[1].base_stat,
      special2: data2.stats[3].base_stat,
      defending2: data2.stats[2].base_stat,

      img3: data3[0].image,
      name3: data3[0].character,
      aboutyou: data3[0].quote,
    }



    Card(pokemon);
    card2(pokemon);

  } catch (error) {
    console.log(error);
  }

}

const Card = (pokemon) => {

  const template = document.querySelector('#template-pokemon1').content;
  const flex = document.querySelector('.part1');
  const fragment = document.createDocumentFragment();
  const clone = template.cloneNode(true);



  clone.querySelector('.pok1-img').setAttribute('src', pokemon.img);
  clone.querySelector('.pok2-img').setAttribute('src', pokemon.img2);

  clone.querySelector('.pok1-title').innerHTML = `${pokemon.name} <span>${pokemon.hp} Hp</span>`;
  clone.querySelector('.pok2-title').innerHTML = `${pokemon.name2} <span>${pokemon.hp2} Hp</span>`;

  clone.querySelector('.pok1-power-attack').innerHTML = `<span>ATAQUE: </span> ${pokemon.attack} <span> K </span> `;
  clone.querySelector('.pok1-power-special').innerHTML = `<span>ESPECIAL: </span> ${pokemon.special} <span> K </span> `;
  clone.querySelector('.pok1-power-defending').innerHTML = `<span>DEFENSA: </span> ${pokemon.defending} <span> K </span> `;

  clone.querySelector('.pok2-power-attack').innerHTML = `<span>ATAQUE: </span> ${pokemon.attack2} <span> K </span> `;
  clone.querySelector('.pok2-power-special').innerHTML = `<span>ESPECIAL: </span> ${pokemon.special2} <span> K </span> `;
  clone.querySelector('.pok2-power-defending').innerHTML = `<span>DEFENSA: </span> ${pokemon.defending2} <span> K </span> `;

  fragment.appendChild(clone);
  flex.appendChild(fragment);

}


const card2 = (pokemon) => {

  const template = document.querySelector('#template-simpson').content;
  const flex = document.querySelector('.part2');
  const fragment = document.createDocumentFragment();
  const clone = template.cloneNode(true);

  clone.querySelector('.simpson-img').setAttribute('src', pokemon.img3);
  clone.querySelector('.simpson-name').textContent = pokemon.name3;
  clone.querySelector('.simpson-say').textContent = pokemon.aboutyou;


  fragment.appendChild(clone);
  flex.appendChild(fragment);

}




