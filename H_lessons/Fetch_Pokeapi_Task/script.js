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
    newEl.innerHTML = `<div class="name"><a href="#">${pokemon.name}</a></div>`;
    document.getElementById("pokemonlist").appendChild(newEl);
    newEl.addEventListener("click", function() {
        fetch(pokemon.url)
        .then(response => response.json())
        .then(json => {
            let link = json.sprites.front_default;
            newEl.innerHTML = `<div class="image">
            <img src="${link}"/>
        </div>`;}
            )
    });
}


})();