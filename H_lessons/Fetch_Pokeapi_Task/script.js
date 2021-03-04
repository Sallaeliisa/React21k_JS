// Anonymous function

(function(){
document.addEventListener("DOMContentLoaded", displayNames)

const pokemons = [];

function displayNames() {
fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000")
.then(response => response.json())
.then(json => {
    json.results.forEach(addPokemon)
})

}

function addPokemon(pokemon) {
    const newEl = document.createElement("div");
    newEl.className = "pokemon";
    newEl.innerHTML = `<a href="#">${pokemon.name}</a>`;
    document.getElementById("pokemonlist").appendChild(newEl);
    newEl.addEventListener("click", function() {
        fetch(pokemon.url)
        .then(response => response.json())
        .then(json => {
            console.log(json.sprites.front_default)})
    });
}

myFunction = () => {
    console.log(newEl);
    // fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000")
    // .then(response => response.json())
    // .then(json => console.log(json));
}


})();