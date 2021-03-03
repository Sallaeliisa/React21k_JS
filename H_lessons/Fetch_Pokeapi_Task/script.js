let pokemons = [];

fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000")
.then(response => response.json())
.then(json => console.log(json));

let addAnchor = () => {
    pokemons.forEach((el) => {
    let newAnchor = document.createElement("a");
    newAnchor.innerHTML = "<a>" + el + "</a>";
    document.getElementById("anchors").appendChild(newAnchor);
})};

addAnchor();