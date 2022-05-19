export function getPokemons() {
    return fetch("https://pokeapi.co/api/v2/pokemon", { method: "GET" })
        .then(response => response.json());
}

export function getPokemon(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { method: "GET" })
        .then(response => response.json());
}